"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit = async (data: Inputs) => {
    console.log(data);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.ok) {
      router.push("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="space-y-5 border p-10 rounded-md shadow-md max-w-md mx-auto mt-20 bg-card">
      <h1 className="text-4xl font-bold text-primary">Login Now</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        {/* email */}
        <div>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>
        {errors.email && <span>This field is required</span>}

        {/* password */}
        <div>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        {errors.password && <span>This field is required</span>}

        {/* don't have an account */}
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <Link
            className="underline font-semibold text-blue-600"
            href="/register"
          >
            Register
          </Link>
        </p>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
