import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import PageHeader from "../../components/PageHeader";
import { projects } from "../../content/projects";
import DiagramViewerButton from "../../components/DiagramViewerButton";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

const statusConfig: Record<string, { label: string; classes: string }> = {
  active:        { label: "Active",       classes: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  "in-progress": { label: "In Progress",  classes: "bg-amber-50 text-amber-700 border-amber-200" },
  planned:       { label: "Planned",      classes: "bg-neutral-100 text-neutral-500 border-neutral-200" },
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const normalizedSlug = decodeURIComponent(slug).trim().toLowerCase();
  const project = projects.find((p) => p.slug.trim().toLowerCase() === normalizedSlug);

  if (!project) return notFound();

  const status = statusConfig[project.status] ?? statusConfig.planned;

  return (
    <PageShell>

      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/projects/"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All projects
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <p className="text-xs uppercase tracking-widest text-neutral-400">{project.domain}</p>
          <span className={`text-xs border px-2 py-0.5 rounded-full ${status.classes}`}>
            {status.label}
          </span>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight leading-snug mb-2">
          {project.name}
        </h1>
        <p className="text-lg text-neutral-500">{project.tagline}</p>
      </div>

      <div className="space-y-10">

        {/* Overview */}
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Overview</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-neutral-600 leading-relaxed">{project.overview}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
                Key highlights
              </p>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-neutral-600">
                    <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-neutral-400 translate-y-1.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* Architecture */}
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Architecture</p>
          {project.diagrams && project.diagrams.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {project.diagrams.map((d) => (
                <div key={d.label} className="border border-neutral-200 rounded-xl overflow-hidden">
                  <DiagramViewerButton
                    src={d.src}
                    title={d.label}
                    className="block w-full relative group cursor-pointer"
                  >
                    <img
                      src={d.src}
                      alt={d.label}
                      draggable={false}
                      className="w-full object-cover rounded-t-xl"
                      style={{ userSelect: "none", pointerEvents: "none" }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-t-xl flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs px-3 py-1.5 rounded">
                        Click to view full size
                      </span>
                    </div>
                  </DiagramViewerButton>
                  <div className="px-4 py-3 flex items-center justify-between border-t border-neutral-100">
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{d.label}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{d.description}</p>
                    </div>
                    <DiagramViewerButton
                      src={d.src}
                      title={d.label}
                      label="View full size"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-neutral-200 rounded-xl px-6 py-8 text-center">
              <p className="text-sm text-neutral-500">
                Architecture diagram coming soon. HLD and LLD documents will be linked below when complete.
              </p>
            </div>
          )}
        </div>

        <hr className="border-neutral-200" />

        {/* Stack */}
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
            Technology Stack
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(project.stack).map(([group, items]) => (
              <div key={group}>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
                  {group}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={`${group}:${item}`}
                      className="text-xs border border-neutral-200 bg-neutral-50 px-2.5 py-1 rounded text-neutral-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* Documents */}
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Documents</p>
          {project.documents && project.documents.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {project.documents.map((d) => (
                <div
                  key={d.label}
                  className="border border-neutral-200 rounded-xl px-5 py-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{d.label}</p>
                    {d.note && (
                      <p className="text-xs text-neutral-400 mt-0.5">{d.note}</p>
                    )}
                  </div>
                  {!d.note || d.note === "Coming soon" ? (
                    <span className="text-xs text-neutral-300 border border-neutral-200 px-2.5 py-1 rounded">
                      Coming soon
                    </span>
                  ) : (
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-700 border border-blue-200 px-2.5 py-1 rounded hover:bg-blue-50 transition-colors"
                    >
                      View
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-neutral-500">
              Documents will be posted here as they are completed.
            </p>
          )}
        </div>

      </div>
    </PageShell>
  );
}