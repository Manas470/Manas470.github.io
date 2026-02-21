# 📝 How to Update Your GitHub Profile & Portfolio

## 🔄 Two Types of Updates

### 1️⃣ **GitHub Profile README** (Manual Updates)
Your profile at https://github.com/Manas470 shows a README that you need to update manually.

### 2️⃣ **Portfolio Website Projects** (Automatic Updates ✅)
Your portfolio website will automatically fetch new projects from GitHub!

---

## 📋 GitHub Profile README - How to Edit Directly

### Quick Edit (On GitHub Website)

1. **Go to your profile repository:**
   - Visit: https://github.com/Manas470/Manas470

2. **Edit the README:**
   - Click on `README.md` file
   - Click the pencil icon (✏️) to edit
   - Make your changes
   - Scroll down and click "Commit changes"

### What You Can Update:

#### ✅ Adding New Certificates
Find this section:
```markdown
### 🎓 Certifications & Learning

> **Note:** Add your specific certifications here
```

Replace with your actual certificates:
```markdown
### 🎓 Certifications & Learning

**Completed Certifications:**
- 🎓 AWS Certified Machine Learning - Specialty (2024)
- 🎓 Google Cloud Professional Data Engineer (2023)
- 🎓 Deep Learning Specialization - Coursera (2023)
- 🎓 TensorFlow Developer Certificate (2023)
```

#### ✅ Adding New Experience
Find the Professional Experience section and add new roles:
```markdown
### 🏢 Senior Data Scientist | New Company
**Jan 2026 - Present**

- Description of new role
- Key achievements
- Technologies used
```

#### ✅ Updating Resume Link
Find this line:
```markdown
- 📄 Resume: [View My Resume](https://drive.google.com/file/d/1Ze3V7zPOUroUCd_GPouejjVMd54WoeIB/view?usp=sharing)
```

Replace the URL with your new resume link whenever you update it.

#### ✅ Adding New Projects
Find the "Featured Projects" section and add:
```markdown
### 🚀 [Your New Project Name](link-to-project)
Description of what the project does and key achievements.

**Tech Stack:** `Python` `TensorFlow` `AWS` `Docker`

---
```

#### ✅ Updating Current Work
Find this line:
```markdown
- 🔭 Currently working on **forecasting, churn prediction, and NLP at Crunch Fitness**
```

Update whenever your focus changes.

#### ✅ Updating Learning Goals
Find the code block:
```python
learning_goals = {
    "ai": ["Advanced Generative AI", "LLM Fine-tuning"],
    "cloud": ["Vertex AI (GCP)", "MLOps Automation"],
    "data": ["Snowflake for ML workflows", "Real-time ML pipelines"]
}
```

Update with new topics you're learning.

---

## 🤖 Portfolio Website - Automatic Updates

### ✅ Projects Auto-Update
Your portfolio website (`https://your-portfolio-url.com`) **automatically fetches** your latest GitHub repositories!

**How it works:**
- Backend API calls GitHub every time someone visits
- New repos appear automatically
- No manual updates needed!

**What updates automatically:**
- ✅ Number of repositories
- ✅ Total stars count
- ✅ Top programming languages
- ✅ Repository list with descriptions

### ⚠️ What Needs Manual Update on Website:

#### 1. Resume Link (in code)
If you want to update resume link in the portfolio website too:

**Edit file:** `/app/frontend/src/mock/mockData.js`
```javascript
resume: "https://drive.google.com/file/d/YOUR_NEW_LINK/view?usp=sharing"
```

Then redeploy the website.

#### 2. Skills, About Section
**Edit file:** `/app/frontend/src/mock/mockData.js`

Update the `skills`, `profileData`, `experience`, or `learning` sections.

#### 3. Featured Projects (if you want custom descriptions)
The website shows all GitHub repos, but if you want to highlight specific ones:

**Edit file:** `/app/frontend/src/mock/mockData.js`
Update the `projects` array with your featured projects.

---

