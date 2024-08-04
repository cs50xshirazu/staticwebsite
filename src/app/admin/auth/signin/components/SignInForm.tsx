"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import * as yup from "yup";
import { useRouter } from "next/navigation";

type SignInForm = {
    email: string;
    password: string;
};

const SignInFormSchema = yup
    .object().shape({
        email: yup
            .string()
            .email("ایمیل وارد شده اشتباه است")
            .required("ایمیل را وارد کنید"),
        password: yup
            .string()
            .min(8, "رمزعبور نباید کمتر از ۸ کاراکتر باشد")
            .required("پسوورد را وارد کنید")
    });

const SignInForm = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<SignInForm>({
        resolver: yupResolver(SignInFormSchema)
    });

    const onSubmit: SubmitHandler<SignInForm> = async (data) => {
        try {
            const response = await signIn("credentials", { ...data, redirect: false });

            if (response?.error) throw new Error(response?.error);

            toast.success("با موفقیت وارد شدید");
            router.push("/admin");
        } catch (e) {
            console.log(e);
            toast.error("خطایی رخ داده است");
        }
    };

    return (
        <div className="w-full h-full bg-background flex items-center justify-center fixed inset-0 z-50">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-[400px] bg-content1 rounded-xl flex flex-col items-center p-6 gap-8"
            >
                <div className="flex flex-col gap-4 items-center justify-center w-full mb-6">
                    <Image src="/images/logo.png" alt="logo" className="w-[60px]" width={100} height={100} />
                    <span className="text-foreground font-bold text-xl">ورد به پنل CS50xShiraz</span>
                </div>
                <Input
                    isRequired
                    type="email"
                    size="lg"
                    dir="ltr"
                    placeholder="example@test.com"
                    labelPlacement="outside"
                    endContent={<i className="pi pi-envelope text-xl  pr-3 text-foreground-500"></i>}
                    label="ایمیل"
                    className="w-full text-foreground"
                    variant="bordered"
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                    {...register("email")}
                />
                <Input
                    isRequired
                    type="password"
                    size="lg"
                    dir="ltr"
                    placeholder="12345678"
                    labelPlacement="outside"
                    endContent={<i className="pi pi-lock text-xl mb-[2px] pr-3 text-foreground-500"></i>}
                    label="رمز عبور"
                    className="w-full text-foreground"
                    variant="bordered"
                    isInvalid={!!errors.password}
                    errorMessage={errors.password?.message}
                    {...register("password")}
                />
                <Button
                    fullWidth
                    color="primary"
                    endContent={<i className="pi pi-sign-in"></i>}
                    type="submit"
                    isLoading={isSubmitting}
                >
                    ورود به پنل
                </Button>
            </form>
        </div>
    );
};

export default SignInForm;