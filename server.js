const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User= require('./server/dataSchema')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/reactdata', { useNewUrlParser: true });

app.post('/insert', async(req, res) => {
    // const ThumbnailImage = req.body.thumbnailImage
    const ThumbnailTitle = req.body.thumbnailTitle
    const ThumbnailAddress = req.body.thumbnailAddress
    const ThumbnailDescription = req.body.thumbnailDescription
    const ThumbnailPrice = req.body.thumbnailPrice

    const formData = new User({
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

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});