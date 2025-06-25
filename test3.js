import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const SignupPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/construction-bg.jpg')] bg-cover bg-center opacity-30 z-0" />
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Signup Form */}
      <motion.div
        className="z-20 w-full max-w-md px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Card className="backdrop-blur bg-white/90 dark:bg-gray-800 shadow-2xl rounded-2xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Create Your Account 🏗️
            </h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div>
                <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button type="submit" className="w-full mt-4">Sign Up</Button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
              Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SignupPage;
