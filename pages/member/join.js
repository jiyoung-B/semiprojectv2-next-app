const Join = () => {
    return (
        <main>
            <h2>회원가입</h2>
            <form name="join">
                <div><label for="userid">아이디</label>
                    <input type="text" name="uid" id="uid" /></div>
                <div><label for="pwd">비밀번호</label>
                    <input type="password" name="pwd" id="pwd" /></div>
                <div><label for="repwd">비밀번호 확인</label>
                    <input type="password" name="repwd" id="repwd" /></div>
                <div><label for="name">이름</label>
                    <input type="text" name="name" id="name" /></div>
                <div><label for="email">이메일</label>
                    <input type="text" name="email" id="email" /></div>
                <div><label></label>
                    <button type="button" className="btns" id="joinbtn"> 입력완료 </button>
                    <button type="reset"> 다시입력 </button>
                </div>
            </form>
        </main>

    );
};

export default Join;