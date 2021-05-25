const axios = require('axios');
const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');

exports.store = async (req, res) => {

    const { github_username, techs, latitude, longitude } = req.body;

    const techsArray = parseStringAsArray(techs);

    console.log(techsArray)

    const findDev = await Dev.findOne({ github_username });

    if(!findDev) {

        const apiRes = await axios.get(`https://api.github.com/users/${github_username}`);
    
        const { name = login, avatar_url, bio } = apiRes.data;
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }
    
        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        })
    } else {
        return res.json({ message: 'user existis!'})
    }

    return res.json(dev);
}


exports.index = async (req, res) => {
    const devs = await Dev.find();

    return res.json(devs);
}