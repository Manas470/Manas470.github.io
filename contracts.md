# Backend Integration Contracts

## Overview
Convert the frontend-only portfolio to a full-stack application with GitHub API integration, contact form, and visitor analytics.

## Mocked Data (to be replaced)
**File**: `/app/frontend/src/mock/mockData.js`
- Profile data (will fetch from GitHub API)
- GitHub stats (will fetch real-time from GitHub API)
- Projects (will fetch from GitHub API)
- Skills (keep as static data)

## Backend Endpoints

### 1. GitHub Integration
**Base Route**: `/api/github`

#### GET `/api/github/profile/:username`
- Fetches GitHub profile data
- Response: `{ name, bio, avatar_url, location, email, public_repos, followers, following }`

#### GET `/api/github/repos/:username`
- Fetches all public repositories
- Response: `[{ id, name, description, html_url, languages, stargazers_count, topics }]`

#### GET `/api/github/stats/:username`
- Fetches contribution stats
- Response: `{ total_commits, total_stars, total_repos, top_languages }`

### 2. Contact Form
**Base Route**: `/api/contact`

#### POST `/api/contact/message`
- Saves contact form submissions
- Body: `{ name, email, subject, message }`
- Response: `{ success: true, message: "Message received" }`

#### GET `/api/contact/messages`
- Admin endpoint to view all messages
- Response: `[{ id, name, email, subject, message, created_at }]`

### 3. Visitor Analytics
**Base Route**: `/api/analytics`

#### POST `/api/analytics/visit`
- Records a page visit
- Body: `{ page, referrer, user_agent }`
- Response: `{ success: true, visitor_count }`

#### GET `/api/analytics/stats`
- Gets visitor statistics
- Response: `{ total_visits, unique_visitors, recent_visits }`

## Database Models

### Contact Message
```python
{
    id: ObjectId,
    name: String,
    email: String,
    subject: String,
    message: String,
    created_at: DateTime,
    read: Boolean
}
```

### Visitor Analytics
```python
{
    id: ObjectId,
    timestamp: DateTime,
    page: String,
    referrer: String,
    user_agent: String,
    ip_hash: String (hashed for privacy)
}
```

## Frontend Integration Changes

### Components to Update:
1. **Hero.jsx** - Fetch real GitHub profile data
2. **Projects.jsx** - Fetch real repositories from GitHub
3. **GitHubStats.jsx** - Fetch real GitHub stats
4. **Contact.jsx** - Submit to backend API instead of mock
5. **App.js** - Add visitor tracking on mount

### API Service Layer
Create `/app/frontend/src/services/api.js`:
- GitHub API calls
- Contact form submission
- Analytics tracking

## Environment Variables Needed
**Backend** (already in `/app/backend/.env`):
- `MONGO_URL` - Already configured
- `DB_NAME` - Already configured
- No GitHub token needed (using public API)

**Frontend** (already in `/app/frontend/.env`):
- `REACT_APP_BACKEND_URL` - Already configured

## GitHub Profile README
Create `/app/github-profile/README.md`:
- Profile header with visitor counter badge
- GitHub stats cards
- Skills showcase
- Link to full portfolio website
- Recent projects section

## Implementation Order
1. ✅ Frontend with mock data (DONE)
2. Backend API endpoints
3. Frontend-backend integration
4. GitHub Profile README creation
5. Deployment guide