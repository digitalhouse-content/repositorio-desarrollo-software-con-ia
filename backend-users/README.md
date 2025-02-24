# User Management API Documentation

## Base URL
```
http://localhost:8000
```

## Authentication
The API uses JWT (JSON Web Token) authentication. 
- Tokens are obtained from the `/token` endpoint
- All protected endpoints require the header: `Authorization: Bearer <token>`
- Tokens expire after 30 minutes

## Endpoints

### 1. Authentication

#### Login
```
POST /token
Content-Type: application/x-www-form-urlencoded

Parameters:
- username: string (email)
- password: string

Response: {
    "access_token": string,
    "token_type": "bearer"
}
```

### 2. Users

#### Create User
```
POST /api/v1/users/
Content-Type: application/json

Request Body: {
    "email": string,
    "password": string,
    "full_name": string
}

Response: {
    "id": integer,
    "email": string,
    "full_name": string,
    "is_active": boolean,
    "created_at": datetime,
    "updated_at": datetime
}
```

#### List Users
```
GET /api/v1/users/
Authorization: Bearer <token>

Response: [
    {
        "id": integer,
        "email": string,
        "full_name": string,
        "is_active": boolean,
        "created_at": datetime,
        "updated_at": datetime
    }
]
```

#### Get User
```
GET /api/v1/users/{user_id}
Authorization: Bearer <token>

Response: {
    "id": integer,
    "email": string,
    "full_name": string,
    "is_active": boolean,
    "created_at": datetime,
    "updated_at": datetime
}
```

#### Update User
```
PUT /api/v1/users/{user_id}
Authorization: Bearer <token>
Content-Type: application/json

Request Body: {
    "email": string (optional),
    "full_name": string (optional),
    "password": string (optional)
}

Response: {
    "id": integer,
    "email": string,
    "full_name": string,
    "is_active": boolean,
    "created_at": datetime,
    "updated_at": datetime
}
```

#### Delete User
```
DELETE /api/v1/users/{user_id}
Authorization: Bearer <token>

Response: HTTP 204 No Content
```

## Error Responses
```json
{
    "detail": string
}
```

Common HTTP status codes:
- 200: Success
- 201: Created
- 204: No Content
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 422: Validation Error

## Data Types
- User ID: integer
- Email: string (valid email format)
- Password: string (sent in plain text, stored hashed)
- Dates: ISO 8601 format
- Boolean: true/false

## Additional Notes
- Email addresses must be unique
- All timestamps are in UTC
- The API supports JSON format only for request/response bodies
- CORS is enabled for all origins
