"use client"
import * as React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signinSchema } from "../../validators/auth-validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { Toaster } from "@/components/ui/ui/toaster"
import { Button } from "@/components/ui/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/ui/card"
import { Input } from "@/components/ui/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/ui/form"
import { redirect, useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useToast } from "@/components/ui/ui/use-toast"

type Input = z.infer<typeof signinSchema>;

export default function Login() {
  const { toast } = useToast()
  const router = useRouter()
  const form = useForm<Input>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: Input) {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => { 
        toast({
          title: "Signed-in successfully!",
        });
        router.push('/') })
      .catch((error) => { 
        toast({
          title: "Something went wrong:(",
          variant: "destructive",
        });
        console.log(error); })
  }

  return (
    <main className="flex justify-center items-center min-h-screen">
      {/* Left Section (Image) */}
      <div className="flex-shrink-0 w-1/2">
        <img
          src="/pharmacy_signin.jpg"
          alt="Your Image"
          className="w-full h-auto max-h-[400px] object-cover"
        />
      </div>
      {/* Right Section (Form) */}
      <Card className="w-[350px] ml-8 shadow-lg bg-white bg-opacity-70">
      <CardHeader>
  <CardTitle>Login</CardTitle>
  <div style={{ marginBottom: '10px' }}></div>
  <CardDescription>Your wellness, just a click away</CardDescription>
</CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-teal-600">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem >
                    <FormLabel className="text-teal-600">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your password..." type="password"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col space-y-4">
                <div >
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => router.push('/authentication/register')}
                    className="text-blue-500"
                  >
                    New User?
                  </Button>
                  <Button
                    type="button"
                    className="float-right text-blue-500"
                    variant="link"
                    onClick={() => router.push('/authentication/forgot-password')}
                  >
                    Forgot Password?
                  </Button>
                </div>
                <Button type="submit" className="bg-blue-500 hover:bg-blue-700">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Toaster />
    </main>
  )
}
