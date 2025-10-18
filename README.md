HNG13 Stage 0 - Dynamic Profile Endpoint

Description
This project implements a simple RESTful API endpoint `/me` that returns my profile information along with a dynamic cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).

It validates the ability to:
- Build APIs using Express.js
- Consume external APIs
- Format JSON responses
- Handle dynamic data and timestamps

---

Endpoint
GET `/me`

Example Response
```json
{
  "status": "success",
  "user": {
    "email": "shehuumarbaje@gmail.com",
    "name": "Baje Shehu Umar",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T10:00:00.000Z",
  "fact": "Cats can rotate their ears 180 degrees."
}
How to Run Locally
Clone this repository

bash
Copy code
git clone https://github.com/BajeShehuUmar/hng13-stage0.git
Navigate into the folder

bash
Copy code
cd hng13-stage0
Install dependencies

bash
Copy code
npm install
Create a .env file and add:

ini
Copy code
PORT=5000
Start the server

bash
Copy code
node server.js
Visit the endpoint in your browser or Postman

bash
Copy code
http://localhost:5000/me
Environment Variables
Variable	Description	Default
PORT	Port number for the server	5000

Author
Name: Baje Shehu Umar
Email: shehuumarbaje@gmail.com
Stack: Node.js/Express

Deployment
This API can be deployed using Railway.app (recommended by HNG13).
Once deployed, your live endpoint will look like:

arduino
Copy code
https://your-app-name.up.railway.app/me
Submission Checklist
 /me endpoint returns valid JSON response

 Dynamic timestamp in ISO 8601 format

 Cat fact fetched from external API

 Code pushed to GitHub with README.md

 Deployed live on Railway (not Vercel or Render)

 Submitted via /stage-zero-backend Slack command