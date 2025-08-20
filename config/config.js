import 'dotenv/config';

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  apiKey: process.env.API_KEY,
  secret: process.env.SECRET,
}

export default config 
