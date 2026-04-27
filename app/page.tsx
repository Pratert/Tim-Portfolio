import Image from "next/image";

const roles = [
  "Principal Solutions Architect",
  "Principal Engineer",
  "Engineering Manager",
  "Director of Engineering",
];

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-14 pb-24">

      <div className="grid gap-12 md:grid-cols-[200px_1fr] md:items-start">

        {/* Left col: photo + identity */}
        <div>
          <Image
            src="/tim.jpg"
            alt="Timothy (Tim) Prater"
            width={200}
            height={200}
            className="rounded-2xl"
            priority
          />
          <p className="mt-4 text-sm font-semibold" style={{ color: "var(--foreground)" }}>
            Timothy (Tim) Prater
          </p>
          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            Knoxville, TN - Remote
          </p>

          <div className="mt-4 space-y-1">
            {roles.map((r) => (
              <p key={r} className="text-xs" style={{ color: "var(--text-muted)" }}>
                {r}
              </p>
            ))}
          </div>

          <div
            className="mt-6"
            style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1rem" }}
          >
            <a
              href="/Tim_Prater_CV.pdf"
              download="Tim_Prater_CV.pdf"
              className="text-xs font-medium"
              style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Download full CV
            </a>
            <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              A shortened, tailored resume is available for specific positions.
            </p>
          </div>
        </div>

        {/* Right col: positioning */}
        <div>
          <h1 className="text-4xl font-semibold tracking-tight leading-snug max-w-2xl">
            19 years of engineering depth. The range to match.
          </h1>

          <div
            className="mt-6 space-y-4 text-base leading-relaxed"
            style={{ color: "#3a3936" }}
          >
            <p>
              I started where most engineers start: deep in the work. Mobile core operations,
              LTE network engineering, IP routing and switching, data pipelines, and systems
              integration across telecom, cloud, and enterprise environments. I was the person
              who understood how things actually worked, not just how they were documented.
            </p>
            <p>
              Over time the work expanded. I moved into architecture, pre-sales, and technical strategy, 
              leading RFP responses that influenced $10M+ in annual business, designing private wireless and cloud-connected solutions for enterprise and government accounts, 
              and serving as the senior technical voice in rooms where architecture decisions actually got made.
            </p>
            <p>
              The through line across all of it is the ability to operate at both ends: deep enough to know when an architecture has a real problem, and senior enough to translate that into something a VP or a client can act on. 
              I have built delivery frameworks from scratch, and taken on the ambiguous work that falls between org chart boxes.
            </p>
            <p>
              Along the way I built and led teams, wrote training programs, created governance
              frameworks, and developed engineers who went on to take on bigger roles themselves.
              I care about building people the same way I care about building systems: with
              intention, with clear standards, and with an eye toward what comes next.
            </p>
            <p style={{ color: "var(--text-muted)" }}>
              Targeting principal engineering, architecture, and engineering leadership roles
              where technical depth, business impact, and people leadership all matter. Based
              in Knoxville, TN and open to remote.
            </p>
          </div>

          {/* Divider */}
          <div
            className="mt-8 mb-6"
            style={{ height: "1px", background: "var(--border-color)" }}
          />

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "Technical depth", label: "19+ Years leading work in production engineering environments" },
              { value: "Business results", label: "Signed contracts, $500K to $3M each" },
              { value: "Operational scale", label: "Annual ticket volume reduction via frontline enablement and automation" },
              { value: "Leadership impact", label: "Cross-functional team leadership across engineering and operations and customer-facing roles" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-2xl font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  {s.value}
                </p>
                <p
                  className="mt-1 text-xs leading-snug"
                  style={{ color: "var(--text-muted)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Technical domains */}
          <div className="mt-8">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Technical Domains
            </p>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {[
                { label: "Telecom and Private Wireless", sub: "LTE, 5G, EPC, private cellular, MVNO, IoT/M2M" },
                { label: "Cloud Architecture", sub: "AWS, serverless, event-driven, IaC" },
                { label: "Networking and Security", sub: "IP routing, BGP, OSPF, IPsec, segmentation" },
                { label: "Systems Integration", sub: "API design, ETL, data pipelines, CI/CD" },
                { label: "Observability and Operations", sub: "CloudWatch, monitoring, incident response" },
                { label: "Solutions and Presales", sub: "RFP/RFI, HLD/LLD, architecture assessments" },
              ].map((d) => (
                <div
                  key={d.label}
                  className="rounded-lg p-3"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <p className="text-xs font-medium" style={{ color: "var(--foreground)" }}>
                    {d.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {d.sub}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs" style={{ color: "var(--text-muted)" }}>
              For a full listing of technologies, platforms, and tools see the{" "}
              <a
                href="/technology"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Technical Expertise
              </a>{" "}
              page.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}