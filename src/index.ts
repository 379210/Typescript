import express from 'express';

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TypeScript App</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          background: #0f172a;
          color: #e2e8f0;
        }
        h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: #60a5fa; }
        p { font-size: 1.1rem; color: #94a3b8; }
        .badge {
          background: #1e3a5f;
          border: 1px solid #3b82f6;
          padding: 0.3rem 0.8rem;
          border-radius: 1rem;
          font-size: 0.85rem;
          color: #60a5fa;
          margin-top: 1rem;
        }
      </style>
    </head>
    <body>
      <h1>TypeScript App</h1>
      <p>Your TypeScript application is running successfully.</p>
      <div class="badge">Node.js + Express + TypeScript</div>
    </body>
    </html>
  `);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
