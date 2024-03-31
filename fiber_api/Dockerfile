# Use official Golang image as base
FROM golang:1.22-alpine

# Set working directory
WORKDIR /app/backend

# Install required packages
RUN apk update && apk add git && apk add make

COPY go.mod go.sum .
RUN go mod download


# Copy backend files
COPY . .

# Expose port
EXPOSE 8000

# Build and run the backend server
CMD ["go", "run", "./src/main.go"]

