import { useQuery } from "@tanstack/react-query";
import { NewsCard } from "@/components/news-card";
import type { News } from "@shared/schema";

export default function Home() {
  const { data: news } = useQuery<News[]>({ 
    queryKey: ["/api/news"]
  });

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="prose dark:prose-invert">
        <h1>Dr. Jane Smith</h1>
        <h2>Professor of Philosophy</h2>

        <blockquote className="text-lg italic">
          "The unexamined life is not worth living." — Socrates
        </blockquote>

        <p className="text-lg">
          Welcome to my academic website. I am a Professor of Philosophy at the
          University of Example, specializing in ethics, philosophy of mind, and
          digital philosophy. My research focuses on consciousness, artificial
          intelligence, and ethical implications of emerging technologies.
        </p>

        <div className="flex gap-8 not-prose mt-12">
          <div className="flex-1 space-y-3">
            <h3 className="text-lg font-serif font-semibold">Office Hours</h3>
            <p className="text-sm">
              Monday: 2:00 PM - 4:00 PM
              <br />
              Wednesday: 10:00 AM - 12:00 PM
              <br />
              Or by appointment
            </p>
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="text-lg font-serif font-semibold">Contact</h3>
            <p className="text-sm">
              Office: Philosophy Building, Room 301
              <br />
              Email: jane.smith@university.edu
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-serif font-semibold">Latest News</h2>
        <div className="grid gap-6">
          {news?.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </section>
    </div>
  );
}