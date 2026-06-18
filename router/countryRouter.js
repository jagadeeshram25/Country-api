const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  addCountry,
  getCountries,
  updateCountry,
  deleteCountry,
  getCountry
} = require("../controller/countryController");

const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "country-flags",
        allowed_formats: ["jpg", "jpeg", "png", "webp"]
    }
});

const upload = multer({ storage });

router.post("/add", auth, upload.single("flag"), addCountry);
router.get("/all", auth, getCountries);
router.get("/single/:id", auth, getCountry);
router.put("/update/:id", auth, updateCountry);
router.delete("/delete/:id", auth, deleteCountry);

module.exports = router;