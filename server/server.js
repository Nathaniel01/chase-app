require("dotenv").config();

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');
const RayBan = require("./models/rbModel");
//require('./server/routes/router.js')(app);

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))





mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (e) => {
        if (!e) console.log("database connected");
        else console.log(e)
    }
)

app.get("/", (req, res) => {
    res.send("Express here")
})

app.get('/api', (req, res) => {
    res.status(200).send({
        success: 'This is the API endpoint.'
    })
});

app.post('/test', (req, res) => {
    console.log('request', req.body);

    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const city = req.body.city
    const state = req.body.state
    const zip = req.body.zip
    const wanted_collection = req.body.wanted_collection

    const rayBan = new RayBan({
        first_name,
        last_name,
        email,
        city,
        state,
        zip,
        wanted_collection
    });

    rayBan.save()

    return res.json({ success: 'Saved to db' });
})

app.listen(3001, () => {
    console.log("Running server...")
})

module.exports = app;
