const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const addressCtrl = require('../controllers/address');

router.get('/', auth, addressCtrl.getAllAddresss);
router.post('/', auth, addressCtrl.createAddress);
router.get('/:id', auth, addressCtrl.getOneAddress);
router.put('/:id', auth, addressCtrl.modifyAddress);
router.delete('/:id', auth, addressCtrl.deleteAddress);

module.exports = router;