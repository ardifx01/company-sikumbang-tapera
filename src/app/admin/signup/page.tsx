"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiCallAuth } from "@/helper/apiCall";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SignUp() {
    const router = useRouter();
    const inputUserName = useRef<HTMLInputElement>(null);
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    const register = async () => {
        try {
            const username = inputUserName.current?.value.trim();
            const email = inputEmail.current?.value.trim();
            const password = inputPassword.current?.value.trim();

            if (!username || !email || !password) {
                alert("Isi username, email dan password dengan benar!!😡👿💢");
                return
            } else {
                const res = await apiCallAuth.post("/accounts", {
                    username,
                    email,
                    password
                })

                if (res.status === 200) {
                    alert("Login berhasil")
                    router.replace('/admin')
                }
            }
        } catch (error) {
            alert(`Silahkan ganti "Username" dan/atau "Email"`)
            console.log(error)
        }
    }

    return (

        <div className="h-screen flex flex-col items-center justify-center">
            <Card className="w-75 md:w-96">
                <CardHeader>
                    <CardTitle>Register your account</CardTitle>
                    <CardDescription>
                        Enter username, email, and password below to register to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="">
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="Masukkan username"
                                    required
                                    ref={inputUserName}
                                />
                            </div>
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
                                </div>
                                <Input id="password" type="password" required ref={inputPassword} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button type="button" className="w-full hover:cursor-pointer" onClick={register}>
                                    Register
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Button variant="link" className="hover:cursor-pointer px-0 underline underline-offset-4" onClick={() => router.push('/admin/signin')}>
                                Sign In
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}