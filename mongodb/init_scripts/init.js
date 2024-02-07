// Define initialization script

// Create a new database
db = db.getSiblingDB('dialoguedroid');

// Create a new user
db.createUser({
    user: "backend",
    pwd: "password",
    roles: ["readWrite"]
});