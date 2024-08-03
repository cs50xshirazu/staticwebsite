import NextAuth from "next-auth";
import "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import axios from "@/utils/axios";

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages : {
        signIn : "/admin/auth/signin"
    },
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                let user = null;

                try {
                    const response = await axios.post("/token/", {
                        email: credentials.email,
                        password: credentials.password
                    });
                    
                    user = {
                        accessToken: response.data.access,
                        refreshToken: response.data.refresh
                    };

                    return user;
                } catch (e) {
                    return null;
                }
            },
        })
    ],
    callbacks : {
        jwt: async ({ token, user, trigger }) => {
            if (user) token.user = user;

            // ERROR IN HERE
            // const decodedJWT = decodeJwt(token.accessToken);
            // if (Date.now() < decodedJWT.exp! * 1000) {
            //     return token;
            // }

            return token;
        },
        session: ({ session, token } : any) => {
            session.user = token.user;
            return session;
        },
    }
});