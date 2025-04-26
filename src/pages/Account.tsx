
import React from "react";
import { SideDrawer } from "@/components/SideDrawer";
import { TopBar } from "@/components/TopBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings, Bell, Shield } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <SideDrawer />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-muted rounded-full">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>Profile Information</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Manage your personal information
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 bg-muted border border-border rounded-md"
                      value="Alex Johnson"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full mt-1 px-3 py-2 bg-muted border border-border rounded-md"
                      value="alex@example.com"
                      readOnly
                    />
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-muted rounded-full">
                    <Bell className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>Notifications</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Configure your notification preferences
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Receive updates about your transfers
                      </p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified on your device
                      </p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-muted rounded-full">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>Security</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Manage your account security
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full">
                    Two-Factor Authentication
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
