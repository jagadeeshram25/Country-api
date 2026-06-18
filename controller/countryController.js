const Country = require("../models/country");

// Add Country
exports.addCountry = async (req, res) => {
    try {

        const country = await Country.create({
            countryName: req.body.countryName,
            capital: req.body.capital,
            population: req.body.population,
            currency: req.body.currency,
            flag: req.file ? req.file.path : ""
        });

        res.status(201).json({
            message: "Country Added",
            country
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Get All Countries
exports.getCountries = async (req, res) => {
    try {

        const countries = await Country.find();

        res.status(200).json({
            countries
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Get Single Country
exports.getCountry = async (req, res) => {
    try {

        const country = await Country.findById(req.params.id);

        if (!country) {
            return res.status(404).json({
                message: "Country not found"
            });
        }

        res.status(200).json({
            country
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Update Country
exports.updateCountry = async (req, res) => {
    try {

        const country = await Country.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!country) {
            return res.status(404).json({
                message: "Country not found"
            });
        }

        res.status(200).json({
            message: "Country Updated",
            country
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Delete Country
exports.deleteCountry = async (req, res) => {
    try {

        const country = await Country.findByIdAndDelete(req.params.id);

        if (!country) {
            return res.status(404).json({
                message: "Country not found"
            });
        }

        res.status(200).json({
            message: "Country Deleted Successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};