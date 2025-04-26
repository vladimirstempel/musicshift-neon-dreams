
import React from "react";
import { RegisterForm } from "@/components/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen w-full synthwave-grid-background flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-neon-pink/5 to-neon-blue/10 animate-gradient-background" style={{ backgroundSize: "400% 400%" }} />
      
      <div className="w-full max-w-lg z-10">
        <div className="backdrop-blur-xl bg-card/40 p-8 border border-border rounded-xl shadow-2xl">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
