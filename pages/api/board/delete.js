import Board from "../../../models/Board";

export default async (req, res) => {
    let {bno} = req.query

    try {
        const cnt = new Board().delete(bno).then(result => result);
        // res.status(200).json({'cnt' : await cnt});
        res.redirect(301, '/board/list');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}