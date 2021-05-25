const Dev = require('../models/Dev')

const parseStringAsArray = require('../utils/parseStringAsArray');

exports.index = async(req, res) => {

    const { latitude, longitude, techs } = req.query;

    const techArray = parseStringAsArray(techs);

    const devs = await Dev.find({
        techs: {
            $in: techArray,
        },
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    cordinates: [longitude, latitude]
                },
                $maxDistance: 1000,
            }
        }
    })

    return res.json({ devs })
}