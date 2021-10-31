const mongoDB = require("mongodb");
const MongoClient = mongoDB.MongoClient;
const ObjectId = require("mongodb").ObjectId;
const url = "mongodb://localhost:27017/";
let data;
let obj;
let coll;
let key;
let update;
let many;
let time;
let id;
let sort;

// MongoClient.connect(url, (err, dBase) => {
//   if (err) throw err;
//   console.log("go");
//   data = dBase.db("blog");
//   time = new Date();
//   many = [
//     { title: "HR", author: "Mike", upTime: time, editTime: time },
//     { title: "ko", author: "john", upTime: time, editTime: time },
//   ];
//   id = { _id: new ObjectId("617a8ac159b6b0eead3a4bf0") };
//   update = { $set: { title: "op", description: "op", author: "op" } };
//   sort = {name:1};
//     addManyDocuments(data, "posts", many)
//      deleteDocById(data,"posts",id)
//      updateDocById(data,"posts",id,update)
//         getDocs(data,"posts")

//   sortDocs(data,"authors",sort)
// });

// function sortDocs(DB,coll,filter) {
//     DB.collection(coll).find().sort(filter).toArray((err,res)=>{
//       if (err) throw err;
//       console.log(res);
        
//     })
// }
// function getDocs(DB,coll) {
//     DB
//     .collection(coll)
//     .find({})
//     .toArray((err, res) => {
//       if (err) throw err;
//       console.log(res);

//     });
// }

// function addManyDocuments(DB, coll, arr) {
//   DB.collection(coll).insertMany(arr, (err, res) => {
//     if (err) throw err;
//     console.log(res);
//   });
// }

// function deleteDocById(DB,coll,key) {
//     DB.collection(coll).deleteOne(key,(err,res)=>{
//         if (err) throw err;
//         console.log("delete");
//     })
// }

// function updateDocById(DB,coll,key,obj) {
//     DB.collection(coll).updateOne(key,obj,(err,res)=>{
//         if (err) throw err;
//         console.log("update");
//     })
// }

// MongoClient.connect(url, (err, dBase) => {
//   if (err) throw err;
//   console.log("working");
//   data = dBase.db("blog");
//   data
//     .collection("posts")
//     .find({})
//     .toArray((err, res) => {
//       if (err) throw err;
//       console.log(res);
//       dBase.close();
//     });
// });

// function createCollection(DB,coll){
//   MongoClient.connect(url, (err, dBase) => {
//     if (err) throw err;
//     console.log("working");
//     data = dBase.db(DB);
//     data.createCollection(coll, (err, res) => {
//       if (err) throw err;
//       console.log("Collection created!");
//       dBase.close();
//     });
//   });
// }
// createCollection("home","family")

// MongoClient.connect(url, (err, dBase) => {
//   if (err) throw err;
//   data = dBase.db("DBase");

//   createCollections(data, "coll");

// });

// function createCollections(DB, coll) {
//     DB.createCollection(coll, (err, res) => {
//     if (err) throw err;
//     console.log("created");
//   });
// }

// MongoClient.connect(url, (err, dBase) => {
//     if (err) throw err;
//     data = dBase.db("blog");
//     obj ={name:"kong",age:99,posts:[]}
//     coll="authors"
//     key = {name:"ben"}
//     update ={$set:{name:"ben",age:88,posts:[]}}
// addDocument(obj,data,coll)
// getDocument(data,coll)
// deleteDocument(key,data,coll)
// editDocument(key,data,coll,update)

//     data.listCollections().toArray((err, collInfos)=> {
//         if (err) throw err;
//       console.log(collInfos);
//     });
// });

// //!!delete object from Array

// function deleteDocument(key,db,coll) {
//     db.collection(coll).deleteOne(key,(err,obj)=>{
//     if (err) throw err;
//     console.log("1 document deleted");
//     })
// }

// //!!show the Array

// function getDocument(DB,coll) {
//     DB.collection(coll).find({}).toArray((err,res)=>{
//         if (err) throw err;
//         console.log(res);
//     })
// }

// //!!add obj to Array

// function addDocument(obj,db,coll) {
//     db.collection(coll).insertOne(obj,(err,res)=>{
//         if(err) throw err
//         console.log(res);
//     })
// }

// //!!update obj on Array

// function editDocument(key,db,coll,update) {
//     db.collection(coll).updateOne(key,update,(err,res)=>{
//         if (err) throw err;
//         console.log("1 document updated");
//     })
// }
