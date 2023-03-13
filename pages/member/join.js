import {check_captcha, handleInput, process_submit } from "../../models/Utils";
import {useState} from "react"

export default function Join() {

    const [userid, setUserid] = useState('');
    const [passwd, setPasswd,] = useState('');
    const [repwd, setRepwd] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const handlejoin = async () => {
        if (grecaptcha.getResponse() // 이미지캡챠 클릭하면
            && await check_captcha(grecaptcha.getResponse())) { // 클릭한게 정상이라면
            //글쓰기 작업 진행
            const data = {userid: userid, passwd: passwd, name: name, email: email};
            if (await process_submit('/api/member/join', data) > 0) { // process_write => process_submit으로 Utils에 모듈화
                location.href = '/member/login'
            }
        }

    };


    return (
        <main>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <h2>회원가입</h2>
            <form name="join">
                <div><label for="userid">아이디</label>
                    <input type="text" name="uid" id="uid" onChange={e => handleInput(setUserid,e)} /></div>
                <div><label for="pwd">비밀번호</label>
                    <input type="password" name="pwd" id="pwd" onChange={e => handleInput(setPasswd,e)}/></div>
                <div><label for="repwd">비밀번호 확인</label>
                    <input type="password" name="repwd" id="repwd" onChange={e => handleInput(setRepwd,e)}/></div>
                <div><label for="name">이름</label>
                    <input type="text" name="name" id="name" onChange={e => handleInput(setName,e)}/></div>
                <div><label for="email">이메일</label>
                    <input type="text" name="email" id="email" onChange={e => handleInput(setEmail,e)}/></div>

                <div><label></label>
                    <div className="g-recaptcha cap" data-sitekey="6LdJ4OskAAAAADNIADK7jJrjeVgeG9Y9mP3bx_V_"></div>
                </div>

                <div><label></label>
                    <button type="button" className="btns" id="joinbtn" onClick={handlejoin}> 입력완료 </button>
                    <button type="reset"> 다시입력 </button>
                </div>
            </form>
        </main>

    );
};
