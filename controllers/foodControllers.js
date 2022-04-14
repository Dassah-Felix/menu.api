const Food=require("../models/foodSchema")


//create a menu
const createFood = (req, res)=>{
    const newFood = new Food(
{
    name:req.body.name,
    type:req.body.type,
    ingredients:req.body.ingredients,
    recipe:req.body.recipe
}

    )
    newFood.save()
    res.status(200).json(newFood)
}
//get all menu
const getMenu =async(req, res)=>{
    const foods = await Food.find();
    res.status(200).json(foods) 
}


module.exports={createFood, getMenu}