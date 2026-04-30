import PageShell from "../components/PageShell";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function Page() {
  return (
    <PageShell>
      <PageHeader
        title="Contact Me"
        subtitle="Open to principal engineering, solutions architecture, and engineering leadership roles. Feel free to reach out directly."
      />

      <div className="mt-10">
        <Card title="Connect">
          <ul className="space-y-3 text-sm text-neutral-700 mb-6">
            <li>
              LinkedIn:{" "}
              <Link
                className="underline underline-offset-4 hover:text-neutral-900"
                href="https://www.linkedin.com/in/tim-prater-ms-2b479176"
                target="_blank"
                rel="noreferrer"
              >
                www.linkedin.com/in/tim-prater-ms-2b479176
              </Link>
            </li>
            <li>
              Email:{" "}
              <Link
                className="underline underline-offset-4 hover:text-neutral-900"
                href="mailto:tim@tim-prater.com"
              >
                tim@tim-prater.com
              </Link>
            </li>
          </ul>
          <ContactForm />
        </Card>
      </div>
    </PageShell>
  );
}