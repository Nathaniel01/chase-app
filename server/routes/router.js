//const express = require("express")
//const router = express.Router()
//const RayBan = require("../models/rbModel")
//const app = require("../server")

module.exports = (app) => {

    app.get('/api', (req, res) => {
        return res.status(200).send({
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

        return res.status(200).send({
            success: 'Saved to the DB.'
        })
    })

}