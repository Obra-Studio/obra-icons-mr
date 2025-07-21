#!/bin/bash

# Script to create a new blog post for the shadcn-ui-kit blog
# Usage: ./create-blog-post.sh [title] [author]
# If no arguments provided, script will prompt interactively

set -e

# Function to prompt for input with default value
prompt_with_default() {
    local prompt="$1"
    local default="$2"
    local var_name="$3"

    if [ -n "$default" ]; then
        read -p "$prompt [$default]: " input
        if [ -z "$input" ]; then
            eval "$var_name=\"$default\""
        else
            eval "$var_name=\"$input\""
        fi
    else
        read -p "$prompt: " input
        eval "$var_name=\"$input\""
    fi
}

# Variables
if [ -z "$1" ]; then
    # Interactive mode
    echo "🚀 Creating a new blog post..."
    echo ""

    prompt_with_default "Enter the blog post title" "" "TITLE"

    # Check if title is still empty
    if [ -z "$TITLE" ]; then
        echo "❌ Error: Title cannot be empty"
        exit 1
    fi

    prompt_with_default "Enter the author name" "Johan Ronsse" "AUTHOR"
else
    # Command line arguments mode
    TITLE="$1"
    AUTHOR="${2:-Johan Ronsse}"  # Default author if not provided
fi
CURRENT_DATE=$(date +%Y-%m-%d)
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\+\|-\+$//g')
BLOG_DIR="src/routes/blog/(posts)"
POST_DIR="$BLOG_DIR/$SLUG"
POST_FILE="$POST_DIR/+page.md"

# Check if we're in the docs directory
if [ ! -d "$BLOG_DIR" ]; then
    echo "Error: This script must be run from the docs directory"
    echo "Current directory: $(pwd)"
    echo "Expected to find: $BLOG_DIR"
    exit 1
fi

# Check if post already exists
if [ -d "$POST_DIR" ]; then
    echo "Error: Blog post with slug '$SLUG' already exists at $POST_DIR"
    exit 1
fi

# Show preview and confirm
echo ""
echo "📝 Blog post preview:"
echo "   Title: $TITLE"
echo "   Author: $AUTHOR"
echo "   Date: $CURRENT_DATE"
echo "   Slug: $SLUG"
echo "   Path: $POST_DIR"
echo ""

# Confirmation prompt
read -p "Create this blog post? (y/N): " confirm
case $confirm in
    [Yy]* )
        echo "Creating blog post..."
        ;;
    * )
        echo "❌ Blog post creation cancelled."
        exit 0
        ;;
esac

# Create the post directory
mkdir -p "$POST_DIR"

# Create the blog post file
cat > "$POST_FILE" << EOF
<script context="module" lang="ts">
    import type { BlogFrontmatter } from '\$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: '$TITLE',
        date: '$CURRENT_DATE',
        author: '$AUTHOR'
    }
</script>

Write your blog post content here...

EOF

echo ""
echo "✅ Blog post created successfully!"
echo "📁 Directory: $POST_DIR"
echo "📄 File: $POST_FILE"
echo "🏷️  Title: $TITLE"
echo "📅 Date: $CURRENT_DATE"
echo "👤 Author: $AUTHOR"
echo "🔗 Slug: $SLUG"
echo ""
echo "🎉 You can now edit the file and add your content!"