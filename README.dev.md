# Development Setup

This project has separate configurations for development and production.

## Development Mode

To run the application in development mode with hot reloading:

```bash
# Using Docker Compose (recommended)
docker-compose -f docker-compose.dev.yml up

# Or run services separately:
# Frontend
cd frontend && yarn install && yarn start

# Backend (in another terminal)
cd backend && pip install -r requirements.txt && python server.py
```

## Production Mode

The main `Dockerfile` is optimized for production deployment:

```bash
docker build -t myapp .
docker run -p 80:80 myapp
```

## Key Differences

- **Development**: Source code is mounted as volumes, enabling hot reloading
- **Production**: Only built assets are included, served by Nginx for optimal performance