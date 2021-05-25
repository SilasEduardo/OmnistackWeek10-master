const { Router } = require('express');
const parseStringAsArray = require('./utils/parseStringAsArray')
const router =  Router();

const devController = require('./controller/DevController');
const searchController = require('./controller/SearchController');
// index, show, update, destroy, store
router.get('/devs', devController.index);

router.post('/devs', devController.store);

router.get('/search', searchController.index);

module.exports = router;