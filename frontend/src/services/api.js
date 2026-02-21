import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// GitHub API calls
export const githubAPI = {
  getProfile: async (username) => {
    try {
      const response = await axios.get(`${API}/github/profile/${username}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching GitHub profile:', error);
      throw error;
    }
  },

  getRepos: async (username) => {
    try {
      const response = await axios.get(`${API}/github/repos/${username}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      throw error;
    }
  },

  getStats: async (username) => {
    try {
      const response = await axios.get(`${API}/github/stats/${username}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching GitHub stats:', error);
      throw error;
    }
  }
};

// Contact API calls
export const contactAPI = {
  sendMessage: async (messageData) => {
    try {
      const response = await axios.post(`${API}/contact/message`, messageData);
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  getMessageCount: async () => {
    try {
      const response = await axios.get(`${API}/contact/messages/count`);
      return response.data;
    } catch (error) {
      console.error('Error fetching message count:', error);
      throw error;
    }
  }
};

// Analytics API calls
export const analyticsAPI = {
  logVisit: async (visitData) => {
    try {
      const response = await axios.post(`${API}/analytics/visit`, visitData);
      return response.data;
    } catch (error) {
      console.error('Error logging visit:', error);
      // Don't throw error for analytics to not break the app
      return null;
    }
  },

  getStats: async () => {
    try {
      const response = await axios.get(`${API}/analytics/stats`);
      return response.data;
    } catch (error) {
      console.error('Error fetching analytics stats:', error);
      throw error;
    }
  }
};