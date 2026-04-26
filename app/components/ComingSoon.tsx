export default function ComingSoon({
  title = "Coming Soon",
  subtitle = "This section is being built.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <>
      <h1 className="text-5xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-3 text-neutral-600">{subtitle}</p>
    </>
  );
}