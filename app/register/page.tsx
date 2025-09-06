import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="space-y-5 border p-10 rounded-md shadow-md max-w-md mx-auto mt-20 bg-white">
      <h1 className="text-4xl font-bold text-primary">Register Now</h1>
      <form className="flex flex-col gap-2">
        <div>
          {/* name */}
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            required
          />
        </div>

        <div>
          {/* File upload */}
          <Label htmlFor="profile">Profile Picture:</Label>
          <Input
            className="file:bg-gray-100 file:px-2 file:rounded-xl file:text-sm file:font-medium file:cursor-pointer"
            type="file"
            id="profile"
            name="profile"
          />
        </div>

        <div>
          {/* email */}
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>

        <div>
          {/* password */}
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            required
          />
        </div>
        <p className="text-sm">
          Already have an account?{" "}
          <Link className="underline font-semibold text-blue-600" href="/login">
            Login
          </Link>
        </p>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
