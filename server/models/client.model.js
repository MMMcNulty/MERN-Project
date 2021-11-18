const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [
            true,
            "First name is Required ‼"
            ],
    },
    last_name: {
        type: String,
        required: [
            true,
            "Last name is Required ‼"
            ],
    },
    insurance_type: {
        type: String,
        required: [
            true,
            "Type is Required ‼"
            ],
        enum: ["Life Insurance", "Disability Insurance"]
    },
    process_stage: {
        type: String,
        // enum: ["Pre-underwriting", "Underwriting", "Approved"],
        default: 'Pre-underwriting'
    }
}, {timestamps: true});

module.exports.Client = mongoose.model("Client", ClientSchema);