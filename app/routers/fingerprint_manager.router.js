module.exports = router = function(router){
    var fingerprintManager = require('../controllers/fingerprint_manager.controller');

    router.get("/api/fingerprint-manager/all/",  fingerprintManager.all);

    router.get("/api/fingerprint-manager/get-by-id/:id",  fingerprintManager.getById);
    
    router.post("/api/fingerprint-manager/add", fingerprintManager.add);
    
    router.delete("/api/fingerprint-manager/delete/:id", fingerprintManager.delete);

    router.put("/api/fingerprint-manager/update", fingerprintManager.update);
    
};