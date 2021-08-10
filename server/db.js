const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017/sample";

const client = new MongoClient(uri, { useUnifiedTopology: true });

const  run = async() => {
	try {
		// connect db to the server
		await client.connect();
		
		// establish and verify connection
		await client.db("sample").command( {ping: 1	})
		console.log("Connected to server succesfully")
	}
	catch (err){console.log(err)}
	finally {
		await client.close()
	}
}

module.exports = run;
