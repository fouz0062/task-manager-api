// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(id);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect");
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne({ name: "Fouziya" }, (err, res) => {
    //   if (err) {
    //     return console.log("unable to connect");
    //   }
    //   console.log(res);
    // });
    // db.collection("tasks").insertMany(
    //   [
    //     { description: "cook", completed: true },
    //     { description: "clean", completed: true },
    //     { description: "sweep", completed: true },
    //   ],
    //   (err, res) => {
    //     if (err) {
    //       return console.log("unable to connect");
    //     }
    //     console.log(res);
    //   }
    // );
  }
);
