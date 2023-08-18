 # API_Endpoints

Endpoints included in this backend project :

The endpoints are divided into 3 categories: 

 1. [Auth Endpoints ('/auth')](#auth-endpoints)
 2. [User Endpoints ('/user')](#user-endpoints)
 3. [Posts Endpoints ('/posts')](#posts-endpoints)

A successful response from the server will look like this:
```json
{
  "status": "Ok",
  "message": "Message for the developer",
  "data": {
    "All the data from server will be here"
  }
}
```

An error response from the server will look like this:
```json
{
  "status": "error",
  "error": "Error Message for the developer",
}
```

The following properties of every endpoint will be descibed in this file:
* **Method:** *GET | POST | PATCH | DELETE*
* **Authorized:** *(Authentication is required or not for this route) True | False*
* **Verified:** *(Account with Email verified is required or not for this route) True | False*
* **Request Parameters:** *(Request-Body to be sent along with the request, for POST | PATCH | DELETE methods)*
* **Query Parameters:** *(Query Parameters available in GET requests to manipulate the response from the server)*
* **Success Status Code:** *(Status Code of a successful response) 2xx*
* **Response Data:** *(The format of data which is expected from the server with a successful response)*

---

## Auth Endpoints
> *Base URI: `/auth`*

#### `/login`

- **Method**: POST
- **Authorized**: False
- **Verified**: False
- **Request Parameters:**
```json
{
    "email": "test@gmail.com",
    "password": "1234abcd",
}
```
- **Success Status Code:** 200
- **Verified**: True
- **Response Data** 
```json
{
    "user": "abcd1234",
    "secret": "token",
}
```


#### `/register`

- **Method**: POST
- **Authorized**: False
- **Verified**: False
- **Request Parameters:**
```json
{
    "FirstName": "Jarvis",
    "LastName": "Bruh",
    "Password": "1234abcd",
    "Email": "test@gmail.com",
    "PicturePath": "photo.jpg",
    "location": "Delhi",
    "occupation": "Student",
}
```
- **Success Status Code:** 200
- **Response Data**
```json
{
    "FirstName": "Jarvis",
    "LastName": "Bruh",
    "Email": "test@gmail.com",
}
```

---

## User Endpoints
> *Base URI: `/user`*

#### `/<id>`

- **Method**: GET
- **Authorized**: True
- **Verified**: True
- **Success Status Code:** 200
- **Response Data**
```json
{
    "FirstName": "Jarvis",
    "LastName": "Bruh",
    "Email": "test@gmail.com",
    "PicturePath": "photo.jpg",
    "location": "Delhi",
    "occupation": "Scientist",
    "Friends": [
        {
            "id": "1737",
            "FirstName": "Chungus",
            "LastName": "Bruh",
            "Email": "test2@gmail.com",
            "PicturePath": "photo2.jpg",
            "location": "Delhi",
            "occupation": "Student",
            "Friends": "[]",
            "viewedProfile": "1288",
            "impressions": "1265"
        },
        {
            "id": "1757",
            "FirstName": "Promaster",
            "LastName": "sixtynine",
            "Email": "test3@gmail.com",
            "PicturePath": "photo3.jpg",
            "location": "Prayagraj",
            "occupation": "Student",
            "Friends": "[]",
            "viewedProfile": "1345",
            "impressions": "1873"
        },
    ],
    "viewedProfile": "1282",
    "impressions": "1092",
    "_id": "1724"
}
```

#### `/<id>/friends`

- **Method**: GET
- **Authorized**: True
- **Verified**: True
- **Success Status Code:** 200
- **Response Data**
```json
{
    "Friends": [
        {
            "id": "1737",
            "FirstName": "Chungus",
            "LastName": "Bruh",
            "Email": "test2@gmail.com",
            "PicturePath": "photo2.jpg",
            "location": "Delhi",
            "occupation": "Student",
            "Friends": "[]",
            "viewedProfile": "1288",
            "impressions": "1265"
        },
        {
            "id": "1757",
            "FirstName": "Promaster",
            "LastName": "sixtynine",
            "Email": "test3@gmail.com",
            "PicturePath": "photo3.jpg",
            "location": "Prayagraj",
            "occupation": "Student",
            "Friends": "[]",
            "viewedProfile": "1345",
            "impressions": "1873"
        },
        ],
}
```

#### `/<id>/<friendId>`

- **METHOD**: PATCH
- **Authorized**: True
- **Verified**: True
- **Request Parameters:**
```json
{
    "_id": "1737",
}
```
- **Success Status code:** 200
- **Response Data**
```json
{
    "Friends": [
            {
            "id": "1757",
            "FirstName": "Promaster",
            "LastName": "sixtynine",
            "Email": "test3@gmail.com",
            "PicturePath": "photo3.jpg",
            "location": "Prayagraj",
            "occupation": "Student",
            "Friends": "[]",
            "viewedProfile": "1345",
            "impressions": "1873"
        },
        ],
}
```

## Posts Endpoints
> *Base URI: `/posts`*

#### `/`

- **METHOD:** GET
- **Authorized:** True
- **Verified:** True
- **Success Status Code:** 200
- **Response Data**
```json
{
    "posts": 
    {
        {
            "userId": "1724",
            "FirstName": "Jarvis",
            "LastName": "Bruh",
            "PicturePath": "photo4.jpg",
            "location": "Delhi",
            "description": "This is a test description",
            "likes": 
            [
                {
                    "id": "1737",
                    "FirstName": "Chungus",
                    "LastName": "Bruh",
                    "PicturePath": "photo2.jpg",
                    "location": "Delhi",
                    "occupation": "Student",
                }
            ],
            "comments": 
            [
                {
                    "id": "1324",
                    "commentText": "This is a text comment",
                }
                {
                    "id": "1737",
                    "commentText": "I love your MOM",
                }
            ]
        },
        {
            "userId": "1757",
            "FirstName": "Promaster",
            "LastName": "sixtynine",
            "PicturePath": "photo5.jpg",
            "location": "Delhi",
            "description": "This is a test description",
            "likes": 
            [
                {
                    "id": "1724",
                    "FirstName": "Jarvis",
                    "LastName": "Bruh",
                    "PicturePath": "photo.jpg",
                    "location": "Delhi",
                    "occupation": "Student",
                }
            ],
            "comments": 
            [
                {
                    "id": "1324",
                    "commentText": "This is a text comment",
                }
                {
                    "id": "1737",
                    "commentText": "I love your MOM",
                }
            ]
        },

    }
}
```

#### `/`

- **METHOD:** POST
- **Authorized:** True
- **Verified:** True
- **Request Parameters:**
```json
{
    "userId": "1724",
    "description": "This is a test description",
    "picturePath": "photo7.jpg",
}
```
- **Success Status Code:** 201
- **Response Data**
```json
{
        "userId": "1724",
        "FirstName": "Jarvis",
        "LastName": "Bruh",
        "PicturePath": "photo7.jpg",
        "userPicturePath": "photo.jpg",
        "location": "Delhi",
        "description": "This is a test description",
        "likes": [],
}
```

#### `/`

- **METHOD:** GET
- **Authorized:** True
- **Verified:** True
- **Success Status Code:** 200
```json
{
    {
        "userId": "1724",
        "ContentPath": "video.mp4",
        "description": "This is a test description",
        "ExpiresIn": "2021-08-20T12:00:00.000Z",
    }
    {
        "userId": "1757",
        "ContentPath": "video2.mp4",
        "description": "userId: 1757 says hi to your MOM",
        "ExpiresIn": "2021-08-20T12:00:00.000Z",
    }

}
```

#### `/`

- **METHOD:** POST
- **Authorized:** True
- **Verified:** True
- **Request Parameters:**
```json
{
    "userId": "1724",
    "description": "This is a test description",
    "ContentPath": "video.mp4",
    "ExpiresIn": "2021-08-20T12:00:00.000Z",
}
```
- **Success Status Code:** 201
- **Response Data**
```json
{
    "userId": "1724",
    "description": "This is a test description",
    "ContentPath": "video.mp4",
    "ExpiresIn": "2021-08-20T12:00:00.000Z",
}
```

#### `/<userId>/posts`

- **METHOD:** GET
- **Authorized:** True
- **Verified:** True
- **Query Parameters:**
```json
{
    "userId": "1724",
}
```
- **Success Status Code:** 200
- **Response Data**
```json
{
        {
            "userId": "1724",
            "FirstName": "Jarvis",
            "LastName": "Bruh",
            "PicturePath": "photo4.jpg",
            "location": "Delhi",
            "description": "This is a test description",
            "likes": 
            [
                {
                    "id": "1737",
                    "FirstName": "Chungus",
                    "LastName": "Bruh",
                    "PicturePath": "photo2.jpg",
                    "location": "Delhi",
                    "occupation": "Student",
                }
            ],
            "comments": 
            [
                {
                    "id": "1324",
                    "commentText": "This is a test comment",
                }
                {
                    "id": "1737",
                    "commentText": "I love your MOM",
                }
            ]
        },
}
```

#### `/<id>/like`

- **METHOD:** PATCH
- **Authorized:** True
- **Verified:** True
- **Request Paramenters:**
```json
{
    "userId": "1724",
}
```
- **Success Status Code:** 200
- **Response Data**
```json
{
        {
            "userId": "1724",
            "FirstName": "Jarvis",
            "LastName": "Bruh",
            "PicturePath": "photo4.jpg",
            "location": "Delhi",
            "description": "This is a test description",
            "likes": 
            [
                {
                    "id": "1737",
                    "FirstName": "Chungus",
                    "LastName": "Bruh",
                    "PicturePath": "photo2.jpg",
                    "location": "Delhi",
                    "occupation": "Student",
                }
                {
                    "Id": "1757",
                    "FirstName": "Promaster",
                    "LastName": "sixtynine",
                    "PicturePath": "photo5.jpg",
                    "location": "Delhi",
                    "occupation": "Student"
                }
            ],
            "comments": 
            [
                {
                    "id": "1324",
                    "commentText": "This is a test comment",
                }
                {
                    "id": "1737",
                    "commentText": "I love your MOM",
                }
            ]
        },
}
```

#### `/<id>/comment`

- **METHOD:** PATCH
- **Authorized:** True
- **Verified:** True
- **Request Parameters**
```json
{
    "Id": "1724",
}
```
- **Success Status Code:** 201
- **Response Data**
```json
{
    "userId": "1757",
    "commentText": "This a test comment written on id: 1724's post",
}
```
















