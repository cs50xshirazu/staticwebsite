"use client";

import { Button } from "@nextui-org/button";
import { signOut } from "next-auth/react";

const SignOut = () => {
    return (
        <Button
            onPress={() => {
                signOut();
            }}
            variant="flat"
            color="danger"
            size="lg"
            endContent={<i className="pi pi-sign-out"></i>}
        >
            خروج از بنل
        </Button>
    );
};

export default SignOut;