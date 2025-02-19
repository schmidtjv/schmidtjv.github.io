import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import type { Course } from "@shared/schema";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          {course.code}: {course.title}
        </CardTitle>
        <div className="text-sm text-muted-foreground">{course.semester}</div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm">{course.description}</p>
        {course.syllabus && (
          <Button variant="outline" size="sm" asChild>
            <a href={course.syllabus} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Syllabus
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
