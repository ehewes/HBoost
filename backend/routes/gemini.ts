import Router from '@koa/router';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const router = new Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });


// Use endpoint by sending a post to /chat with { "message": "your message" }
router.post('/chat', async (ctx) => {
  const { message } = (ctx.request as any).body;
  if (!message) {
    ctx.status = 400;
    ctx.body = { error: 'Message is required' };
    return;
  }

  try {
    const result = await model.generateContent(message);
    const reply = result.response.text();
    ctx.body = { reply };
  } catch (error) {
    console.error('Gemini API error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Failed to generate response' };
  }
});

export default router;
