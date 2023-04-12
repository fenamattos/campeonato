const database = require("../database");
exports.consultarTime = (req,res) => {
    const query = "SELECT * FROM pontuacao ORDER BY pontuacao ASC;"
    database.query(query).then((resultado) => {
        res.status(200).send({times:resultado.rows});
    })
    .catch((erro) => {
        res.status(500).send({erro:erro});
    })
}
