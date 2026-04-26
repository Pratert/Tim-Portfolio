import PageShell from "../components/PageShell";
import PageHeader from "../components/PageHeader";

// TODO: Wire up PDF viewer when AWS infrastructure is ready.
// Steps needed:
// 1. Create a private S3 bucket for training PDFs (separate from the site bucket)
// 2. Upload PDFs to S3 at paths defined in the API route MODULE_MAP
// 3. Create IAM user/role with GetObject permission scoped to that bucket only
// 4. Add environment variables: AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, TRAINING_BUCKET_NAME
// 5. Install @aws-sdk/s3-request-presigner: npm install @aws-sdk/s3-request-presigner
// 6. Add API route at app/api/training-url/route.ts (file already built: training-url-api-route.ts)
// 7. Add viewer page at app/training/[moduleId]/page.tsx (file already built: training-viewer-page.tsx)
// 8. Replace the "Coming soon" buttons below with the "View module" links (commented out below each module)

const modules = [
  {
    id: "routing-switching",
    category: "Networking Fundamentals",
    title: "Fundamentals of Routing and Switching",
    audience: "Junior to mid-level engineers new to IP networking",
    description:
      "A ground-up introduction to how data actually moves across networks. Built for engineers who work adjacent to networking every day but have never had a structured foundation to stand on. Covers the concepts that experienced engineers assume everyone already knows.",
    topics: [
      "OSI model and where things actually break",
      "Ethernet, VLANs, and Layer 2 switching behavior",
      "IP addressing, subnetting, and VLSM",
      "Routing fundamentals: static routes, OSPF, BGP concepts",
      "NAT, ACLs, and basic traffic control",
      "Common troubleshooting patterns and where to start",
    ],
    format: "Slide deck with instructor notes",
    length: "Multi-module, self-paced or instructor-led",
  },
  {
    id: "telecom-evolution",
    category: "Telecom Architecture",
    title: "Evolution of Telecommunications",
    audience: "Engineers and solutions professionals entering the telecom or private wireless space",
    description:
      "A structured walk through how mobile networks evolved from analog voice to 5G and private wireless. Built for engineers who need to understand the why behind modern telecom architecture, not just the what. Covers the decisions and tradeoffs that shaped the current landscape.",
    topics: [
      "1G through 5G: what actually changed and why",
      "Circuit-switched vs. packet-switched architecture",
      "LTE and EPC core components and signaling flows",
      "5G core architecture and the move to cloud-native",
      "Private LTE and private 5G: use cases and design considerations",
      "MVNO models and carrier interconnect concepts",
    ],
    format: "Slide deck with instructor notes",
    length: "Multi-module, self-paced or instructor-led",
  },
];

