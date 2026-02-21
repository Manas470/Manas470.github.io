# 🚀 Deployment Guide: Portfolio Website & GitHub Profile

This guide explains how to deploy your portfolio website and set up your GitHub profile.

## 📋 Table of Contents
1. [GitHub Profile README Setup](#github-profile-readme-setup)
2. [Portfolio Website Deployment](#portfolio-website-deployment)
3. [Environment Setup](#environment-setup)
4. [Visitor Counter Setup](#visitor-counter-setup)

---

## 🎯 GitHub Profile README Setup

### Step 1: Create Special Repository
1. Go to GitHub and create a new repository named exactly: `Manas470` (your username)
2. Make it **public**
3. Initialize with a README

### Step 2: Update README
1. Copy the content from `/app/github-profile-README.md`
2. Go to your `Manas470` repository on GitHub
3. Edit the `README.md` file
4. Paste the content and commit

### Result
- Your GitHub profile (https://github.com/Manas470) will now display this awesome README
- It includes a visitor counter badge that automatically tracks profile views

---

## 🌐 Portfolio Website Deployment

### Option 1: Deploy to GitHub Pages (Recommended)

#### Step 1: Create Repository for Portfolio
```bash
# On GitHub, create a new repository named: portfolio
# Or use: Manas470.github.io (for custom domain)
```

#### Step 2: Prepare Frontend for Deployment
```bash
cd /app/frontend

# Update package.json - add homepage
# Add this line to package.json:
"homepage": "https://Manas470.github.io/portfolio",

# Build the production version
yarn build
```

#### Step 3: Deploy to GitHub Pages
```bash
# Install gh-pages
yarn add --dev gh-pages

# Add deploy scripts to package.json
# Add these to "scripts" section:
"predeploy": "yarn build",
"deploy": "gh-pages -d build"

# Deploy
yarn deploy
```

#### Step 4: Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Source: Deploy from branch `gh-pages`
4. Click Save

Your website will be live at: `https://Manas470.github.io/portfolio`

### Option 2: Deploy Backend + Frontend (Full-Stack)

For a full-stack deployment with backend functionality:

#### Backend Options:
1. **Railway.app** (Free tier available)
2. **Render.com** (Free tier available)
3. **Heroku** (Paid)
4. **AWS/GCP/Azure** (More complex)

#### Frontend Options:
1. **Vercel** (Recommended for React)
2. **Netlify**
3. **GitHub Pages** (static only)

#### Environment Variables:
**Backend (.env)**:
```
MONGO_URL=your_mongodb_connection_string
DB_NAME=portfolio
CORS_ORIGINS=https://your-frontend-domain.com
```

**Frontend (.env)**:
```
REACT_APP_BACKEND_URL=https://your-backend-domain.com
```

---

## 🔧 Environment Setup

### Required Services:

#### 1. MongoDB Database
- **MongoDB Atlas** (Free tier): https://www.mongodb.com/cloud/atlas
- Create a cluster
- Get connection string
- Update `MONGO_URL` in backend `.env`

#### 2. Domain (Optional)
- Link custom domain to GitHub Pages
- Update DNS settings

---

## 📊 Visitor Counter Setup

### GitHub Profile Visitor Counter
Already included in the README! Uses: https://komarev.com/ghpvc/

### Portfolio Website Visitor Counter
The visitor counter is built into the backend:
- Automatically tracks visits in MongoDB
- Displays count in footer
- No additional setup needed!

---

## 🎨 Customization

### Update GitHub Username
If deploying for a different GitHub user:
1. In all files, replace `Manas470` with your GitHub username
2. Update links in `mockData.js`
3. Update API calls in components

### Color Scheme
Current theme: Dark with Emerald/Cyan accents
To change colors, update in:
- `/app/frontend/src/index.css` (CSS variables)
- `/app/frontend/tailwind.config.js` (Tailwind config)

---

## 🧪 Testing Locally

### Frontend
```bash
cd /app/frontend
yarn start
# Opens at http://localhost:3000
```

### Backend
```bash
cd /app/backend
python -m uvicorn server:app --reload --host 0.0.0.0 --port 8001
# API at http://localhost:8001
```

### Test API Endpoints
```bash
# Test GitHub API
curl http://localhost:8001/api/github/profile/Manas470

# Test Analytics
curl -X POST http://localhost:8001/api/analytics/visit \
  -H "Content-Type: application/json" \
  -d '{"page":"/","referrer":"test"}'

# Test Contact Form
curl -X POST http://localhost:8001/api/contact/message \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Hello"}'
```

---

## 📝 Quick Deployment Checklist

### For GitHub Profile:
- [ ] Create `Manas470` repository
- [ ] Copy and paste README content
- [ ] Verify visitor counter works
- [ ] Add profile picture

### For Portfolio Website:
- [ ] Build frontend (`yarn build`)
- [ ] Deploy to GitHub Pages or Vercel
- [ ] Set up MongoDB Atlas (for backend features)
- [ ] Deploy backend to Railway/Render
- [ ] Update environment variables
- [ ] Test all features (contact form, analytics, GitHub stats)
- [ ] Update README with live URL

---

## 🆘 Troubleshooting

### GitHub Stats Not Loading
- Check GitHub API rate limits
- Verify username is correct
- Check browser console for errors

### Contact Form Not Working
- Verify backend is deployed and accessible
- Check CORS settings
- Verify MongoDB connection

### Visitor Counter Not Updating
- Check MongoDB connection
- Verify backend `/api/analytics` endpoints
- Check browser network tab for API errors

---

## 🎉 Post-Deployment

### Update Links
1. Add portfolio URL to GitHub profile README
2. Share on LinkedIn
3. Add to resume

### Monitor
- Check GitHub stats regularly
- Monitor visitor analytics
- Review contact form submissions

---

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [MongoDB Atlas Setup](https://www.mongodb.com/basics/mongodb-atlas-tutorial)
- [Railway Deployment](https://docs.railway.app/)

---

**Need Help?** Check the logs or reach out via email!

Good luck with your deployment! 🚀