import AuthValidationProvider from "@/providers/AuthValidationProvider";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@nextui-org/button";

const Admin = async () => {
    return (
        <AuthValidationProvider>
            <main>
                <Card className="w-[120px]" shadow="sm" isPressable>
                    <CardBody className="overflow-visible p-0">
                        <div className="w-full relative aspect-square rounded-2xl">

                        </div>
                    </CardBody>
                </Card>
            </main>
        </AuthValidationProvider>
    );
};

export default Admin;