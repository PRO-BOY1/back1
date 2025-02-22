import axios from 'axios';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

export const loginWithDiscord = async (req, res) => {
  try {
    const { code } = req.query;
    const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.REDIRECT_URI
    }));

    const userResponse = await axios.get('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${tokenResponse.data.access_token}` }
    });

    let user = await User.findOne({ discordId: userResponse.data.id });
    if (!user) {
      user = await User.create({
        discordId: userResponse.data.id,
        username: userResponse.data.username,
        avatar: `https://cdn.discordapp.com/avatars/${userResponse.data.id}/${userResponse.data.avatar}.png`
      });
    }

    const token = generateToken(user._id);
    res.json({ token, user });

  } catch (error) {
    console.error('❌ Discord Auth Error:', error);
    res.status(400).json({ error: 'Authentication Failed' });
  }
};

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};
