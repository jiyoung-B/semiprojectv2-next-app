import Header from "./Header";
import Footer from "./Footer";

// localhost:3000/member/join

const Layout = ({children, menu}) => {
    console.log('layout -', menu);
    return (
            <html lang="ko">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="/css/normalize.css" />
                <link rel="stylesheet" href="/css/main.css" />
                <link rel="stylesheet" href="/css/project2.css" />
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>

                <title>index</title>

            </head>
            <body>
            <div id="wrapper">
            <Header menu={menu}/>{children}
            <Footer />

            </div>
            </body>
            </html>
    )
};
export default Layout;