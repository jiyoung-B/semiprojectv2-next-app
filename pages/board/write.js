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
// }
export default function Write( {board} ) {
    const [title, setTitle] = useState('');
    const [userid, setUserid] = useState('catgirl');
    const [contents, setContents] = useState('');


    return (
        <main>
            <div id="main">
                <h2>게시판 새글쓰기</h2>
                <form name="write" id="writefrm">
                    <div><label htmlFor="title">제목</label>
                        <input type="text" name="title" id="title" /></div>

                    <div><label htmlFor="uid">작성자</label>
                        <input type="text" name="uid" id="uid"
                               value={userid} readOnly /></div>

                    <div><label htmlFor="contents" className="drgup">본문</label>
                        <textarea name="contents" id="contents"
                                  rows="7" cols="55"></textarea></div>

                    <div><label></label>
                        <button type="button" id="writebtn">입력완료</button>
                        <button type="reset">다시입력</button>
                    </div>
                </form>
            </div>
        </main>


    )
}