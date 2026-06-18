const Country = require("../models/country")

exports.addCountry = async(req,res)=>{
    try{

        const country = await Country.create({
            countryName:req.body.countryName,
            capital:req.body.capital,
            population:req.body.population,
            currency:req.body.currency,
            flag:req.file ? req.file.filename : ""
        })

        res.status(201).json({
            message:"Country Added",
            country
        })

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

exports.getCountries = async(req,res)=>{
    try{

        const countries = await Country.find()

        res.status(200).json({
            countries
        })

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

exports.updateCountry = async(req,res)=>{
    try{

        const country = await Country.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                runValidators:true
            }
        )

        res.status(200).json({
            message:"Country Updated",
            country
        })

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

exports.deleteCountry = async(req,res)=>{
    try{

        await Country.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message:"Country Deleted"
        })

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}