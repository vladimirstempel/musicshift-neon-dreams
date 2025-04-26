
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Music, PlayCircle } from "lucide-react";

export function RecentActivity() {
  const activities = [
    {
      time: "2h ago",
      description: "Transferred 'Summer Vibes' playlist",
      icon: <Music className="h-4 w-4" />,
    },
    {
      time: "5h ago",
      description: "Added 156 songs to queue",
      icon: <PlayCircle className="h-4 w-4" />,
    },
    {
      time: "1d ago",
      description: "Connected Apple Music account",
      icon: <Calendar className="h-4 w-4" />,
    },
  ];

  return (
    <Card className="synthwave-card">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 border-b border-border pb-4 last:border-0 last:pb-0"
            >
              <div className="p-2 bg-muted rounded-full">{activity.icon}</div>
              <div className="flex-1 space-y-1">
                <p className="text-sm">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
