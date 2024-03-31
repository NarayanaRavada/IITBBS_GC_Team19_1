# Bus API

## Authentication Routes

### Register User

- **URL:** `/auth/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  - `fullname` (string, required): The username of the new user.
  - `email` (string, required): The username of the new user.
  - `password` (string, required): The password of the new user.
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "message": "User registered successfully" }`
- **Error Responses:**
  - **Code:** 400 Bad Request
  - **Content:** `{ "error": "email is already registered" }`

### Login User

- **URL:** `/auth/login`
- **Method:** `POST`
- **Description:** Logs in a user and returns a JWT token (Access and Refresh).
- **Request Body:**
  - `username` (string, required): The username of the user.
  - `password` (string, required): The password of the user.
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "token": "<JWT token>", "user": "<user Object>" }`
- **Error Responses:**
  - **Code:** 401 Unauthorized
  - **Content:** `{ "error": "Invalid username or password" }`

## Bus Routes

### Add Bus

- **URL:** `/bus/add`
- **Method:** `POST`
- **Description:** Adds a new bus.
- **Request Body:**
  - `number` (string, required): The number of the bus.
  - `capacity` (integer, required): The seating capacity of the bus.
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "message": "Bus added successfully" }`

### Update Bus

- **URL:** `/bus?:id`
- **Method:** `PUT`
- **Description:** Updates an existing bus by ID.
- **Request Parameters:**
  - `ExternalID` (string, required): The ID of the bus to update.
- **Request Body:** (fields to update)
  - `number` (string, optional): The updated number of the bus.
  - `startTime` (string, optional): The updated seating capacity of the bus.
  - `endTime` (string, optional): The updated seating capacity of the bus.
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "message": "Bus updated successfully", "body": <updated Bus Object> }`

### Get All Buses

- **URL:** `/bus/getAll`
- **Method:** `GET`
- **Description:** Retrieves a list of all buses.
- **Success Response:**
  - **Code:** 200
  - **Content:** `[ { "id": 1, "number", "startTime": ... }, { "id": 2, "number": "XYZ456", "startTime": ... }, ... ]`

## Email Routes

### Send Email

- **URL:** `/mail/send`
- **Method:** `POST`
- **Description:** Sends an email to mail List.
- **Request Body:**
  - `message` (string, required): The body content of the email.
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ "message": "Email sent successfully" }`

### Get All Emails

- **URL:** `/mail/getAll`
- **Method:** `GET`
- **Description:** Retrieves a list of all sent emails.
- **Success Response:**
  - **Code:** 200
  - **Content:** `[ { "dateTime": "2024-03-31 21:27:21", "message": "This is a test email." }, ... ]`

## Usage

- Use a tool like Postman to send requests to the API endpoints.
- Ensure you have valid JWT token for authenticated routes.