## 🎯 Quick Reference: Where to Edit What

| What to Update | Where to Edit | Auto/Manual |
|---------------|---------------|-------------|
| **GitHub Profile** | https://github.com/Manas470/Manas470/edit/main/README.md | Manual ✏️ |
| **Resume Link (Profile)** | GitHub README line 19 | Manual ✏️ |
| **Resume Link (Website)** | `/app/frontend/src/mock/mockData.js` | Manual ✏️ |
| **Certificates** | GitHub README (new section) | Manual ✏️ |
| **Experience** | GitHub README (Professional Experience) | Manual ✏️ |
| **New Projects (Profile)** | GitHub README (Featured Projects) | Manual ✏️ |
| **New Projects (Website)** | Automatic from GitHub API | ✅ AUTO |
| **GitHub Stats (Website)** | Automatic from GitHub API | ✅ AUTO |
| **Visitor Count (Website)** | Automatic from database | ✅ AUTO |

---

## 📱 Editing on Mobile

You can edit your GitHub README from your phone too!

1. Open GitHub app or browser
2. Go to your profile repo
3. Tap on README.md
4. Tap the pencil icon
5. Make changes
6. Commit

---

## 💡 Pro Tips

### Keep Your Profile Fresh
- ✅ Update every 2-3 months with new achievements
- ✅ Add new certifications immediately after completion
- ✅ Update "Currently Learning" section regularly
- ✅ Add new featured projects when completed

### Use GitHub Markdown
- **Bold text:** `**text**`
- *Italic text:* `*text*`
- [Links]: `[text](url)`
- Emojis: Just paste them: 🚀 ⚡ 🎯
- Code blocks: Use triple backticks ```

### Preview Before Committing
- Click "Preview" tab when editing
- Check formatting looks good
- Then commit

---

## 🔄 Example: Adding a New Certificate

**Before:**
```markdown
> **Note:** Add your specific certifications here
```

**After:**
```markdown
**Completed Certifications:**
- 🎓 **AWS Certified Machine Learning - Specialty** (2024)
  - Credential ID: ABC123456
  - [Verify Certificate](link-to-certificate)
- 🎓 **Google Professional Data Engineer** (2023)
  - Credential ID: XYZ789012
  - [Verify Certificate](link-to-certificate)
```

---

## 📊 Example: Adding New Project

```markdown
### 🎯 [Real-Time Customer Analytics Dashboard](https://github.com/Manas470/customer-analytics)
Built a real-time dashboard for tracking customer behavior across multiple channels. **Processes 1M+ events daily** with sub-second latency.

**Tech Stack:** `Python` `Apache Kafka` `Redis` `React` `PostgreSQL`

**Key Features:**
- Real-time event processing with Apache Kafka
- Interactive visualizations with React and D3.js
- Predictive analytics for customer behavior
- Deployed on AWS with auto-scaling

---
```

---

## 🆘 Common Questions

**Q: Do I need to redeploy my website after editing GitHub README?**
**A:** No! GitHub profile and website are separate. README edits are instant.

**Q: Will new GitHub repos appear on my website automatically?**
**A:** Yes! The website fetches live data from GitHub API.

**Q: How do I add my certifications?**
**A:** Edit the GitHub README directly, find the Certifications section, and add your certs with links.

**Q: Can I edit on my phone?**
**A:** Yes! Use GitHub mobile app or browser.

**Q: How often should I update my profile?**
**A:** Update whenever you complete a project, get a certificate, or change roles. Aim for at least quarterly updates.

---

## ✅ Your Updated Resume Link

Your new resume link has been updated in:
- ✅ GitHub Profile README: https://drive.google.com/file/d/1Ze3V7zPOUroUCd_GPouejjVMd54WoeIB/view?usp=sharing
- ✅ Portfolio Website code (mockData.js)

When you redeploy your website, the new resume link will be live!

---

**Need help?** Just edit and experiment! You can always undo changes on GitHub by viewing commit history and reverting. 🚀