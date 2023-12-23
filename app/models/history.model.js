const { domainToUnicode } = require('url');
const db = require('../commons/connect');

const History = function () {}

History.all = function (data, result) {
    try {
        var queryString = `SELECT * FROM history ORDER BY id DESC`;
        
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

History.getLimit = function (data, result) {
    try {
        var queryString = `SELECT * FROM history ORDER BY id DESC LIMIT ${data.limit}`;
        
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

History.filter = function (from, to, sort, result) {
    try {
        var queryString = `SELECT * FROM history WHERE datetime BETWEEN '${from}' AND '${to}' ORDER BY id ${sort}`;
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

History.filterWithName = function (name, from, to, sort, result) {
    try {
        var queryString = `SELECT * FROM history WHERE name LIKE '%${name}%' AND datetime BETWEEN '${from}' AND '${to}' ORDER BY id ${sort}`;
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

History.add = function (data, result) {
    try {
        db.query("INSERT INTO history SET ?", data, function (err, table) {
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

History.delete = function (id, result) {
    try {
        db.query(`DELETE FROM history WHERE id = ?`, id, function (err, table) {
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

module.exports = History;