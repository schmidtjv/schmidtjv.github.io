import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="prose dark:prose-invert">
        <h1>Contact</h1>
        <p>
          Feel free to reach out with any questions about my research, courses,
          or potential collaborations. I will try to respond to all inquiries
          within 2-3 business days.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <div className="space-y-2">
            <p className="text-sm">
              <strong>Office:</strong>
              <br />
              Philosophy Building, Room 301
              <br />
              University of Example
              <br />
              123 University Street
              <br />
              City, State 12345
            </p>
            <p className="text-sm">
              <strong>Email:</strong>
              <br />
              jane.smith@university.edu
            </p>
            <p className="text-sm">
              <strong>Phone:</strong>
              <br />
              (555) 123-4567
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
