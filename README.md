# roryshore.com

React + Vite site with a persistent header and SPA routing.

## Local dev
```bash
npm install
npm run dev

Production build
npm run build
npm run preview
Docker
docker build -t roryshore-com .
docker run -p 8080:80 roryshore-com
Then open http://localhost:8080

---

## 3) Docker deployment (Nginx serving the built site)

### `docker/nginx.conf`
This supports React Router (routes like `/projects` won’t 404).
```nginx
server {
  listen 80;
  server_name _;

  root /usr/share/nginx/html;
  index index.html;

  gzip on;
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
