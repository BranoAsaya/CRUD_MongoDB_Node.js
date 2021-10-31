const mongoDB = require("mongodb");
const MongoClient = mongoDB.MongoClient;
const ObjectId = mongoDB.ObjectId;
const url = "mongodb://localhost:27017/";
let id ;

MongoClient.connect(url,(err,dBase)=>{
  if (err) throw err;
  console.log("connected");
  postID ={ _id:  ObjectId("617a919159b6b0eead3a4bfa") }
  authorID ={ _id:  ObjectId("617a919159b6b0eead3a4bfc") }
  data = dBase.db("blog");
  update = { $push: { posts:postID} };
  addIdToPosts(authorID,data,"authors",update)

})

function addIdToPosts(key,db,coll,update) {
    db.collection(coll).updateOne(key,update,(err,res)=>{
        if (err) throw err;
        console.log("1 document updated");
        console.log(res);
    })
}
