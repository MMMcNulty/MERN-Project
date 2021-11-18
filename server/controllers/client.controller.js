const { response } = require('express')
const { Client } = require('../models/client.model')


module.exports.index = (request, response) => {
    response.json({
        message: "Hello it's working 🧨"
    })
}

//Create One
module.exports.createClient = (request, response) => {
    const {first_name, last_name, insurance_type, process_stage} = request.body;
    Client.create({
        first_name,
        last_name,
        insurance_type,
        process_stage,
    })
        .then(client =>response.json(client))
        .catch(error=>response.status(400).json(error))
}
//READ ALL
module.exports.getAllClients = (request, response) => {
    Client.find()
        .then(allClients => response.json(allClients))
        .catch(err => response.json({ message: "error", error: err }))
}
//Find Insurance Types
module.exports.getAllInsuranceTypes = (request, response) => {
    Client.distinct("insurance_type")
        .then(allInsuranceTypes => response.json(allInsuranceTypes))
        .catch(err => response.json({ message: "error", error: err }))
}

//Find Process Stages
module.exports.getAllInsuranceStages = (request, response) => {
    Client.distinct("process_stage")
        .then(allInsuranceStages => response.json(allInsuranceStages))
        .catch(err => response.json({ message: "error", error: err }))
}

//Find One
module.exports.findOne = (request, response) => {
    Client.findById(request.params.id)
        .then(Client => response.json(Client))
        .catch(err => response.json(err))
}

//UPDATE
module.exports.updateClient = (request, response) => {
    Client.findByIdAndUpdate(
        {_id: request.params.id},
        request.body,
        { new: true, runValidators: true}
        )
    .then(updatedClient => response.json(updatedClient))
    .catch(error=>response.status(400).json(error))
}

module.exports.delete = (request, response) => {
    Client.findByIdAndDelete(request.params.id)
        .then( result => response.json({result: result}))
        .catch( err => response.json({err:err}))
}