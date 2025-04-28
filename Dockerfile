# Base image for frontend build
FROM node:20 AS frontend-build
WORKDIR /frontend
COPY FRONTEND/package*.json ./
RUN npm install
COPY FRONTEND/ .
RUN npm run build

# Final image to serve the frontend
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=frontend-build /frontend/dist ./
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]