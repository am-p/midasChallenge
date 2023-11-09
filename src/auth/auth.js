import { secret } from "../config/default.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Users } from "../models/User.js";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret.jwtSecret,
};

passport.use(
  new Strategy(jwtOptions, async (payload, next) => {
    const user = await Users.findOne({
      where: { email: payload.email },
    });
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  })
);
