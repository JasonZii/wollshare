#!/bin/bash

# Define the project name
PROJECT_NAME="wollshare"

# Define the directory structure
DIRS=(
    "$PROJECT_NAME/backend"
    "$PROJECT_NAME/frontend"
    "$PROJECT_NAME/shared"
    "$PROJECT_NAME/infra"
    "$PROJECT_NAME/docs"
    "$PROJECT_NAME/tests"
)

# Create directories
echo "Creating project directory structure..."
for DIR in "${DIRS[@]}"; do
    mkdir -p "$DIR"
    echo "Created directory: $DIR"
done

# Create README.md file
README_PATH="$PROJECT_NAME/README.md"
if [ ! -f "$README_PATH" ]; then
    echo "# $PROJECT_NAME" > "$README_PATH"
    echo "Project description document" >> "$README_PATH"
    echo "Created file: $README_PATH"
else
    echo "File already exists: $README_PATH"
fi

echo "Project structure creation completed!"
