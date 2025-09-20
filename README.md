# Project 2 - Part 1 (CRUD API with MongoDB and Swagger)

## Description

This is an API designed to perform **CRUD** (Create, Read, Update, and Delete) operations on a collection of items in a **MongoDB** database.

The database connection is managed using **Mongoose**. The project also includes comprehensive API documentation generated with **Swagger**, which is available for exploration at the `/api-docs` route.

A health check endpoint has also been implemented at the root (`/`) to verify the server's status and proper functioning.

---

## Features

### API Endpoints

| Endpoint      | HTTP Method | Description                                        |
| :------------ | :---------- | :------------------------------------------------- |
| `/`           | `GET`       | **Health check**: Verifies that the API is running. |
| `/items`      | `GET`       | Returns a list of **all** items from the database. |
| `/items/{id}` | `GET`       | Returns a **specific item** by its ID.             |
| `/items`      | `POST`      | Creates a **new item** in the database.            |
| `/items/{id}` | `PUT`       | Updates an **existing item** using its ID.         |
| `/items/{id}` | `DELETE`    | Deletes an **item** from the database by its ID.   |

---

## 🚀 Technologies

* **Node.js** and **Express** for the server environment and framework.
* **MongoDB** as the NoSQL database.
* **Mongoose** for data modeling and connecting to MongoDB.
* **Swagger UI** and **swagger-autogen** for API documentation.
* **Cors** for handling Cross-Origin Resource Sharing policies.
* **dotenv** for managing environment variables.

---

## ⚙️ Installation and Setup

Follow these steps to get the project up and running in your local environment:

1.  **Clone the repository** (if applicable) and navigate to the project folder.

2.  **Create a `.env` file** in the project's root directory and add your MongoDB connection string:
    ```env
    MONGODB_URL=mongodb://localhost:27017/projectdb2
    ```

3.  **Install the project dependencies** by running:
    ```sh
    npm install
    ```

4.  **Generate the Swagger documentation** with the following command:
    ```sh
    npm run swagger-autogen
    ```

5.  **Start the server** in development mode:
    ```sh
    npm run dev
    ```
    That's it! The API will be running at `http://localhost:3000`.

---

## 🧪 Testing

You can test the API in the following ways:

* **Health Check**:
    Open your browser or an API client and make a `GET` request to `http://localhost:3000/`. You should receive the message: `"🚀 Project 2 API is running!"`.

* **Swagger UI**:
    Access the interactive documentation at `http://localhost:3000/api-docs` to test all endpoints visually.

* **CRUD Endpoints**:
    Use an API client like Postman or Insomnia to make the following requests or you can also use the .rest file that I created(project2-api.rest):
    * `GET http://localhost:3000/items`
    * `GET http://localhost:3000/items/{id}`
    * `POST http://localhost:3000/items`
    * `PUT http://localhost:3000/items/{id}`
    * `DELETE http://localhost:3000/items/{id}`

> **Important Note**
> When creating or updating an item, make sure that the data types in your request `body` are correct. For example, `price` should be a `Number` and `inStock` should be a `Boolean`.
