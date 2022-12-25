const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const { response } = require('express');
// https://www.facebook.com/photo/?fbid=1368179713987704&set=a.115931115879243
// post id for image = 115931115879243
// access token = EAAKEvbZB9KnEBAPNTjJZCoGtZBxNugOE9xbMBJUB6ZCcf2TnUQFvb61XEqbvKGEybluYlyqfA6rs10hSZCbU4N6y2dLZCjmrZAgqELElchgwEh20SpwZBmM60FXNi0eRW9cRh3b8qDx4sZBivuBYdoScJI2AZCs41ZBjrI5lfm2nZAVKy5eZAMviY6LOhkUsixkPZBWt4yqnp3ZAEvJvOW2FJcmt5OT
// page id = 100967834989781 craft , 100064289492280 JI

const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8001, () => {
    console.log("Server started")
})

app.post("/postToPage", (req, res) => {
    const text = req.body.text;
    const img = req.body.img;

    axios.post()
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })



})
