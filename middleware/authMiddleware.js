const jwt = require("jsonwebtoken")

const auth = async(req,res,next)=>{

    try{

        const authHeader = req.header("Authorization")

        if(!authHeader){
            return res.status(400).json({
                message:"login first"
            })
        }

        const token = authHeader.split(" ")[1]

        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        req.user = decode

        next()

    }catch(err){

        console.log(err)

        return res.status(401).json({
            message:"Invalid Token"
        })
    }
}

module.exports = auth