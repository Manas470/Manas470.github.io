#!/bin/bash

# 🚀 Automated GitHub Push Script
# This script helps you push your portfolio to GitHub

set -e  # Exit on error

echo "🎨 Portfolio GitHub Push Script"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed!"
    echo "Installing git..."
    sudo apt-get update && sudo apt-get install git -y
    print_success "Git installed successfully"
fi

# Configure Git
echo ""
print_info "Configuring Git..."
read -p "Enter your GitHub username [Manas470]: " github_username
github_username=${github_username:-Manas470}

read -p "Enter your email [raghupatrunivenkatamanas@gmail.com]: " github_email
github_email=${github_email:-raghupatrunivenkatamanas@gmail.com}

git config --global user.name "$github_username"
git config --global user.email "$github_email"
print_success "Git configured"

# Ask which repositories to push
echo ""
print_info "What do you want to push?"
echo "1) Frontend only"
echo "2) Backend only"
echo "3) Both frontend and backend"
echo "4) GitHub Profile README"
read -p "Enter your choice [1-4]: " choice

push_frontend=false
push_backend=false
push_profile=false

case $choice in
    1) push_frontend=true ;;
    2) push_backend=true ;;
    3) push_frontend=true; push_backend=true ;;
    4) push_profile=true ;;
    *) print_error "Invalid choice"; exit 1 ;;
esac

# Push Frontend
if [ "$push_frontend" = true ]; then
    echo ""
    print_info "Pushing Frontend..."
    
    cd /app/frontend
    
    # Check if git repo exists
    if [ ! -d ".git" ]; then
        print_info "Initializing git repository..."
        git init
        
        # Create .gitignore
        cat > .gitignore << 'EOF'
node_modules/
build/
.env
.DS_Store
npm-debug.log*
yarn-debug.log*
yarn-error.log*
EOF
        print_success ".gitignore created"
    fi
    
    # Ask for repository name
    read -p "Enter frontend repository name [portfolio]: " frontend_repo
    frontend_repo=${frontend_repo:-portfolio}
    
    # Add files
    git add .
    git commit -m "Portfolio frontend with backend integration" || true
    
    # Add remote if not exists
    if ! git remote | grep -q "origin"; then
        git remote add origin "https://github.com/$github_username/$frontend_repo.git"
    fi
    
    # Push
    print_info "Pushing to GitHub..."
    print_warning "You may need to enter your GitHub Personal Access Token as password"
    git branch -M main
    git push -u origin main
    
    print_success "Frontend pushed to: https://github.com/$github_username/$frontend_repo"
fi

# Push Backend
if [ "$push_backend" = true ]; then
    echo ""
    print_info "Pushing Backend..."
    
    cd /app/backend
    
    # Check if git repo exists
    if [ ! -d ".git" ]; then
        print_info "Initializing git repository..."
        git init
        
        # Create .gitignore
        cat > .gitignore << 'EOF'
__pycache__/
*.py[cod]
*$py.class
.env
venv/
.venv/
*.log
.DS_Store
EOF
        print_success ".gitignore created"
    fi
    
    # Ask for repository name
    read -p "Enter backend repository name [portfolio-backend]: " backend_repo
    backend_repo=${backend_repo:-portfolio-backend}
    
    # Add files
    git add .
    git commit -m "Portfolio backend API with email notifications" || true
    
    # Add remote if not exists
    if ! git remote | grep -q "origin"; then
        git remote add origin "https://github.com/$github_username/$backend_repo.git"
    fi
    
    # Push
    print_info "Pushing to GitHub..."
    print_warning "You may need to enter your GitHub Personal Access Token as password"
    git branch -M main
    git push -u origin main
    
    print_success "Backend pushed to: https://github.com/$github_username/$backend_repo"
fi

# Push Profile README
if [ "$push_profile" = true ]; then
    echo ""
    print_info "Setting up GitHub Profile README..."
    
    print_warning "You need to manually create the profile repository on GitHub:"
    echo ""
    echo "1. Go to: https://github.com/new"
    echo "2. Repository name: $github_username (MUST match your username)"
    echo "3. Make it Public"
    echo "4. Check 'Add a README file'"
    echo "5. Click 'Create repository'"
    echo ""
    read -p "Press Enter after you've created the repository..."
    
    # Clone the repository
    temp_dir="/tmp/github-profile-$github_username"
    rm -rf "$temp_dir"
    
    print_info "Cloning profile repository..."
    git clone "https://github.com/$github_username/$github_username.git" "$temp_dir"
    
    # Copy README
    cp /app/github-profile-README.md "$temp_dir/README.md"
    
    # Push
    cd "$temp_dir"
    git add README.md
    git commit -m "Add awesome portfolio README"
    git push origin main
    
    print_success "Profile README updated!"
    print_info "Visit: https://github.com/$github_username"
    
    # Cleanup
    rm -rf "$temp_dir"
fi

# Final message
echo ""
echo "================================"
print_success "All done! 🎉"
echo ""
print_info "Next steps:"
if [ "$push_frontend" = true ]; then
    echo "  • Deploy frontend: Follow /app/DEPLOYMENT_GUIDE.md"
    echo "  • Visit: https://github.com/$github_username/$frontend_repo"
fi
if [ "$push_backend" = true ]; then
    echo "  • Deploy backend: Use Railway or Render"
    echo "  • Visit: https://github.com/$github_username/$backend_repo"
fi
if [ "$push_profile" = true ]; then
    echo "  • Your profile is live at: https://github.com/$github_username"
fi
echo ""
print_info "Need help? Check /app/PUSH_TO_GITHUB.md for detailed instructions"
echo ""