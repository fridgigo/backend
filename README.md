# fridgiGO

> This is the backend of fridgiGO. This backend was developed in the programming language JavaScript and framework express.js.

## Below is the list of developed API endpoints

### **_Pings_**

| Route         | HTTP Request |  Body   | Description                 |
| :------------ | :----------: | :-----: | :-------------------------- |
| `/pings/ping` |    `GET`     | `empty` | Simple ping - pong function |

### **_Users_**

| Route                        | HTTP Request |                          Body                           | Description                        |
| :--------------------------- | :----------: | :-----------------------------------------------------: | :--------------------------------- |
| `/api/v2/users/authenticate` |    `POST`    |              `{email:foo, password: bar}`               | Authenticate user (login function) |
| `/api/v2/users/register`     |    `POST`    | `{fullname, email:foo, password: bar, password_repeat}` | Register user (signup function)    |

<hr>

> The first steps for the configuration:

- `creating .env file in the rout folder`
