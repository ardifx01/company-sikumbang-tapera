"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiCallAuth } from "@/helper/apiCall";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SignIn() {
    const router = useRouter()
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (localStorage.getItem('tkn')) {
            const timer = setTimeout(() => {
                router.replace('/admin')
            }, 2000)
            return () => clearTimeout(timer)
        } else {
            setIsReady(true)
        }
    }, [])


    const login = async () => {
        try {
            const email = inputEmail.current?.value
            const password = inputPassword.current?.value
            if (!email || !password) {
                alert("Isi semua form")
                return
            }
            const res = await apiCallAuth.get('/accounts', {
                params: {
                    where: `email = '${email}' AND password = '${password}'`,
                },
            })
            localStorage.setItem("tkn", res.data[0].objectId)

            alert("Selamat data")
            router.replace("/admin")
        } catch (error) {
            console.log(error)
        }
    }

    const [isReady, setIsReady] = useState(false);

    if (isReady === false) {
        return <div className="flex justify-center items-center h-screen w-screen">
            <p>Is Loading...</p>
        </div>;
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Card className="w-75 md:w-96">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="">
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    ref={inputEmail}
                                />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    {/* <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a> */}
                                </div>
                                <Input id="password" type="password" required ref={inputPassword} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button type="button" className="w-full hover:cursor-pointer" onClick={login}>
                                    Login
                                </Button>
                                {/* <Button variant="outline" className="w-full">
                                    Login with Google
                                </Button> */}
                            </div>
                        </div>
                        {/* <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <a href="#" className="underline underline-offset-4">
                                Sign up
                            </a>
                        </div> */}
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Button variant="link" type="button" className="hover:cursor-pointer px-0 underline underline-offset-4" onClick={() => router.push('/admin/signup')}>
                                Sign up
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}