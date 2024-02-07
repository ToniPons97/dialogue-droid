// Define initialization script

// Create a new database named "mydatabase"
db = db.getSiblingDB('dialoguedroid');

// Create a new collection named "mycollection"
db.createCollection('chat');

// Insert a document into the "mycollection" collection
db.chat.insertOne({
    userPrompt: "Who's Paul Charles Morphy?",
    response: "A genius.",
    createdAt: Date.now()
});
