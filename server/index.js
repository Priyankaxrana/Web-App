const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User= require('./dataSchema')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/reactData', { useNewUrlParser: true })

app.post('/insert', async(req, res) => {
    // const ThumbnailImage = req.body.thumbnailImage
    const ThumbnailTitle = req.body.thumbnailTitle
    const ThumbnailAddress = req.body.thumbnailAddress
    const ThumbnailDescription = req.body.thumbnailDescription
    const ThumbnailPrice = req.body.thumbnailPrice

    const formData = new User({
        // images: ThumbnailImage,
        title: ThumbnailTitle,
        address: ThumbnailAddress,
        description: ThumbnailDescription,
        price: ThumbnailPrice
    })

    try {
        await formData.save();
        res.send("inserted data..")
    } catch(err) {
        console.log(err)
    }
});