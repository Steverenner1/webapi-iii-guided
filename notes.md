# Middleware Notes

## Jargon
Separation of Concerns

Types (based on how we got it or who built it)

- built in (included with express) example: `express.json()`
- third party (must be installed from npm/yarn)
- custom (we code these)

Types (based on how it's being used)

- global (runs on every request)
- 


Order matters, it goes top to bottom and left to right


write a middleware function that logs the  HTTP method and the URL visited by the client
new messages
should log to the console something that looks like this: GET / or GET /api/hubs