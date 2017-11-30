import * as Snoowrap from 'snoowrap';
import * as dotenv from 'dotenv';

dotenv.config();

const reddit = new Snoowrap({
  userAgent: 'karmatron-bot',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
});

reddit.composeMessage({
  to: 'wizang',
  subject: 'Testing',
  text: 'A test message.'
});