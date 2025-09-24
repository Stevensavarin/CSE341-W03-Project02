# Project 2 - Part 1 (CRUD API with MongoDB, Users, and Swagger)

## Description

This is an API designed to perform **CRUD** (Create, Read, Update, and Delete) operations on collections of **items** and **users** in a **MongoDB** database.

The database connection is managed using **Mongoose**. The project includes comprehensive API documentation generated with **Swagger**, which is available at the `/api-docs` route.

A health check endpoint has also been implemented at the root (`/`) to verify the server's status and proper functioning.

---

## Features

### API Endpoints

#### Items

| Endpoint      | HTTP Method | Description                                        |
| :------------ | :---------- | :------------------------------------------------- |
| `/items`      | `GET`       | Returns a list of **all items** from the database. |
| `/items/{id}` | `GET`       | Returns a **specific item** by its ID.             |
| `/items`      | `POST`      | Creates a **new item** in the database.            |
| `/items/{id}` | `PUT`       | Updates an **existing item** using its ID.         |
| `/items/{id}` | `DELETE`    | Deletes an **item** from the database by its ID.   |

#### Users

| Endpoint      | HTTP Method | Description                                        |
| :------------ | :---------- | :------------------------------------------------- |
| `/users`      | `GET`       | Returns a list of **all users** from the database. |
| `/users/{id}` | `GET`       | Returns a **specific user** by its ID.             |
| `/users`      | `POST`      | Creates a **new user** with validation middleware. |
| `/users/{id}` | `PUT`       | Updates an **existing user** with validation middleware. |
| `/users/{id}` | `DELETE`    | Deletes a **user** from the database by its ID.    |

> All POST and PUT requests for both items and users are validated using middleware before being processed by the controllers.

---

## 🚀 Technologies

* **Node.js** and **Express** for the server environment and framework.
* **MongoDB** as the NoSQL database.
* **Mongoose** for data modeling and connecting to MongoDB.
* **Swagger UI** and **swagger-autogen** for API documentation.
* **Cors** for handling Cross-Origin Resource Sharing policies.
* **dotenv** for managing environment variables.
* **Validator middleware** for input validation on create and update operations.

---

## ⚙️ Installation and Setup

Follow these steps to get the project up and running in your local environment:

1.  **Clone the repository** (if applicable) and navigate to the project folder.

2.  **Create a `.env` file** in the project's root directory and add your MongoDB connection string:
    ```env
    MONGO_URI=mongodb://localhost:27017/projectdb2
    ```

3.  **Install the project dependencies** by running:
    ```sh
    npm install
    ```

4.  **Generate the Swagger documentation** with the following command:
    ```sh
    npm run swagger-autogen
    ```

5.  **Seed the database** with initial data for items and users:
    ```sh
    node seed.js      # seeds items
    node seedUsers.js # seeds users
    ```

6.  **Start the server** in development mode:
    ```sh
    npm run dev
    ```

The API will be running at `http://localhost:3000`.

---

## 🧪 Testing

You can test the API in the following ways:

* **Health Check**:
    Open your browser or an API client and make a `GET` request to `http://localhost:3000/`. You should receive the message: `"🚀 Project 2 API is running!"`.

* **Swagger UI**:
    Access the interactive documentation at `http://localhost:3000/api-docs` to test all endpoints visually.

* **CRUD Endpoints**:
    Use an API client like Postman or Insomnia, or your `.rest` file (`project2-api.rest`) to make the following requests:

    **Items:**
    * `GET http://localhost:3000/items`
    * `GET http://localhost:3000/items/{id}`
    * `POST http://localhost:3000/items`
    * `PUT http://localhost:3000/items/{id}`
    * `DELETE http://localhost:3000/items/{id}`

    **Users:**
    * `GET http://localhost:3000/users`
    * `GET http://localhost:3000/users/{id}`
    * `POST http://localhost:3000/users`
    * `PUT http://localhost:3000/users/{id}`
    * `DELETE http://localhost:3000/users/{id}`

> **Important Note**
> - All POST and PUT requests are validated via middleware. Ensure required fields are present and data types match the schema.
> - For `items`, `price` should be a `Number` and `inStock` should be a `Boolean`.  
> - For `users`, `name` and `email` are required, and `role` must be either `"admin"` or `"customer"`.

---

