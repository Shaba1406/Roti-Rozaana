const FoodForm = require('../Models/FoodForm.js');
const path = require('path');

exports.indexFile = async (req,res)=>{
   
        try{
              res.sendFile(path.join(__dirname,'templates','index.html'));
            // res.status(201).json({ message: 'App running successfully' });
        }catch(err){
            res.status(500).json({ error: 'Internal Server Error' });
        }
      
}
exports.getFoodData = async (req, res) => {
    try {
        // Assuming you want to fetch all food forms
        const foodForms = await FoodForm.find();

        res.status(200).json(foodForms);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.addFoodForm = async (req, res) => { 
    try{
      const {foodName,isVeg ,dateTime,quantity,extraDetail} = req.body;
       // Save image to MongoDB (you can also save it to a storage service like AWS S3)
       const imageBuffer = req.file.buffer;
       const imageUrl = `data:image/png;base64,${imageBuffer.toString('base64')}`;
   
       // Save Menu data to MongoDB
       const newFoodform = new FoodForm({ foodName,isVeg ,dateTime,quantity,extraDetail,imageUrl});
       await newFoodform.save();
   
      res.status(201).json({ message: 'foodform added successfully' });
  }catch(err){
      res.status(500).json({ error: 'Internal Server Error' });
  }
  }