import axios from "axios";
import {useState} from "react";

// export async function getServerSideProps(ctx) {
//     let bno = ctx.query.bno;
//     let url = `http://localhost:3000/api/board/view?bno=${bno}`;
//     const res = await axios.get(url);  // axiox
//     const board = await res.data[0];
//     console.log(board);
//
//     return { props : {board} }
//
const check_captcha = async (response) => {
    let url = '/api/board/recaptcha?response=' + response;
    const data = axios.get(url).then(data => data.data);
    console.log((await data).success);

    return (await data).success;

};
const process_write = async (data) => {
    const cnt = fetch('/api/board/write', {
        method: 'POST', mode: 'cors', // 주소 같으면 cors 필요없음
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json());

    return (await cnt).cnt;
};

export default function Write() {
    const [title, setTitle] = useState('');
    const [userid, setUserid] = useState('catgirl');
    const [contents, setContents] = useState('');
    const [recaptcha, setRecaptcha] = useState(undefined);


    const handlewrite = async () => {
        if (grecaptcha.getResponse() // 이미지캡챠 클릭하면
            && check_captcha(grecaptcha.getResponse())) { // 클릭한게 정상이라면
            //글쓰기 작업 진행
            const data = {title: title, userid: userid, contents: contents};
            if (await process_write(data) > 0) {
                location.href = '/board/list'
            }
        }

    };
    const handleTitle = (e) => {setTitle(e.target.value)};
    const handleContents = (e) => {setContents(e.target.value)};
    return (
        <main>
            <div id="main">
                <h2>게시판 새글쓰기</h2>
                <form name="write" id="writefrm">
                    <div><label htmlFor="title">제목</label>
                        <input type="text" name="title" id="title" onChange={handleTitle} /></div>

                    <div><label htmlFor="uid">작성자</label>
                        <input type="text" name="uid" id="uid"
                               value={userid} readOnly /></div>

                    <div><label htmlFor="contents" className="dragup">본문</label>
                        <textarea name="contents" id="contents" onChange={handleContents}
                                  rows="7" cols="55"></textarea></div>

                    <div><label></label>
                    <div className="g-recaptcha cap" data-sitekey="6LdJ4OskAAAAADNIADK7jJrjeVgeG9Y9mP3bx_V_"></div>
                    </div>

                    <div><label></label>
                        <button type="button" id="writebtn" onClick={handlewrite}>입력완료</button>
                        <button type="reset">다시입력</button>
                    </div>
                </form>
            </div>
        </main>


    )
}