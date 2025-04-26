
import React from "react";
import { SideDrawer } from "@/components/SideDrawer";
import { TopBar } from "@/components/TopBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Music, PlayCircle } from "lucide-react";

const History = () => {
  const activities = [
    {
      date: "Today",
      items: [
        {
          time: "2h ago",
          description: "Transferred 'Summer Vibes' playlist",
          icon: <Music className="h-4 w-4" />,
          status: "Completed",
        },
        {
          time: "5h ago",
          description: "Added 156 songs to queue",
          icon: <PlayCircle className="h-4 w-4" />,
          status: "Completed",
        },
      ],
    },
    {
      date: "Yesterday",
      items: [
        {
          time: "1d ago",
          description: "Connected Apple Music account",
          icon: <Calendar className="h-4 w-4" />,
          status: "Completed",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      <SideDrawer />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold mb-8">Activity History</h1>

            {activities.map((day) => (
              <div key={day.date} className="space-y-4">
                <h2 className="text-xl font-semibold text-muted-foreground">
                  {day.date}
                </h2>
                <Card>
                  <CardContent className="p-0">
                    {day.items.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 border-b last:border-0 border-border"
                      >
                        <div className="p-2 bg-muted rounded-full">
                          {activity.icon}
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm">{activity.description}</p>
                          <p className="text-xs text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                        <span className="text-sm text-green-500">
                          {activity.status}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
