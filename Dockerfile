# Base image for frontend
FROM node:20 AS frontend-build
WORKDIR /frontend
COPY FRONTEND/package*.json ./
RUN npm install
COPY FRONTEND/ .
RUN npm run build

# Base image for backend
FROM node:20-alpine AS backend-build
WORKDIR /backend
COPY BACKEND/package*.json ./
RUN npm install
COPY BACKEND/ .

# Uncomment the following line if the backend requires a build step
# RUN npm run build

# Final image
FROM node:20-alpine
WORKDIR /app

# Copy built frontend
COPY --from=frontend-build /frontend/dist ./frontend

# Copy backend files (or built files if a build step is required)
COPY --from=backend-build /backend ./backend

# Expose ports
EXPOSE 3000 5173

# Start backend
CMD ["node", "./backend/index.js"]