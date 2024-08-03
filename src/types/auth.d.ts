export {};

declare module "next-auth" {
    /**
     * The shape of the user object returned in the OAuth providers' `profile` callback,
     * or the second parameter of the `session` callback, when using a database.
     */
    interface User {
        accessToken: string;
        refreshToken: string;
    }

    /**
     * Returned by `useSession`, `auth`, contains information about the active session.
     */
    interface Session {
    }
}

// The `JWT` interface can be found in the `next-auth/jwt` submodule
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT {
        accessToken: string;
        refreshToken: string;
    }
}