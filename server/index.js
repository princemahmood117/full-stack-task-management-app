const express = require('express')
const cors = require('cors')
require('dotenv').config()
const port  = process.env.PORT || 5000;
const app = express()


const corsOption = {
    origin : ['http://localhost:5173','https://luminous-caramel-79aab2.netlify.app','https://firebase.google.com','https://console.firebase.google.com/u/0','https://console.firebase.google.com/u/0/project/urban-feast-8243a/overview', 'https://console.firebase.google.com/u/0/project/urban-feast-8243a/authentication/users'],
    credentials : true,
    optionSuccessStatus : 200,
}

app.use(cors(corsOption))
app.use(express.json())



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ddujh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
 
    const menuCollection = client.db('urbanFeast').collection('menu')
    const reviewCollection = client.db('urbanFeast').collection('review')
    const orderCollection = client.db('urbanFeast').collection('order')
    

    app.get('/menu', async(req,res) => {
        const result = await menuCollection.find().toArray()
        res.send(result)
    })

    app.get('/menu/:id', async(req,res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await menuCollection.findOne(query)
      res.send(result)
    })


    // reviews
    app.get('/review', async(req,res) => {
      const result = await reviewCollection.find().toArray()
      res.send(result)
  })


  // for order

  // save a single order data into database
  app.post('/order', async(req,res) => {
    const orderData = req.body; 
    
    const query = {
      email : orderData.email,
      foodId : orderData.jobId
     }
     const alreadyApplied = await orderCollection.findOne(query)
     if(alreadyApplied) {
      return res.status(400).send({message : 'Bid already been placed on this job'})
     }
    const result = await orderCollection.insertOne(orderData);
    res.send(result)
  })


    // get all order from db using user email
    app.get('/my-order/:email', async(req,res)=> {
      const email = req.params.email;
      const query = { 'email' : email };
      const result = await orderCollection.find(query).toArray();
      res.send(result);
    } )

     // delete a food from database using id
     app.delete('/order/:id',async(req,res)=> {
      const id = req.params.id;
      const query = { _id : new ObjectId(id)}   // delete query from database using id
      const result = await orderCollection.deleteOne(query);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  
  
  finally {
    
  }
}
run().catch(console.dir);



app.get('/', (req,res) => {
    res.send('solo-Sphere is running')
})


app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})