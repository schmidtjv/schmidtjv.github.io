import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function CV() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="prose dark:prose-invert">
        <h1>Curriculum Vitae</h1>
        
        <div className="not-prose mb-8">
          <Button asChild>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Download CV (PDF)
            </a>
          </Button>
        </div>

        <section>
          <h2>Education</h2>
          <ul>
            <li>Ph.D. in Philosophy, Stanford University, 2010</li>
            <li>M.A. in Philosophy, University of Chicago, 2005</li>
            <li>B.A. in Philosophy, Yale University, 2003</li>
          </ul>
        </section>

        <section>
          <h2>Academic Positions</h2>
          <ul>
            <li>Professor of Philosophy, University of Example, 2018-present</li>
            <li>Associate Professor, University of Example, 2014-2018</li>
            <li>Assistant Professor, University of Example, 2010-2014</li>
          </ul>
        </section>

        <section>
          <h2>Research Areas</h2>
          <ul>
            <li>Philosophy of Mind</li>
            <li>Ethics</li>
            <li>Digital Philosophy</li>
            <li>Artificial Intelligence Ethics</li>
          </ul>
        </section>

        <section>
          <h2>Awards and Honors</h2>
          <ul>
            <li>Outstanding Faculty Award, University of Example, 2022</li>
            <li>Research Excellence Grant, National Philosophy Foundation, 2020</li>
            <li>Best Paper Award, International Philosophy Conference, 2019</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
