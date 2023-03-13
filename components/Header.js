import Link from "next/link";

const Header = () => {
    return(
    <>
        <header><h1>JSP 프로젝트 v1</h1></header>
        <nav>
            <ul className="header">
                <li><Link href="/">Home</Link></li>
                <li><a href="/member/join">회원가입</a></li>
                <li><Link href="/member/login">로그인</Link></li>
                <li><Link href="/member/logout">로그아웃</Link></li>
                <li><Link href="/board/list">게시판</Link></li>
                <li><Link href="/member/myinfo">회원정보</Link></li>
            </ul>
            <hr className="clear" />
        </nav>
    </>
    )
};
export default Header;