import axios from "axios";
import {useState} from "react";
import {check_captcha, process_submit, handleInput} from "../../components/Utils";
import Layout from "../../components/layout/Layout";

export async function getServerSideProps(ctx) {
    let bno = ctx.query.bno;
    let url = `http://localhost:3000/api/board/view?bno=${bno}`;
    const res = await axios.get(url);  // axiox
    const board = await res.data[0];
    console.log(board);

    return { props : {board} }

}

export default function Update( {board} ) {

    const [title, setTitle] = useState(board.title);
    const [userid, setUserid] = useState('catgirl');
    const [contents, setContents] = useState(board.contents);
    const [recaptcha, setRecaptcha] = useState(undefined);

    const handleupdate = async () => {
        if (grecaptcha.getResponse()
            && await check_captcha(grecaptcha.getResponse())) {
            const data = {bno: board.bno, title: title, contents: contents};

            if (await process_submit('/api/board/update', data) > 0) {
                location.href = '/board/view?bno=' + board.bno;
            } else {
                alert('!!!');
            }
        }


    };

    return (
        <main>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <div id="main">
                <h2>게시판 수정하기</h2>
                <form name="write" id="writefrm">
                    <div><label htmlFor="title">제목</label>
                        <input type="text" name="title" id="title"
                               value={title}
                               onChange={e => handleInput(setTitle, e)} /></div>

                    <div><label htmlFor="uid">작성자</label>
                        <input type="text" name="uid" id="uid"
                               value={userid} readOnly /></div>

                    <div><label htmlFor="contents" className="drgup">본문</label>
                        <textarea name="contents" id="contents" onChange={e => handleInput(setContents, e)}
                                  rows="7" cols="55" value={contents} /></div>

                    <div><label></label>
                        <div className="g-recaptcha cap" data-sitekey="6LdJ4OskAAAAADNIADK7jJrjeVgeG9Y9mP3bx_V_"></div>
                    </div>

                    <div><label></label>
                        <button type="button" id="writebtn" onClick={handleupdate}>입력완료</button>
                        <button type="reset">다시입력</button>
                    </div>
                </form>
            </div>
        </main>

    );
}

Update.getLayout = (page) => (
    <Layout meta={{title: '게시판 수정하기'}}>
        {page}
    </Layout>
)