export default function Page() {
  return (
    <PageShell>
      <PageHeader
        title="Training and Consultation"
        subtitle="Practical technical training built from 19 years of operational and pre-sales experience, designed for engineers who need to close gaps fast and build confidence doing it."
      />

      {/* Positioning statement */}
      <div className="mb-16 max-w-2xl">
        <p className="text-neutral-600 leading-relaxed mb-4">
          The best training I ever received came from engineers who had actually done the work,
          not from courses designed around a certification exam. That is the standard I held
          myself to when I built training programs at U.S. Cellular, and it is the standard
          these materials reflect.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-4">
          The modules below were built for real engineers facing real gaps: junior engineers who
          needed a foundation to stand on, solutions professionals who needed to understand the
          telecom landscape they were selling into, and technical teams who needed to present
          their work with more confidence. The 90-day onboarding plans and individualized
          development programs built around these materials were adopted organization-wide across
          multiple teams.
        </p>
        <p className="text-neutral-600 leading-relaxed">
          Module viewing will be available shortly. If you are interested in licensing materials
          or discussing a consulting engagement in the meantime, use the Contact page.
        </p>
      </div>

      {/* How I approach training */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          How I Approach Technical Training
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-neutral-200 rounded-xl overflow-hidden">
          {[
            {
              principle: "Start with the why",
              body: "Engineers retain more when they understand why something works the way it does, not just how to configure it. Every module leads with context before mechanics.",
            },
            {
              principle: "Build on what they already know",
              body: "Good training meets people where they are. I diagnose the actual gap before designing the content, so nobody spends three hours covering things they already understand.",
            },
            {
              principle: "Make it immediately useful",
              body: "Every module connects directly to work the engineer is already doing or will do soon. Abstract concepts are anchored to real scenarios from production and pre-sales environments.",
            },
          ].map((item) => (
            <div key={item.principle} className="bg-white px-6 py-5">
              <p className="text-sm font-semibold text-neutral-900 mb-2">{item.principle}</p>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Training modules */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          Training Modules
        </p>
        <div className="space-y-6">
          {modules.map((m) => (
            <div key={m.id} className="border border-neutral-200 rounded-xl overflow-hidden">

              {/* Module header */}
              <div className="bg-neutral-50 border-b border-neutral-200 px-6 py-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                    {m.category}
                  </p>
                  <p className="text-base font-semibold text-neutral-900">{m.title}</p>
                </div>

                {/* TODO: Replace this span with the anchor tag below once AWS viewer is wired up */}
                <span className="shrink-0 text-xs text-neutral-400 border border-neutral-200 px-3 py-1.5 rounded">
                  Coming soon
                </span>

                {/* FUTURE: Uncomment this and remove the span above when viewer is ready
                <a
                  href={`/training/${m.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 text-xs text-blue-700 border border-blue-700 px-3 py-1.5 rounded hover:bg-blue-50 transition-colors"
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
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View module
                </a>
                */}
              </div>

              {/* Module body */}
              <div className="px-6 py-5">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                        Designed for
                      </p>
                      <p className="text-sm text-neutral-600">{m.audience}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                        Format
                      </p>
                      <p className="text-sm text-neutral-600">{m.format}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                        Length
                      </p>
                      <p className="text-sm text-neutral-600">{m.length}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                      {m.description}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
                      Topics covered
                    </p>
                    <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                      {m.topics.map((topic) => (
                        <li key={topic} className="flex gap-3 text-sm text-neutral-600">
                          <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-neutral-400 translate-y-1.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          ))}

          {/* Coming soon placeholder card */}
          <div className="border border-neutral-200 rounded-xl overflow-hidden opacity-50">
            <div className="bg-neutral-50 border-b border-neutral-200 px-6 py-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                  More modules
                </p>
                <p className="text-base font-semibold text-neutral-900">
                  Additional modules in development
                </p>
              </div>
              <span className="shrink-0 text-xs text-neutral-400 border border-neutral-200 px-3 py-1.5 rounded">
                Coming soon
              </span>
            </div>
            <div className="px-6 py-5">
              <p className="text-sm text-neutral-500 leading-relaxed">
                Additional modules covering junior engineer onboarding fundamentals, pre-sales and
                solutions engineering practices, and presentation skills for technical engineers
                are in development.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Consulting signal */}
      <div className="mb-4 border border-neutral-200 rounded-xl px-6 py-6 max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
          Consulting Availability
        </p>
        <p className="text-sm font-semibold text-neutral-900 mb-2">
          Telecom architecture guidance and engineer upskilling
        </p>
        <p className="text-sm text-neutral-600 leading-relaxed mb-4">
          I take a limited number of consulting engagements focused on two areas: telecom and
          private wireless architecture guidance for organizations evaluating or deploying private
          cellular, and junior to mid-level engineer upskilling for solutions and pre-sales teams
          that need to build technical depth fast. If either of those fits a problem you are
          trying to solve, reach out via the Contact page.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-700 border border-neutral-300 px-3 py-1.5 rounded hover:bg-neutral-50 transition-colors"
        >
          Get in touch
        </a>
      </div>

    </PageShell>
  );
}
