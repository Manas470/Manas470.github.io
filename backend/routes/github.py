from fastapi import APIRouter, HTTPException
import requests
from typing import List, Dict, Any
import logging

router = APIRouter(prefix="/github", tags=["github"])
logger = logging.getLogger(__name__)

GITHUB_API_BASE = "https://api.github.com"

@router.get("/profile/{username}")
async def get_github_profile(username: str):
    """Fetch GitHub profile data"""
    try:
        response = requests.get(
            f"{GITHUB_API_BASE}/users/{username}",
            headers={"Accept": "application/vnd.github.v3+json"},
            timeout=10
        )
        
        if response.status_code == 404:
            raise HTTPException(status_code=404, detail="GitHub user not found")
        
        response.raise_for_status()
        data = response.json()
        
        return {
            "name": data.get("name"),
            "bio": data.get("bio"),
            "avatar_url": data.get("avatar_url"),
            "location": data.get("location"),
            "email": data.get("email"),
            "blog": data.get("blog"),
            "public_repos": data.get("public_repos", 0),
            "followers": data.get("followers", 0),
            "following": data.get("following", 0),
            "created_at": data.get("created_at"),
            "html_url": data.get("html_url")
        }
    except requests.RequestException as e:
        logger.error(f"Error fetching GitHub profile: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch GitHub profile")

@router.get("/repos/{username}")
async def get_github_repos(username: str):
    """Fetch GitHub repositories"""
    try:
        response = requests.get(
            f"{GITHUB_API_BASE}/users/{username}/repos",
            headers={"Accept": "application/vnd.github.v3+json"},
            params={"sort": "updated", "per_page": 100},
            timeout=10
        )
        
        if response.status_code == 404:
            raise HTTPException(status_code=404, detail="GitHub user not found")
        
        response.raise_for_status()
        repos = response.json()
        
        formatted_repos = []
        for repo in repos:
            formatted_repos.append({
                "id": repo.get("id"),
                "name": repo.get("name"),
                "description": repo.get("description"),
                "html_url": repo.get("html_url"),
                "homepage": repo.get("homepage"),
                "stargazers_count": repo.get("stargazers_count", 0),
                "forks_count": repo.get("forks_count", 0),
                "language": repo.get("language"),
                "topics": repo.get("topics", []),
                "created_at": repo.get("created_at"),
                "updated_at": repo.get("updated_at")
            })
        
        return formatted_repos
    except requests.RequestException as e:
        logger.error(f"Error fetching GitHub repos: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch GitHub repositories")

@router.get("/stats/{username}")
async def get_github_stats(username: str):
    """Calculate GitHub statistics"""
    try:
        # Fetch repositories
        repos_response = requests.get(
            f"{GITHUB_API_BASE}/users/{username}/repos",
            headers={"Accept": "application/vnd.github.v3+json"},
            params={"per_page": 100},
            timeout=10
        )
        repos_response.raise_for_status()
        repos = repos_response.json()
        
        # Calculate stats
        total_stars = sum(repo.get("stargazers_count", 0) for repo in repos)
        total_forks = sum(repo.get("forks_count", 0) for repo in repos)
        total_repos = len(repos)
        
        # Calculate language stats
        language_counts = {}
        for repo in repos:
            lang = repo.get("language")
            if lang:
                language_counts[lang] = language_counts.get(lang, 0) + 1
        
        # Get top languages
        top_languages = sorted(
            language_counts.items(),
            key=lambda x: x[1],
            reverse=True
        )[:5]
        
        total_lang_count = sum(language_counts.values())
        top_languages_with_percentage = [
            {
                "name": lang,
                "count": count,
                "percentage": round((count / total_lang_count) * 100, 1) if total_lang_count > 0 else 0
            }
            for lang, count in top_languages
        ]
        
        return {
            "total_repos": total_repos,
            "total_stars": total_stars,
            "total_forks": total_forks,
            "top_languages": top_languages_with_percentage
        }
    except requests.RequestException as e:
        logger.error(f"Error fetching GitHub stats: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch GitHub statistics")