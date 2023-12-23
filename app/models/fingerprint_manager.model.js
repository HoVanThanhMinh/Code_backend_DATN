const { domainToUnicode } = require('url');
const db = require('../commons/connect');

const FingerprintManager = function () {}

FingerprintManager.all = function (data, result) {
    try {
        var queryString = `SELECT * FROM fingerprint_manager ORDER BY id ASC`;
        
        db.query(queryString, function (err, table) {
            if (err) {
                result(
                    {
                        "status": "error",
                        "data": null,
                        "message": err
                    }
                );
            }
            else {
                result(
                    {
                        "status": "success",
                        "data": table,
                        "message": null
                    }
                );
            }
        });
    } catch (error) {
        return null;
    }

}

FingerprintManager.getById = function (id, result) {
    try {
        var queryString = `SELECT * FROM fingerprint_manager WHERE id = ${id}`;
        
        db.query(queryString, function (err, table) {
            if (err) {
                result(
                    {
                        "status": "error",
                        "data": null,
                        "message": err
                    }
                );
            }
            else {
                result(
                    {
                        "status": "success",
                        "data": table,
                        "message": null
                    }
                );
            }
        });
    } catch (error) {
        return null;
    }

}

FingerprintManager.add = function (data, result) {
    try {
        db.query("INSERT INTO fingerprint_manager SET ?", data, function (err, table) {
            if (err) {
                result(
                    {
                        "status": "error",
                        "data": null,
                        "message": err
                    }
                );
            }
            else {
                result(
                    {
                        "status": "success",
                        "data": { id: table.insertId, ...data },
                        "message": null
                    }
                );
            }
        });
    } catch (error) {
        return null;
    }
}

FingerprintManager.update = function (data, result) {
    try {
        db.query("UPDATE fingerprint_manager SET ? WHERE id = ?", data, function (err, table) {
            if (err) {
                result(
                    {
                        "status": "error",
                        "data": null,
                        "message": err
                    }
                );
            }
            else {
                result(
                    {
                        "status": "success",
                        "data": { data },
                        "message": null
                    }
                );
            }
        });
    } catch (error) {
        return null;
    }
}

FingerprintManager.delete = function (id, result) {
    try {
        db.query(`DELETE FROM fingerprint_manager WHERE id = ?`, id, function (err, table) {
            if (err) {
                result(
                    {
                        "status": "error",
                        "data": null,
                        "message": err
                    }
                );
            }
            else {
                result(
                    {
                        "status": "success",
                        "data": table,
                        "message": null
                    }
                );
            }
        });
    } catch (error) {
        return null;
    }
}

module.exports = FingerprintManager;