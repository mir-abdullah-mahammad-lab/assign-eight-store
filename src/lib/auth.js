import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('assign-eight');

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  account: {
        accountLinking: {
            enabled: true,
            trustedProviders: ["google"], // auto-link if email matches
        }
    },
  database: mongodbAdapter(db, {client}),
    emailAndPassword: { enabled: true,},
     socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
 
});