import mariadb from 'mariadb'

const dbconfig = {
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PWD,
    database: process.env.MARIADB_DB
}
export default async (req, res) => {
    let conn;
    //오라클
    //const sql = ' select bno, title, userid, to_char(regdate, "yyyy-mm-dd"), views from board order by bno desc ';
    //마리아db
    const sql = ' select bno, title, userid, date_format(regdate, "%Y-%m-%d"), views from board order by bno desc limit 0, 25';

    try {
        conn = await mariadb.createConnection(dbconfig);

        const rawdata = await conn.query(sql);

        // 정상 처리 후 응답 : 상태코드 200, 조회결과 반환
        res.status(200).json(rawdata)

        conn = await mariadb.createConnection(dbconfig);
    } catch (err) {
        console.log(err);

        // 처리 실패시 응답 : 상태코드 500, 오류메세지 반환
        res.status(500).json(err)

    } finally {
        if (conn) await conn.close();
    }

}
