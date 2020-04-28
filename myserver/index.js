let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let env = require('dotenv').config()
let app = express();
app.use(cors());


app.use('/api', bodyParser.json(), router); 
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let pictures = [
    { 'id': 0, 'caption': 'น้อง', 'name': 'MEI', 'img': 'https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.0-9/94128983_139090711047600_3597818808787533824_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeHLXW0UrAQS-Whg4QuXtR7W6q-OYR5ftfjqr45hHl-1-PabihiOkHM7Ux3TgsNEwBglHGkZj8U2rWfij3NbD-bT&_nc_ohc=-LWt_9UJ6c8AX8vWSy2&_nc_ht=scontent.fbkk7-3.fna&oh=fd2574e70b8524d5f0a6fe6b0d50743f&oe=5EC944F2' },
    { 'id': 1, 'caption': 'เซ็กซี่', 'name': 'MEI', 'img': 'https://p16-sg.muscdn.com/aweme/720x720/tiktok-obj/1656168091530242.jpeg' },
    { 'id': 2, 'caption': 'น้อง', 'name': 'MEI', 'img': 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/91288645_122053589417979_7434031555456008192_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_eui2=AeG2yN4i4Rt2jV3L9xE_isy0cg4LCgxnkGJyDgsKDGeQYrLy2QLpQn1-U8zUcZ63VxGfGQr3Hrx0KNsW-PeVGIKL&_nc_ohc=-O-sj6BPZB8AX9IlaDC&_nc_ht=scontent.fbkk7-2.fna&oh=50effd69b5a5d22d8377ef3ccc903931&oe=5EC80B6A' },
    { 'id': 3, 'caption': 'น่า', 'name': 'MEI', 'img': 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/93152925_128238888799449_8288082258917588992_n.jpg?_nc_cat=110&_nc_sid=110474&_nc_eui2=AeE3U7B3p55jXeacAD88CfJ-P1TRCKhLo24_VNEIqEujbq34KmzSCPzHXzh04EQnARKSV5CQ7tPv2Snk2Bq1rEYc&_nc_ohc=ZYMT8Npsy1gAX-J3FIO&_nc_ht=scontent.fbkk7-2.fna&oh=0c6b8adc6e18e3cf927f8b2ef7594684&oe=5EC88C01' },
    { 'id': 4, 'caption': 'รัก', 'name': 'MEI', 'img': 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/89105105_100357068254298_3868159138617884672_o.jpg?_nc_cat=111&_nc_sid=6e5ad9&_nc_eui2=AeG0VMrxcFfy54YgnD2RAi1hMN41G3-7fzYw3jUbf7t_NsPV3dYcxZK9jDwlfqPlFkA0hQqJn9BLFeJ7OZPjMWBw&_nc_ohc=nwgkpkOR-aEAX9r6E7v&_nc_ht=scontent.fbkk7-2.fna&oh=2fe676bb966d45562e25215fef652818&oe=5EC812ED' },
    { 'id': 5, 'caption': 'ใสใส', 'name': 'MEI', 'img': 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.0-9/94910302_140100724279932_7839679955158958080_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_eui2=AeEXAyGTwhZAKg-iT8NrR-TszftI_M4HMxbN-0j8zgczFg1FfyyPgEtiXAS6YOdVEtqtorCoQmNQlQTB780MQAjo&_nc_ohc=wHTctZhW7OsAX8Rhd1_&_nc_ht=scontent.furt1-1.fna&oh=dd5023bd64da9495ddfe6a8aed807bc8&oe=5ECDAADF' },
    { 'id': 6, 'caption': 'ถ่ายคู่ธรรมชาติ', 'name': 'MEI', 'img': 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.0-9/94569248_139752220981449_7106941964477530112_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_eui2=AeHDzJU3Ra7D3Lz3rDue65zK_tSHtdHGnvv-1Ie10cae--0-0vfttzz85pos-sXhUU8QZm9NVzHCiQ6zCcCpP1r_&_nc_ohc=lmcSVrGh-HIAX9dzoqy&_nc_ht=scontent.furt1-1.fna&oh=d7cf7accdcd2d44bc833b0dfdafcff4e&oe=5ECC7970' },
    { 'id': 7, 'caption': 'ภาพวาด', 'name': 'MEI', 'img': 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.0-9/p960x960/94247441_3229383567106623_7288130803446317056_o.jpg?_nc_cat=103&_nc_sid=1480c5&_nc_eui2=AeHaWsJolcN_3NOE1oAHvURVgUPS-PKZL_eBQ9L48pkv9x40G_i7juPCimmBIsLBM5G-8uNMc5IPCgGjrqORYX9W&_nc_ohc=NmoIVqZg-xMAX-x0AoG&_nc_ht=scontent.furt1-1.fna&_nc_tp=6&oh=1a8a8d89289112bb6d6385ed2a46959c&oe=5ECC27FF' },

];

router.route('/pictures')
    // get all pictures
    .get((req, res) => res.json(pictures))
    // insert a new picture
    .post((req, res) => {
        var picture = {};
        picture.id = pictures.length > 0 ? pictures[pictures.length - 1].id + 1 : 0;
        picture.caption = req.body.caption
        picture.name = req.body.name
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
        pictures[index].caption = req.body.caption;
        pictures[index].name = req.body.name;
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
app.listen(process.env.PORT, () => console.log("Server is running"));
