import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SERECT_KEY || "your_secret_key";

export const generateToken = (userId: string) => {

    const token = jwt.sign(
        {
          UserName: userId, // Store username
        },
        SECRET_KEY,
        {
          expiresIn: "24h", //token expires after 24h
          issuer: 'JWTAuthenticationServer',
          audience: 'JWTAuthenticationServer',
        }
      );
      console.log(token);
    
  return token
};