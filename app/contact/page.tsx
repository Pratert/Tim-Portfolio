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
        subtitle="Please feel free to reach out to me to schedule a consultation or if you're interested in collaborating."
      />

      <div className="mt-10">
        <Card title="Connect">
          <ul className="space-y-3 text-sm text-neutral-700">
            <li>
              LinkedIn:{" "}
              <Link
                className="underline underline-offset-4 hover:text-neutral-900"
                href="www.linkedin.com/in/tim-prater-ms-2b479176"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  Email:{" "}
                  <Link
                    className="underline underline-offset-4 hover:text-neutral-900"
                    href="mailto:tim@tim-prater.com"
                  >
                    tim@tim-prater.com
                  </Link>
                </li>
                www.linkedin.com/in/tim-prater-ms-2b479176
              </Link>
            </li>
          </ul>
           <ContactForm />
        </Card>
      </div>
    </PageShell>
  );
}