"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };
  return (
    <div className="space-y-5 border p-10 rounded-md shadow-md max-w-md mx-auto mt-20 bg-card">
      <h1 className="text-4xl font-bold text-primary">Register Now</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div>
          {/* name */}
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name", { required: true })}
          />
        </div>
        {errors.name && <span>This field is required</span>}

        <div>
          {/* File upload */}
          <Label htmlFor="profile">Profile Picture:</Label>
          <Input
            className="file:bg-card file:px-2 file:rounded-xl file:text-sm file:font-medium file:cursor-pointer"
            type="file"
            id="profile"
          />
        </div>

        <div>
          {/* email */}
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>
        {errors.email && <span>This field is required</span>}

        <div>
          {/* password */}
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        {errors.password && <span>This field is required</span>}

        {/* already have an account */}
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
