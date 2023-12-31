module.exports = router = function(router){
    var history = require('../controllers/history.controller');

    router.get("/api/history/all/",  history.all);

    router.get("/api/history/get/:limit",  history.getLimit);

    router.get("/api/history/filter/:from/:to/:sort",  history.filter);
    
    router.get("/api/history/filter/:name/:from/:to/:sort",  history.filterWithName);

    router.post("/api/history/add", history.add);
    
    router.delete("/api/history/delete/:id", history.delete);
    
};