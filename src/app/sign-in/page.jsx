"use client";

import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Navbar from '@/components/Navbar';
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import FooterPage from "@/components/Footer";

const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};


    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    console.log('Submitted data:',data)
    const {email, password} =data

    const { data :res, error } = await authClient.signIn.email({
    email: email, 
    password: password, 
    rememberMe: true,
    callbackURL: "/",
});

console.log('sign-in data', res, error)
};



const SignInPage = () => {
 return (
        <div>
            <Navbar></Navbar>
            <div className="h-full bg-amber-200 flex justify-center items-center  p-20 mx-auto">
                          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      <h2>If you are not registered! <Link href={'/register'}><button className="btn btn-active">sign-up</button></Link> </h2>

      <div className="flex gap-2">
        <Button type="submit">
          
          Sign-in
        </Button>
        <Button type="reset" >
          Reset
        </Button>
      </div>
    </Form>
            </div>
            <FooterPage></FooterPage>
     </div>
    );
};

export default SignInPage;