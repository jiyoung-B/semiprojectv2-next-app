import Board from "../../../models/Board";

export default async (req, res) => {
    const {title, userid, contents} = req.body; // body로 넘겼기 때문에 body로 받아야함.
    console.log(title, userid, contents);

    try{
        // constructor(bno, title, userid, regdate, contents, views) 값을 전부 넣어줘야해.
        //new Board(null, title, userid, null, contents, null).insert() 번거로우니 static 으로 넘겨.
        const cnt = Board.newOne(title, userid, contents).insert().then(result => result);

        console.log(await cnt); // console 확인은 cnt로
        res.status(200).json({cnt: await cnt}) // 하지만 보낼때는 {cnt: await cnt}로 보낸다.

    }catch (err){
        res.status(500).json(err)
    }
}