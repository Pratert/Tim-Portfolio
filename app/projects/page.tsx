"use client";
import PageShell from "../components/PageShell";
import PageHeader from "../components/PageHeader";
import Link from "next/link";
import { projects } from "../content/projects";
import DiagramViewerButton from "../components/DiagramViewerButton";

const statusConfig: Record<string, { label: string; classes: string }> = {
  active:        { label: "Active",       classes: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  "in-progress": { label: "In Progress",  classes: "bg-amber-50 text-amber-700 border-amber-200" },
  planned:       { label: "Planned",      classes: "bg-neutral-100 text-neutral-500 border-neutral-200" },
};

const professionalWork = [
  {
    slug: "mvno-lte-architecture",
    name: "MVNO and Private Cellular LTE Architecture",
    tagline: "3GPP and GSMA-compliant carrier interconnect model",
    domain: "Telecom / Private Wireless / Cloud",
    summary:
      "Led end-to-end architecture and delivery planning for a standards-aligned LTE integration model enabling MVNOs, private cellular customers, and university partners to interconnect with carrier infrastructure. Created a repeatable blueprint supporting both AWS-hosted and on-premises LTE core configurations across Nokia, Ericsson, and third-party environments.",
    highlights: [
      "3GPP and GSMA-compliant architecture across multiple vendor environments",
      "Repeatable blueprint supporting AWS-hosted and on-premises LTE core models",
      "Drove work from technical strategy through executive alignment and RFx support",
      "Contributed to 30+ signed contracts with terms of 1 to 5 years, $500K to $3M each",
    ],
    scope: "U.S. Cellular, 2024 to 2025",
  },
  {
    slug: "saas-tracking-platform",
    name: "Multi-Tenant SaaS Customer Tracking Platform",
    tagline: "Power Platform operational visibility for white-glove enterprise accounts",
    domain: "Microsoft Power Platform / SaaS",
    summary:
      "Designed and led development of a multi-tenant SaaS-style tracking platform to manage white-glove customer engagements, providing centralized visibility into onboarding status, delivery milestones, and customer-specific activities across internal teams.",
    highlights: [
      "Multi-tenant application architecture with account-level data isolation",
      "Event-driven workflow design for onboarding tracking and milestone visibility",
      "Centralized operational reporting across enterprise accounts",
      "Built on Microsoft Power Platform: Power Apps, Power Automate, and SharePoint",
    ],
    scope: "U.S. Cellular, 2025",
  },
  {
    slug: "professional-services-portfolio",
    name: "Professional Services Portfolio and Line of Business",
    tagline: "Net-new revenue from capabilities the organization already had",
    domain: "Solutions Architecture / Business Development",
    summary:
      "Identified an untapped opportunity in existing engineering capabilities and led cross-functional alignment across Sales, Engineering, Product, Legal, and Operations to design, scope, and bring to market a professional services portfolio. Created reusable scope language, delivery framing, and customer-facing artifacts supporting engagements valued at $250K to $700K.",
    highlights: [
      "Designed portfolio covering consulting, audits, architecture assessments, and security assessments",
      "Led cross-functional alignment to bring net-new offering to market",
      "Created reusable delivery artifacts adopted across multiple engagements",
      "Generated multi-million dollar revenue from capabilities that previously went unpackaged",
    ],
    scope: "U.S. Cellular, 2025",
  },
];

export default function Page() {
  return (
    <PageShell>
      <PageHeader
        title="Projects"
        subtitle="Portfolio builds with architecture documentation, and selected professional work delivered at scale."
      />

      {/* Section 1: Portfolio builds */}
      <div className="mt-10 mb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
          Portfolio Builds
        </p>
        <p className="text-sm text-neutral-500 max-w-2xl leading-relaxed mb-8">
          Personal builds demonstrating cloud architecture, systems design, and engineering
          discipline. Each project includes a High-Level Design and Low-Level Design document.
        </p>
        <div className="space-y-6 mb-4">
          {projects.map((p) => {
            const status = statusConfig[p.status] ?? statusConfig.planned;
            return (
              <div key={p.slug} className="border border-neutral-200 rounded-xl overflow-hidden">

                {/* Card header */}
                <div className="bg-neutral-50 border-b border-neutral-200 px-6 py-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-xs uppercase tracking-widest text-neutral-400">
                        {p.domain}
                      </p>
                      <span className={`text-xs border px-2 py-0.5 rounded-full ${status.classes}`}>
                        {status.label}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-neutral-900 leading-snug">{p.name}</p>
                    <p className="text-sm text-neutral-500 mt-0.5">{p.tagline}</p>
                  </div>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs text-neutral-700 border border-neutral-300 px-3 py-1.5 rounded hover:bg-neutral-100 transition-colors"
                  >
                    View details
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Card body */}
                <div className="px-6 py-5 grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">{p.summary}</p>
                    <ul className="space-y-1.5">
                      {p.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="flex gap-3 text-sm text-neutral-600">
                          <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-neutral-400 translate-y-1.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                      {p.highlights.length > 4 && (
                        <li className="text-xs text-neutral-400 pl-4">
                          +{p.highlights.length - 4} more on detail page
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(p.stack).map(([group, items]) => (
                      <div key={group}>
                        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">{group}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item) => (
                            <span key={`${group}:${item}`} className="text-xs border border-neutral-200 bg-white px-2 py-0.5 rounded text-neutral-600">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documents footer */}
                {(p.documents && p.documents.length > 0 || p.diagrams && p.diagrams.length > 0) && (
                  <div className="border-t border-neutral-100 px-6 py-3 flex items-center gap-6 flex-wrap">
                    <p className="text-xs uppercase tracking-widest text-neutral-400">Documents</p>
                    <div className="flex gap-4 flex-wrap items-center">
                      {p.documents && p.documents.map((d) => (
                        <span key={d.label} className="text-xs text-neutral-400">
                          {d.label}
                          {d.note && <span className="text-neutral-300 ml-1">({d.note})</span>}
                        </span>
                      ))}
                      {p.diagrams && p.diagrams.map((d) => (
                        <DiagramViewerButton
                          key={d.label}
                          src={d.src}
                          title={d.label}
                          label={d.label}
                        />
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>

      {/* Section divider */}
      <div className="border-t border-neutral-200 pt-12 mb-10">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
          Selected Professional Work
        </p>
        <p className="text-sm text-neutral-500 max-w-2xl leading-relaxed mb-8">
          Delivered in professional engagements at U.S. Cellular and T-Mobile. Implementation
          details are confidential. Redacted architecture diagrams are available upon request
          via the Contact page.
        </p>
      </div>

      {/* Section 2: Professional work */}
      <div className="space-y-6">
        {professionalWork.map((p) => (
          <div key={p.slug} className="border border-neutral-200 rounded-xl overflow-hidden">

            {/* Card header */}
            <div className="bg-neutral-50 border-b border-neutral-200 px-6 py-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-xs uppercase tracking-widest text-neutral-400">{p.domain}</p>
                  <span className="text-xs border border-neutral-200 bg-white px-2 py-0.5 rounded-full text-neutral-500">
                    Confidential
                  </span>
                </div>
                <p className="text-lg font-semibold text-neutral-900 leading-snug">{p.name}</p>
                <p className="text-sm text-neutral-500 mt-0.5">{p.tagline}</p>
              </div>
              <span className="shrink-0 text-xs text-neutral-400 border border-neutral-200 bg-white px-3 py-1.5 rounded">
                {p.scope}
              </span>
            </div>

            {/* Card body */}
            <div className="px-6 py-5 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">{p.summary}</p>
                <ul className="space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-neutral-600">
                      <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-neutral-400 translate-y-1.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between">
                <div className="border border-neutral-100 rounded-lg px-4 py-4 bg-neutral-50">
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Architecture diagrams
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed mb-3">
                    Redacted versions of architecture diagrams for this engagement are available
                    upon request.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs text-neutral-700 border border-neutral-300 px-3 py-1.5 rounded hover:bg-white transition-colors"
                  >
                    Request diagrams
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </PageShell>
  );
}