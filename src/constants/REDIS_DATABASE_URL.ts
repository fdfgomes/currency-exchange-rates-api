require('dotenv').config();

const REDIS_HOST = process.env.REDIS_HOST ?? '';

const REDIS_PORT = process.env.REDIS_PORT ?? '';

const REDIS_USER = 'default';

const REDIS_PASSWORD = process.env.REDIS_PASSWORD ?? '';

const REDIS_DATABASE_URL = `redis://${REDIS_USER}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`;

export default REDIS_DATABASE_URL;
