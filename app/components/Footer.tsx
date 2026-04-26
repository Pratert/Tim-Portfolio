import Link from "next/link";


export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-8">

        <p className="text-xs uppercase tracking-widest text-neutral-500">
  website notes
</p>
        <p className="text-sm leading-relaxed text-neutral-600">
          Hi there!  I built this site with Next.js and host it on AWS using Amazon S3 and an Amazon CloudFront
          distribution. The platform is monitored with Amazon CloudWatch. The CloudWatch Alarms
          publish notifications to an Amazon SNS topic, which delivers alerts via email and SMS
          subscriptions. Site usage is captured through CloudFront access logs delivered to Amazon
          S3, cataloged in the AWS Glue Data Catalog, and analyzed with Amazon Athena (SQL).
        </p>

        <p className="mt-4 text-sm text-neutral-600">
          For a full High Level Design to create your own website portfolio in AWS see the{" "}
          <Link
            className="underline underline-offset-4 hover:text-neutral-900"
            href="/projects"
          >
            Projects
          </Link>{" "}
          section.
        </p>
      </div>
    </footer>
  );
}