
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/Logo";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  
  // Password strength calculation
  const getPasswordStrength = (password: string): number => {
    if (!password) return 0;
    
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    
    return strength;
  };
  
  const passwordStrength = getPasswordStrength(password);
  
  const passwordRequirements = [
    { text: "At least 8 characters", met: password.length >= 8 },
    { text: "Contains uppercase letters", met: /[A-Z]/.test(password) },
    { text: "Contains numbers", met: /[0-9]/.test(password) },
    { text: "Contains special characters", met: /[^A-Za-z0-9]/.test(password) },
  ];
  
  return (
    <div className="space-y-6 w-full max-w-md">
      <div className="flex justify-center mb-8">
        <Logo className="scale-150" />
      </div>
      
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-muted-foreground">Enter your details to get started</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input 
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
          
          <div className="space-y-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="text-xs">Password strength</span>
              <span className="text-xs">
                {passwordStrength === 0 && "Very weak"}
                {passwordStrength === 25 && "Weak"}
                {passwordStrength === 50 && "Medium"}
                {passwordStrength === 75 && "Strong"}
                {passwordStrength === 100 && "Very strong"}
              </span>
            </div>
            <Progress value={passwordStrength} className="h-1" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              {passwordRequirements.map((req, idx) => (
                <div key={idx} className="flex items-center text-xs">
                  {req.met ? (
                    <Check className="h-3 w-3 mr-1 text-green-500" />
                  ) : (
                    <X className="h-3 w-3 mr-1 text-neon-pink" />
                  )}
                  <span className={req.met ? "text-green-500" : "text-muted-foreground"}>
                    {req.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input 
            id="confirm-password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword && password !== confirmPassword && (
            <p className="text-xs text-neon-pink">Passwords do not match</p>
          )}
        </div>
        
        <Button type="submit" className="w-full gradient-button py-6">
          Create Account
        </Button>
        
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="/login" className="text-neon-blue hover:text-neon-purple transition-colors">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
