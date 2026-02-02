# roryshore.com

React + Vite site with a persistent header and SPA routing.

## Local dev
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Docker
```bash
docker build -t roryshore-com .
docker run -p 8080:80 roryshore-com
```

Then open http://localhost:8080
