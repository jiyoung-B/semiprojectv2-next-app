import Member from "../../../models/Member";

export default async (req, res) => {
    const {userid, passwd, name, email} = req.body; // body로 넘겼기 때문에 body로 받아야함.
    console.log(userid, passwd, name, email);

    try{
        const cnt = new Member(userid, passwd, name, email).insert().then(result => result);

        console.log(await cnt); // console 확인은 cnt로
        res.status(200).json({cnt: await cnt}) // 하지만 보낼때는 {cnt: await cnt}로 보낸다.

    }catch (err){
        res.status(500).json(err)
    }
}