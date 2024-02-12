# DialogueDroid

  
  

## Table of Contents

  

- [Project Description](#project-description)

- [Prerequisites](#prerequisites)

- [Setup](#setup)

- [Environment Variables](#environment-variables)

- [Docker](#docker)

  

## Project Description

  

This full-stack MERN (MongoDB, Express.js, React, Node.js) chat system application integrates the OpenAI chat completion API to enhance user interactions. The app allows users to read, create, update, and delete chats seamlessly.

  

### Features

  

-  **Real-time Chat Interface**: Users can engage in real-time conversations within the chat interface.

-  **OpenAI Chat Completion Integration**: The app leverages OpenAI's chat completion API to provide intelligent responses and enhance the chat experience.

-  **CRUD Operations**: Users can perform CRUD (Create, Read, Update, Delete) operations on chats.

-  **Responsive Design**: The application is responsive and works seamlessly across various devices and screen sizes.

  

## Prerequisites

  

- Node.js

- Docker

- MongoDB Atlas account

- OpenAI api key

  

## Setup

  

### MongoDB

  

Before running the application, you'll need to set up a MongoDB database to store your data. You have two options for MongoDB setup:

  

#### Option 1: MongoDB Atlas (Recommended)

  

MongoDB Atlas provides a convenient and scalable way to host MongoDB databases in the cloud. Sign up for a MongoDB Atlas account and create a free cluster. Once created, obtain a Node.js connection string and update the `.env` file in the backend directory.

  


#### Option 2: Local MongoDB Instance (Not Recommended)

If you prefer to use a local MongoDB instance, note that it must be run as a replica set for the application to function correctly with [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-typescript-mongodb). However, configuring MongoDB as a [replica set](https://www.mongodb.com/docs/manual/tutorial/deploy-replica-set/) locally might add complexity to the setup process and is not recommended for development purposes.

If you still choose to proceed, ensure that MongoDB is run as a replica set and update the `.env` file in the backend directory with the connection string. Here's an example connection string format:

```plaintext
MONGO_DB_URL=mongodb://localhost:27017/database_name?replicaSet=rs0
```



## Environment Variables

  

Create a `.env` file in the `backend` directory and add the following variables:

  

- `OPENAI_API_KEY`: Go get an API key [here](https://platform.openai.com/api-keys).

- `EXPRESS_PORT`: Set this variable to `5000`. Keep in mind that if you wish to use a different port, you'll have to update the value in: `/compose.yaml` and `/frontend/src/clients/api-client.ts`.

- `MONGO_DB_URL`

```plaintext
# Example .env file

OPENAI_API_KEY=<Your OpenAI key>
EXPRESS_PORT=5000
MONGO_DB_URL='mongodb+srv://username:password@your-cluster-url/database-name?retryWrites=true&w=majority'
```

## Docker
  

To run the project using Docker, execute the following command in the root directory:

```bash
docker compose  up
```


## Installing dependencies

If you opt to run this project without docker. Then run the following commands to install the dependencies and generate the prisma client.

  
```bash
cd  ./backend

npm  i && npm  run  db:generate

cd  ../frontend

npm  i
```