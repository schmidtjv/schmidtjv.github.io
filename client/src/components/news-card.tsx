import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import type { News } from "@shared/schema";

export function NewsCard({ news }: { news: News }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{news.title}</CardTitle>
        <div className="text-sm text-muted-foreground">
          {format(new Date(news.date), "MMMM d, yyyy")}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{news.content}</p>
      </CardContent>
    </Card>
  );
}
