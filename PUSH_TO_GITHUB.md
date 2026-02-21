# 🚀 Push to GitHub & Setup Email Notifications

## ⚠️ Important: I Cannot Push Directly

I don't have access to your GitHub account credentials, so **you need to push the code yourself**. But don't worry - I've made it super easy! Just follow the steps below.

---

## 📧 STEP 1: Setup Email Notifications (Optional but Recommended)

Your contact form will now send emails to **raghupatrunivenkatamanas@gmail.com** whenever someone submits a message!

### Setup Gmail App Password

1. **Go to Google Account Settings:**
   - Visit: https://myaccount.google.com/security
   - Or search "Google App Passwords" in Google

2. **Enable 2-Step Verification** (if not already enabled):
   - Click "2-Step Verification"
   - Follow setup instructions

3. **Create App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other (Custom name)"
   - Enter: "Portfolio Website"
   - Click "Generate"
   - **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

4. **Add to Backend Environment:**
   ```bash
   cd /app/backend
   
   # Edit .env file
   nano .env
   
   # Add these lines at the end:
   SENDER_EMAIL=raghupatrunivenkatamanas@gmail.com
   EMAIL_PASSWORD=your_16_char_app_password_here
   
   # Save: Ctrl+O, Enter, Ctrl+X
   ```

5. **Restart Backend:**
   ```bash
   sudo supervisorctl restart backend
   ```

### Test Email (Optional)
```bash
curl -X POST http://localhost:8001/api/contact/message \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Email",
    "message": "This is a test message to check if email works!"
  }'
```

Check your Gmail inbox - you should receive the notification!

---

## 📦 STEP 2: Push Your Portfolio to GitHub

### Option A: Using Git Commands (Recommended)

#### 1. Install Git (if not installed)
```bash
# Check if git is installed
git --version

# If not installed:
sudo apt-get update
sudo apt-get install git -y
```

#### 2. Configure Git
```bash
git config --global user.name "Manas470"
git config --global user.email "raghupatrunivenkatamanas@gmail.com"
```

#### 3. Create GitHub Repository
- Go to: https://github.com/new
- Repository name: `portfolio`
- Description: "My personal portfolio website"
- Make it **Public**
- **DO NOT** check "Add a README file"
- Click "Create repository"

#### 4. Push Frontend Code
```bash
cd /app/frontend

# Initialize git
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
.vscode/
.idea/
*.swp
*.swo
EOF

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio frontend with backend integration"

# Add remote (replace Manas470 with your username if different)
git remote add origin https://github.com/Manas470/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 5. Push Backend Code (Separate Repository - Optional)
```bash
cd /app/backend

# Initialize git
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
*.sqlite3
.pytest_cache/
.mypy_cache/
EOF

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio backend API"

# Create backend repository on GitHub first:
# Go to: https://github.com/new
# Name: portfolio-backend

# Add remote
git remote add origin https://github.com/Manas470/portfolio-backend.git

# Push
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Desktop (Easier for Beginners)

1. **Download GitHub Desktop:**
   - Visit: https://desktop.github.com/
   - Install and sign in with your GitHub account

2. **Add Repository:**
   - Click "File" → "Add Local Repository"
   - Choose `/app/frontend` folder
   - Click "Create repository"

3. **Publish to GitHub:**
   - Click "Publish repository"
   - Name: `portfolio`
   - Make sure "Keep this code private" is **unchecked**
   - Click "Publish repository"

4. **Repeat for Backend** (optional):
   - Add `/app/backend` folder
   - Publish as `portfolio-backend`

---

## 🌐 STEP 3: Create GitHub Profile README

1. **Create Profile Repository:**
   - Go to: https://github.com/new
   - Repository name: `Manas470` (MUST match your username exactly)
   - Make it **Public**
   - Check "Add a README file"
   - Click "Create repository"

2. **Update README:**
   - Go to: https://github.com/Manas470/Manas470
   - Click on `README.md`
   - Click pencil icon (✏️) to edit
   - Delete all existing content
   - Open `/app/github-profile-README.md` on your computer
   - Copy ALL content
   - Paste into GitHub editor
   - Click "Commit changes"

3. **Verify:**
   - Visit: https://github.com/Manas470
   - Your awesome profile should be live! 🎉

---

## 🔐 Authentication Options

### Using Personal Access Token (Recommended)

If GitHub asks for password when pushing:

