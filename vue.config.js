module.exports = {
    devServer: {
        before: (app) => {
            app.get('/getDate', (req, res) => {
                var data = require('./mock/data.json')
                res.send(data)
            })
        }
    }
}