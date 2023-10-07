const { Model } = require('sequelize')
const droppoint = require('../model/droppoint')
const review = require('../model/review')

async function filter(req, res, next) {
    var daerah = req.query.kategori
    if (daerah === "semua"){ 
        var dpAll = await droppoint.findAll()
        return res.send(dpAll)       
    }
        var dpDaerah = await droppoint.findAll({where: {daerah:daerah}})
        return res.send(dpDaerah)
}

function daerah(req, res, next) {
    let cat = req.params.kategori

    var resp = []
    for (const val of DROPPOINT) {
        if (val.daerah === cat) {
            resp.push(val)
        }
    }

    res.json(resp)
}

const addReview = async (req, res) => {
    try {
        
        const body = req.body
        console.log(body)
        const nama = body.nama
        const pesan = body.pesan
        await review.create({
            nama,
            pesan,
            image: req.files["image"][0].filename,
        });
        return res.send({
            status: 200,
            message: "Berhasil menyimpan data",
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: "Gagal menyimpan data",
        });
    }
}


module.exports = {
    filter,
    daerah,
    addReview
}