1. **Create Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Note: "Portfolio deployment"
   - Expiration: 90 days (or No expiration)
   - Select scopes: Check ✅ **repo** (all repo permissions)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Use Token as Password:**
   ```bash
   # When git asks for password, paste the token instead
   git push -u origin main
   Username: Manas470
   Password: [paste_your_token_here]
   ```

3. **Save Credentials (Optional):**
   ```bash
   git config --global credential.helper store
   # Next time you enter credentials, they'll be saved
   ```

### Using SSH (Alternative)

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "raghupatrunivenkatamanas@gmail.com"
# Press Enter for all prompts

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub:
# 1. Go to: https://github.com/settings/keys
# 2. Click "New SSH key"
# 3. Paste the key
# 4. Click "Add SSH key"

# Use SSH URL instead:
git remote set-url origin git@github.com:Manas470/portfolio.git
```

---

## ✅ Verification Checklist

After pushing, verify:

### Frontend Repository
- [ ] Go to: https://github.com/Manas470/portfolio
- [ ] All files are there
- [ ] `.env` file is NOT visible (should be gitignored)
- [ ] `node_modules` folder is NOT visible

### Backend Repository (if you created one)
- [ ] Go to: https://github.com/Manas470/portfolio-backend
- [ ] All Python files are there
- [ ] `.env` file is NOT visible
- [ ] `__pycache__` folders are NOT visible

### GitHub Profile
- [ ] Go to: https://github.com/Manas470
- [ ] Beautiful README is displayed
- [ ] Visitor counter shows
- [ ] All badges work

---

## 🚀 STEP 4: Deploy Your Website

Now that code is on GitHub, deploy it:

### Quick Deploy to GitHub Pages

```bash
cd /app/frontend

# Add homepage to package.json
# Open package.json and add after "name":
# "homepage": "https://Manas470.github.io/portfolio",

# Install gh-pages
yarn add --dev gh-pages

# Add scripts to package.json
# Add to "scripts" section:
# "predeploy": "yarn build",
# "deploy": "gh-pages -d build"

# Deploy
yarn deploy
```

Then:
1. Go to: https://github.com/Manas470/portfolio/settings/pages
2. Source: Select `gh-pages` branch
3. Click Save
4. Wait 2-3 minutes
5. Visit: https://Manas470.github.io/portfolio

**Note:** GitHub Pages deployment won't have backend features (email, analytics). For full functionality, deploy backend to Railway/Render (see `/app/DEPLOYMENT_GUIDE.md`).

---

## 📧 Email Configuration for Production

When you deploy backend to Railway/Render, add these environment variables:

```
SENDER_EMAIL=raghupatrunivenkatamanas@gmail.com
EMAIL_PASSWORD=your_app_password_here
MONGO_URL=your_mongodb_atlas_url
DB_NAME=portfolio
```

---

## 🆘 Common Issues

### "Permission denied (publickey)"
- Use Personal Access Token instead of password
- Or setup SSH key (see above)

### "Repository not found"
- Make sure repository name matches exactly
- Check if repository is public
- Verify remote URL: `git remote -v`

### "Failed to push some refs"
```bash
# Pull first, then push
git pull origin main --allow-unrelated-histories
git push origin main
```

### Email not sending
- Check if `EMAIL_PASSWORD` is set correctly
- Verify Gmail App Password (not regular password)
- Check backend logs: `tail -f /var/log/supervisor/backend.err.log`
- Make sure 2-Step Verification is enabled on Google account

---

## 📝 Quick Reference Commands

```bash
# Check git status
git status

# See what changed
git diff

# Add new files
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View commit history
git log --oneline

# Check remote URL
git remote -v
```

---

## 🎉 You're Almost Done!

After completing these steps:
1. ✅ Email notifications working
2. ✅ Code on GitHub
3. ✅ Profile README live
4. ✅ Website deployed

**Next:** Share your portfolio on LinkedIn and with recruiters! 🚀

Need help? Check the error message and search it, or the GitHub documentation is very helpful!

---

## 📞 Contact Form Email Preview

When someone submits your contact form, you'll receive an email like this:

```
Subject: New Contact Form Submission: [Their Subject]

From: [Their Name]
Email: [Their Email]
Subject: [Their Subject]

Message:
[Their message content]

Submitted on: February 21, 2026 at 2:30 PM
Reply to: [their-email@example.com]
```

The email is beautifully formatted in HTML with your emerald color theme! 💚