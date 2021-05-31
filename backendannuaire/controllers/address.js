const Address = require('../models/Address');

exports.createAddress = (req, res, next) => {
    delete req.body._id;
    const address = new Address({
        ...req.body
    });
    address.save()
        .then(() => res.status(201).json({ message: 'contacts enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.modifyAddress = (req, res, next) => {
    Address.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'contact modifié !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.deleteAddress = (req, res, next) => {
    Address.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'contact supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.getOneAddress = (req, res, next) => {
    Address.findOne({ _id: req.params.id })
        .then(address => res.status(200).json(address))
        .catch(error => res.status(404).json({ error }));
};
exports.getAllAddresss = (req, res, next) => {
    Address.find()
        .then(addresss => res.status(200).json(addresss))
        .catch(error => res.status(400).json({ error }));
};