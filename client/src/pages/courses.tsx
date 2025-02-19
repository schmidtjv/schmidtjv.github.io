import { useQuery } from "@tanstack/react-query";
import { CourseCard } from "@/components/course-card";
import type { Course } from "@shared/schema";

export default function Courses() {
  const { data: courses } = useQuery<Course[]>({
    queryKey: ["/api/courses"]
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="prose dark:prose-invert">
        <h1>Courses</h1>
        <p>
          Here are the courses I am currently teaching or have taught recently.
          Each course page includes the syllabus, reading materials, and other
          relevant resources.
        </p>
      </div>

      <div className="grid gap-4">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
