import Header from "./Header";
import Footer from "./Footer";

// localhost:3000/member/join

const Layout = ({children, menu, meta}) => {
    console.log('layout -', menu);

    const {title, description, icon} = meta;
    return (
            <html lang="ko">
            <head>
                {/*<meta charSet="UTF-8" />*/}
                {/*<meta name="viewport" content="width=device-width, initial-scale=1" />*/}
                <link rel="stylesheet" href="/css/normalize.css" />
                <link rel="stylesheet" href="/css/main.css" />
                <link rel="stylesheet" href="/css/project2.css" />
                <title>{title}</title>
                <link rel="icon" href={icon || 'favicon.ico'} />
                {/*<script src="https://www.google.com/recaptcha/api.js" async defer></script>*/}
            </head>
            <div id="wrapper">
                <Header menu={menu}/>
                {children}
                <Footer />
            </div>
            </html>
    )
};
export default Layout;