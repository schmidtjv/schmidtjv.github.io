import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import type { Publication } from "@shared/schema";

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <CardTitle className="font-serif text-lg">{publication.title}</CardTitle>
        <div className="text-sm text-muted-foreground">
          {publication.authors} • {publication.year} • {publication.venue}
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
          {publication.abstract}
        </p>
        {publication.pdfUrl && (
          <Button variant="outline" size="sm" asChild className="transition-colors hover:bg-primary/5">
            <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              PDF
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}