import { Session } from "next-auth";

const createAuthHeader = (session: Session | null) : Record<any, any> => {
    if (session) {
        return {
            Authorization: `Bearer ${session.user!.accessToken}`
        };
    }
    return {};
};

export default createAuthHeader;