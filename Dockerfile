# Use the official nginx image as base
FROM nginx:alpine

# Copy the built files from the 'dist' folder to nginx's html directory
COPY dist/ /usr/share/nginx/html

# Optional: expose port 80 (nginx default)
EXPOSE 80

# nginx will start automatically