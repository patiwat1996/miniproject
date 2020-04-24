let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let pictures = [
    { 'id': 0, 'name': 'น้อง', 'weight': 'MEI', 'img': 'https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.0-9/94128983_139090711047600_3597818808787533824_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeHLXW0UrAQS-Whg4QuXtR7W6q-OYR5ftfjqr45hHl-1-PabihiOkHM7Ux3TgsNEwBglHGkZj8U2rWfij3NbD-bT&_nc_ohc=-LWt_9UJ6c8AX8vWSy2&_nc_ht=scontent.fbkk7-3.fna&oh=fd2574e70b8524d5f0a6fe6b0d50743f&oe=5EC944F2' },
    { 'id': 1, 'name': 'เซ็กซี่', 'weight': 'MEI', 'img': 'https://p16-sg.muscdn.com/aweme/720x720/tiktok-obj/1656168091530242.jpeg' },
    { 'id': 2, 'name': 'น้อง', 'weight': 'MEI', 'img': 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/91288645_122053589417979_7434031555456008192_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_eui2=AeG2yN4i4Rt2jV3L9xE_isy0cg4LCgxnkGJyDgsKDGeQYrLy2QLpQn1-U8zUcZ63VxGfGQr3Hrx0KNsW-PeVGIKL&_nc_ohc=-O-sj6BPZB8AX9IlaDC&_nc_ht=scontent.fbkk7-2.fna&oh=50effd69b5a5d22d8377ef3ccc903931&oe=5EC80B6A' },
    { 'id': 3, 'name': 'น่า', 'weight': 'MEI', 'img': 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/93152925_128238888799449_8288082258917588992_n.jpg?_nc_cat=110&_nc_sid=110474&_nc_eui2=AeE3U7B3p55jXeacAD88CfJ-P1TRCKhLo24_VNEIqEujbq34KmzSCPzHXzh04EQnARKSV5CQ7tPv2Snk2Bq1rEYc&_nc_ohc=ZYMT8Npsy1gAX-J3FIO&_nc_ht=scontent.fbkk7-2.fna&oh=0c6b8adc6e18e3cf927f8b2ef7594684&oe=5EC88C01' },
    { 'id': 4, 'name': 'รัก', 'weight': 'MEI', 'img': 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/89105105_100357068254298_3868159138617884672_o.jpg?_nc_cat=111&_nc_sid=6e5ad9&_nc_eui2=AeG0VMrxcFfy54YgnD2RAi1hMN41G3-7fzYw3jUbf7t_NsPV3dYcxZK9jDwlfqPlFkA0hQqJn9BLFeJ7OZPjMWBw&_nc_ohc=nwgkpkOR-aEAX9r6E7v&_nc_ht=scontent.fbkk7-2.fna&oh=2fe676bb966d45562e25215fef652818&oe=5EC812ED' },
 ];

router.route('/pictures')
    // get all pictures
    .get((req, res) => res.json(pictures))
    // insert a new picture
    .post((req, res) => {
        var picture = {};
        picture.id = pictures.length > 0 ? pictures[pictures.length - 1].id + 1 : 0;
        picture.name = req.body.name
        picture.weight = req.body.weight
        picture.img = req.body.img
        pictures.push(picture);
        res.json({ message: 'picture created!' })
    })

router.route('/pictures/:picture_id')
    .get((req, res) => {
        let id = req.params.picture_id
        let index = pictures.findIndex(picture => (picture.id === +id))
        res.json(pictures[index])                   // get a picture
    })
    .put((req, res) => {                               // Update a picture
        let id = req.params.picture_id
        let index = pictures.findIndex(picture => (picture.id === +id))
        pictures[index].name = req.body.name;
        pictures[index].weight = req.body.weight;
        pictures[index].img = req.body.img;
        res.json({ message: 'picture updated!' + req.params.picture_id });
    })
    .delete((req, res) => {                   // Delete a picture
        // delete     pictures[req.params.picture_id]
        let id = req.params.picture_id
        let index = pictures.findIndex(picture => picture.id === +id)
        pictures.splice(index, 1)
        res.json({ message: 'picture deleted: ' + req.params.picture_id });
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(80, () => console.log("Server is running"));