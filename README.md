# fridgiGO

> This is the backend of fridgiGO. This backend was developed in the programming language JavaScript and framework express.js.

## Below is the list of developed API endpoints

### **_Pings_**

| Route         | HTTP Request |  Body   | Description                 |
| :------------ | :----------: | :-----: | :-------------------------- |
| `/pings/ping` |    `GET`     | `empty` | Simple ping - pong function |

### **_Users_**

| Route                            | HTTP Request |                      Body                      | Description                        |
| :------------------------------- | :----------: | :--------------------------------------------: | :--------------------------------- |
| `/v1/api/users/authenticate`     |    `POST`    |          `{email:foo, password: bar}`          | Authenticate user (login function) |
| `/v1/api/users/register`         |    `POST`    | `{fullname, email, password, password_repeat}` | Register user (signup function)    |
| `/v1/api/users/confirm-register` |    `PUT`     |        `{email, confirmation_number }`         | Confirm user registration)         |

<hr>

> The first steps for the configuration:

- `creating .env file in the rout folder`
