const express = require("express")
const router = express.Router()

const auth = require("../middleware/authMiddleware")

const {
    addCountry,
    getCountries,
    updateCountry,
    deleteCountry
} = require("../controller/countryController")

const multer = require("multer")

const storage = multer.diskStorage({
    destination:"uploads/",
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
})

const upload = multer({
    storage:storage
})

router.post(
    "/add",
    auth,
    upload.single("flag"),
    addCountry
)

router.get(
    "/all",
    auth,
    getCountries
)

router.put(
    "/update/:id",
    auth,
    updateCountry
)

router.delete(
    "/delete/:id",
    auth,
    deleteCountry
)

module.exports = router