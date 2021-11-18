const ClientController = require('../controllers/client.controller');


module.exports = function(app) {
    app.get('/api', ClientController.index);
    app.get('/api/clients/:id', ClientController.findOne);
    app.get('/api/clients', ClientController.getAllClients);
    app.get('/api/insurancetypes', ClientController.getAllInsuranceTypes);
    app.get('/api/processstages', ClientController.getAllInsuranceStages)
    app.post('/api/clients', ClientController.createClient);
    app.put('/api/clients/:id', ClientController.updateClient);
    app.delete("/api/clients/:id", ClientController.delete);
    
}