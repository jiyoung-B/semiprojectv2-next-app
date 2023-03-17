import axios from "axios";
import {check_captcha, handleInput, process_submit } from "../../components/Utils";
import {useState} from "react";
import Layout from "../../components/layout/Layout";


export default function Write() {
    const [title, setTitle] = useState('');
    const [userid, setUserid] = useState('catgirl');
    const [contents, setContents] = useState('');
    const [recaptcha, setRecaptcha] = useState(undefined);


    const handlewrite = async () => {
        if (grecaptcha.getResponse() // 이미지캡챠 클릭하면
            && await check_captcha(grecaptcha.getResponse())) { // 클릭한게 정상이라면
            //글쓰기 작업 진행
            const data = {title: title, userid: userid, contents: contents};
            if (await process_submit('/api/board/write', data) > 0) { // process_write => process_submit으로 Utils에 모듈화
                location.href = '/board/list'
            }
        }

    };

    return (
        <main>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <div id="main">
                <h2>게시판 새글쓰기</h2>
                <form name="write" id="writefrm">
                    <div><label htmlFor="title">제목</label>
                        <input type="text" name="title" id="title" onChange={e => handleInput(setTitle,e)} /></div>

                    <div><label htmlFor="uid">작성자</label>
                        <input type="text" name="uid" id="uid"
                               value={userid} readOnly /></div>

                    <div><label htmlFor="contents" className="drgup">본문</label>
                        <textarea name="contents" id="contents" onChange={e => handleInput(setContents,e)}
                                  rows="7" cols="55"></textarea></div>

                    <div><label></label>
                    <div className="g-recaptcha cap" data-sitekey={process.env.SITE_KEY}></div>
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

Write.getLayout = (page) => (
    <Layout meta={{title: '새글쓰기'}}>
        {page}
    </Layout>
)
