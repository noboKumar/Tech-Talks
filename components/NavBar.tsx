import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow border-b sticky top-0 z-50">
      <div className="flex items-center justify-between py-4 w-8/12 mx-auto">
        <div className="flex items-center gap-4">
          <Logo />
          <div>
            <input
              className="border rounded-md p-2"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="md:flex items-center gap-8 hidden">
          <div>
            <ul className="flex gap-4">
              <li>Home</li>
              <li>Forums</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <Button>Log In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
