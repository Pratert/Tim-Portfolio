export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-10">
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      {subtitle ? (
        <p className="mt-3 text-lg leading-relaxed text-neutral-700">{subtitle}</p>
      ) : null}
    </header>
  );
}