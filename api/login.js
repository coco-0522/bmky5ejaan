const { MongoClient } = require('mongodb');

module.exports = async (req, res) => {
    const client = new MongoClient(process.env.MONGODB_URI);
    
    try {
        await client.connect();
        const db = client.db();
        await db.collection('logins').insertOne({
            username: req.body.username,
            timestamp: new Date()
        });
        res.status(200).json({ success: true });
    } finally {
        await client.close();
    }
};
const { MongoClient } = require('mongodb');

module.exports = async (req, res) => {
    const client = new MongoClient(process.env.MONGODB_URI);
    
    try {
        await client.connect();
        const db = client.db();
        await db.collection('logins').insertOne({
            username: req.body.username,
            timestamp: new Date()
        });
        res.status(200).json({ success: true });
    } finally {
        await client.close();
    }
};
