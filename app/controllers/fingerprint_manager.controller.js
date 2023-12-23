var FingerprintManager = require('../models/fingerprint_manager.model');

exports.all = function (req, res) {
    var data = req.body;
    FingerprintManager.all(data, function (response) {
        res.send({ result: response });
    });
}

exports.getById = function (req, res) {
    var id = req.params.id;
    FingerprintManager.getById(id, function (response) {
        res.send({ result: response });
    });
}

exports.add = function (req, res) {
    var data = req.body;
    FingerprintManager.add(data, function (response) {
        res.send({ result: response });
    });
};

exports.delete = function (req, res) {
    var id = req.params.id;
    FingerprintManager.delete(id, function (response) {
        res.send({ result: response });
    });
};

exports.update = function (req, res) {
    var data = req.body;
    FingerprintManager.update(data, function (response) {
        res.send({ result: response });
    });
};