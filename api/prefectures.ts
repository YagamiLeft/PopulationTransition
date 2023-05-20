import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const API_URL = process.env.RESAS_API_BASE;
const API_KEY = process.env.RESAS_API_KEY ?? '';

const getPrefecture = async (_: VercelRequest, res: VercelResponse) => {
  const response = await fetch(`${API_URL}/prefectures`, {
    headers: {
      'X-API-KEY': API_KEY,
    },
  });
  const data = await response.json();
  res.json(data);
};

export default getPrefecture;
