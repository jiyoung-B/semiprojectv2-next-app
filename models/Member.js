import mariadb from './MariaDB';

let membersql  = {
    insertsql : ' insert into member (userid,passwd,name,email) values (?, ?, ?, ?) ',

    loginsql : ' select count(userid) cnt from member ' +
        ' where userid = ? and passwd = ? ',
    selectOne: ' select mno, userid, name, email, ' +
        ` date_format(regdate, "%Y-%m-%d %H:%i:%s") regdate ` +
        ' from member where userid = ? '
}

// 동적쿼리 생성 함수
const makeWhere = (ftype, fkey) => {
    let where = ` where title = '${fkey}' `;
    if (ftype == 'userid') where = ` where userid = '${fkey}' `
    else if (ftype == 'contents') where = `  where contents like '%${fkey}%'  `
    return where;
};

class Member {

    constructor(userid, passwd, name, email) {
        this.userid = userid;
        this.passwd = passwd;
        this.name = name;
        this.email = email;
    }


    static login(userid, passwd){
        return new Member(userid, passwd, null, null)
    }

    static modifyOne(bno, title, contents){
        return new Board(bno, title, null, null, contents, null)
    }

    async insert() {  // 새글쓰기
        let conn = null;
        let params = [this.userid, this.passwd, this.name, this.email];
        let result = -1; // oracledms 1 ** 주의하기

        try {
            conn = await mariadb.makeConn();  // 연결
            let result = await conn.query(membersql.insertsql, params); // 실행
            await conn.commit();  // 확인
            if (result.affectedRows > 0) { result = result.affectedRows;
                console.log('회원정보 저장 성공!');
            }

        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn(); // 종료
        }

        return result;
    }

    async login(uid, pwd) {  // 로그인 처리
        let conn = null;
        let params = [uid, pwd];
        let isLogin = 0;

        try {
            conn = await mariadb.makeConn();
            let result  = await conn.query(membersql.loginsql, params);
            console.log("멤버로그인 :", result);


        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }
        // let result = {'boards': rowData, 'allcnt': allcnt, 'idx': idx};

        return isLogin;
    }


    async SelectOne(uid) {  // 본문조회
        let conn = null;
        let params = [uid];
        let result = -1;

        try {
            conn = await mariadb.makeConn();
            result = await conn.query(membersql.selectOne, params);
        } catch (e) {
            console.log(e);
        } finally {
            await mariadb.closeConn();
        }

        return result;
    }

    // async update() {
    //     let conn = null;
    //     let params = [this.title, this.contents, this.bno];
    //     let updatecnt = 0;
    //
    //     try {
    //         conn = await mariadb.makeConn();
    //         let result = await conn.query(boardsql.update, params);
    //         await conn.commit();
    //         if (result.affectedRows > 0) updatecnt = result.affectedRows;
    //     } catch (e) {
    //         console.log(e);
    //     } finally {
    //         await mariadb.closeConn();
    //     }
    //
    //     return updatecnt;
    // }
    //
    // async delete(bno) {
    //     let conn = null;
    //     let params = [bno];
    //     let deletecnt = 0;
    //
    //     try {
    //         conn = await mariadb.makeConn();
    //         let result = await conn.query(boardsql.delete, params);
    //         await conn.commit();
    //         if (result.affectedRows > 0) deletecnt = result.affectedRows;
    //     } catch (e) {
    //         console.log(e);
    //     } finally {
    //         await mariadb.closeConn();
    //     }
    //
    //     return deletecnt;
    // }

}

module.exports = Member;