import { useQuery } from "@tanstack/react-query";
import { PublicationCard } from "@/components/publication-card";
import type { Publication } from "@shared/schema";

export default function Publications() {
  const { data: publications } = useQuery<Publication[]>({
    queryKey: ["/api/publications"]
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="prose dark:prose-invert">
        <h1>Publications</h1>
        <p>
          My research focuses on consciousness, artificial intelligence, and
          ethical implications of emerging technologies. Below you'll find my
          recent publications, including journal articles, book chapters, and
          conference papers.
        </p>
      </div>

      <div className="grid gap-4">
        {publications?.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </div>
  );
}
