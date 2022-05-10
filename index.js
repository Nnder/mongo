const mongodb = require('mongodb');
const { CLIENT_RENEG_WINDOW } = require('tls');
const { MongoClient } = mongodb;

const url = 'mongodb+srv://qwerty:PoLekYXs2Ffd5jrydawwdDD3ad2Da@cluster0.nsaj1.mongodb.net/mongo?retryWrites=true&w=majority';
const client = new MongoClient(url);

const data = [
    {
        "age": 24,
        "name": "Fulton Huffman"
    },
    {
        "age": 26,
        "name": "Humphrey Christian"
    },
    {
        "age": 32,
        "name": "Juliet Ray"
    },
    {
        "age": 40,
        "name": "Suzanne Richard"
    },
    {
        "age": 31,
        "name": "Kathleen West"
    },
    {
        "age": 22,
        "name": "Mia Reed"
    },
    {
        "age": 31,
        "name": "Candy Reyes"
    }
]

const start = async () => {
    try {
        await client.connect();
        console.log('Connected');

        await client.db().createCollection('users');
        const users = client.db().collection('users');
        await users.insertMany(data)

        const user = await users.findOne({"name": "Fulton Huffman"})
        console.log(user);


    } catch(e){
        console.log(e);
    }
}

start();