import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Login = () => {
  return (
    <div className="space-y-5 border p-10 rounded-md shadow-md max-w-md mx-auto mt-20 bg-white">
      <h1 className="text-4xl font-bold">Login Now</h1>
      <form className="flex flex-col gap-2">
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
