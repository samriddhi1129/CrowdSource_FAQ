// backend/src/config/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { googleCallback } = require('../controllers/auth.controller');
const logger = require('../utils/logger');

// Only register the strategy if credentials are actually configured —
// otherwise passport.authenticate('google', ...) throws "Unknown strategy"
// which is just as confusing as the old 404.
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL || '/api/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await googleCallback(profile);
          done(null, user);
        } catch (err) {
          logger.error('Google OAuth error:', err);
          done(err, null);
        }
      }
    )
  );
} else {
  logger.warn('GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET not set — Google login is disabled.');
}

module.exports = passport;