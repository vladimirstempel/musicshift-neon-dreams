
import React from "react";
import { LoginForm } from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen w-full synthwave-grid-background flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/5 to-neon-pink/10 animate-gradient-background" style={{ backgroundSize: "400% 400%" }} />
      
      <div className="w-full max-w-lg z-10">
        <div className="backdrop-blur-xl bg-card/40 p-8 border border-border rounded-xl shadow-2xl">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
