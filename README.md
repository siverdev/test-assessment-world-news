## Setup Instructions

Follow these steps to get the app running locally.

### 1. Proxy Server
(express proxy server for hiding an API key)

1. Navigate to the server directory:
```bash
   cd server
```

2. Install dependencies:
```bash
    npm install
```

3. Create a .env file and configure api variables and port:
```bash
PORT=5000
API_BASE_URL=https://newsapi.org/v2/top-headlines
API_KEY=your_api_key_here
```
(project uses NewsAPI. Provide ```https://newsapi.org/v2/top-headlines``` as the base url)

4. Start the backend server
```bash
   npm run dev
```

### 2. Client

1. Navigate to the client directory
```bash
   cd client
```
2. Install dependencies:
```bash
npm install
```
3. Create a .env file and create a variable for the API base URL
```bash
VITE_API_BASE_URL=http://localhost:5000
```
(where 5000 is the PORT from backend .env)

4. Start the frontend server
```bash
   npm run dev
```

## Interface Preview
<img width="1525" height="966" alt="image" src="https://github.com/user-attachments/assets/09ca478f-8ce6-4a39-b0a7-83bc20b7b991" />
<img width="1528" height="800" alt="image" src="https://github.com/user-attachments/assets/685d6af7-8954-449b-a8f2-86ed233a30f3" />
<img width="744" height="933" alt="image" src="https://github.com/user-attachments/assets/2932f725-6024-458c-b4ba-781c1cc96f4b" />

## Technologies used
- **Frontend:**  
  React, Typescript, Vite, TailwindCSS, Tanstack React Query, Axios
- **Proxy server:**  
  Node.js, Express, TypeScript, axios

> Backend acts as a proxy server to securely store the API key.  
> The frontend uses React Query for data fetching with infinite scrolling pagination, so that new articles load automatically as you scroll.
