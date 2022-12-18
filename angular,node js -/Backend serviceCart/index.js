const express=require('express');

const index=express();

const port=7000;

const database=require('./MongoDb data/schameData.js');

require('./MongoDb data/connect.js');

index.use(express.json());

//app.use(function (req,res,next) {
//     res.header('Access-Control-Allow-Origin','*')
//     res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-type,Accept')
//     next();
// })

index.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


index.get('/getCargos',async function (req,res) {

    try {
        let db = await database;
        let data = await db.find({});

        res.send(data)
    }catch (e) {
        console.log(e)
    }


})


index.post('/sendCargos',async function (req,res) {

    try{
        const db=await database;
        const information=await db({
            image:req.body.image,
            name:req.body.name,
            price:req.body.price,
            weight:req.body.weight,
            information:req.body.information,
            startedPrice:req.body.startedPrice,
            startedWeight:req.body.startedWeight,
        });

        information.save();
        res.send('Send it');

    }catch (e) {

        console.log(e)

    }

})


index.post('/update/:_id',async function (req,res) {

  let image=req.body.image;
      let name=req.body.name;
       let  price=req.body.price;
        let weight=req.body.weight;
       let  information=req.body.information;
         let startedPrice=req.body.startedPrice;
         let startedWeight=req.body.startedWeight;



      let id=req.params;

    let data=await database;

    data.updateOne({_id:id}, {
        $set: {
            image:image,
            name:name,
            price: price,
            weight: weight,
             information:information,
            startedPrice:startedPrice,
            startedWeight:startedWeight,
        }
    },{new:true},(err,data)=>{

        if(data===null){
            res.send('Not found');
        }else{
            res.send(data);
        }
    })

})




index.get('/getCargosById/:_id',async function (req,res) {
    let data=await database;
    let user=await data.findOne({_id:req.params});
    res.send(user);
})


index.delete('/deleteCargos/:_id',async function (req,res) {
    let data=await database;
    let x=await data.deleteOne(req.params);
    res.send('Deleted')
})


index.listen(port,async function (req,res) {
    console.log(`Listening on ${port}`)
})