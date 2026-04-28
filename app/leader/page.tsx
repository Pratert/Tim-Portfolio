import PageShell from "../components/PageShell";
import DocumentViewerButton from "../components/DocumentViewerButton";

export default function Page() {
  return (
    <PageShell>

      {/* Page title + positioning statement */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Leadership</p>
        <h1 className="text-4xl font-semibold tracking-tight leading-snug max-w-2xl">
          I lead teams through complexity, change, and high-stakes execution.
        </h1>
        <p className="mt-5 text-lg text-neutral-600 max-w-2xl leading-relaxed">
          My leadership experience spans team operations, technical governance, stakeholder alignment, and talent development across complex engineering environments. 
          I help teams navigate ambiguity, improve execution, and stay aligned when the work carries real operational or customer impact. 
          My approach is consistent: create clarity, remove friction, raise standards, and help people do strong work with confidence.
        </p>
      </div>

      {/* Metrics bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 rounded-2xl overflow-hidden mb-16">
        {[
          { value: "IDPs", label: "Built growth plans to guide progression and promotion" },
          { value: "11–13", label: "Cross-functional team led across solutions engineers, integration engineers, project managers, customer relationship managers, and interns" },
          { value: "2×", label: "Common Purpose Award winner for cross-org collaboration and roadblock removal" },
          { value: "Top graduate", label: "9-month Leadership Academy graduate, top of class" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white px-6 py-5">
            <p className="text-3xl font-semibold tracking-tight text-neutral-900">{stat.value}</p>
            <p className="mt-1 text-xs text-neutral-500 leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Selected leadership outcomes */}
      <div className="mb-16 space-y-4">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-5">Selected Leadership Outcomes</p>
        {[
          {
            heading: "Reduced engineering ticket volume through frontline enablement and automation",
            detail:
              "Led a support model transformation that reduced monthly engineering ticket volume from roughly 2,000 to about 240. Combined frontline enablement, controlled access, targeted training, and provisioning automations to shift repeatable work out of engineering without increasing risk. The result was a more scalable operating model, faster execution, and better use of engineering time for higher-complexity work.",
          },
          {
            heading: "Led end-to-end tiger team for novel MVNO and private cellular enablement",
            detail:
              "Led end-to-end strategy and delivery planning for a standards-aligned LTE integration model enabling MVNOs, private cellular customers, and university partners to interconnect with carrier infrastructure. Coordinated across architecture, legal, and executive stakeholders from technical design through RFx support and acceptance test planning, contributing to 30+ signed contracts with terms of 1–5 years and deal values between $500K and $3M each.",
          },
          {
            heading: "Developed engineers through repeatable frameworks and training",
            detail:
              "Built repeatable training frameworks, onboarding materials, and individualized development plans that helped engineers ramp faster, operate more consistently, and expand into higher-value work. Standardized how teams evaluated complex customer environments and translated tribal knowledge into usable operational playbooks that others could follow with confidence.",
          },
        ].map((item) => (
          <div key={item.heading} className="border-l-2 border-neutral-900 pl-5 py-1">
            <p className="font-medium text-neutral-900">{item.heading}</p>
            <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Operating framework */}
      <div className="mb-4">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Operating Framework</p>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Team Development*/}
          <div>
            <p className="text-sm font-semibold text-neutral-900 mb-3">Team Development</p>
            <ul className="space-y-2">
              {[
                "Led day-to-day operations of an 11–13 person cross-functional team: solutions engineers, integration engineers, project managers, customer relationship managers, and interns.",
                "Directly mentored senior engineers and created a structured model where senior engineers helped develop more junior team members, extending mentorship beyond one-to-one coaching.",
                "Established a monthly cadence for principal and lead engineers across multiple teams and domains to surface gating items, align engineering and business priorities, and map out practical paths to resolution.",
                "Created 90-day onboarding and training plans adopted organization-wide across multiple teams.",
                "Built individualized development plans (IDPs) to map promotion and progression paths for team members.",
                "Diagnosed skill vs. will gaps and set measurable milestones to close them.",
                "Built repeatable frameworks so any engineer on the team could execute reliably and independently.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-neutral-600">
                  <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-neutral-400 translate-y-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
          </div>
            <DocumentViewerButton
              pages={[
                "/docs/90_day_IDP_example_Page_1.png",
                "/docs/90_day_IDP_example_Page_2.png",
                "/docs/90_day_IDP_example_Page_3.png",
                "/docs/90_day_IDP_example_Page_4.png",
                "/docs/90_day_IDP_example_Page_5.png",
                "/docs/90_day_IDP_example_Page_6.png",
                "/docs/90_day_IDP_example_Page_7.png",
              ]}
              title="90-Day IDP Example (Redacted)"
              label="View sample IDP (redacted)"
              thumbnail
            />
          {/* Cross-functional Tiger Teams */}
          <div>
            <p className="text-sm font-semibold text-neutral-900 mb-3">Cross-functional Tiger Teams</p>
            <ul className="space-y-2">
              {[
                "Led cross-functional tiger teams composed of Operations, Engineering, Architecture, Security, Legal, and Product to pursue novel business objectives and remove structural blockers.",
                "Known across Sales and business leadership as the go-to engineer for understanding and removing technical roadblocks, informally called the \"easy button\" by engineering leadership.",
                "Operated comfortably at the intersection of deep technical detail and business execution, bridging conversations from engineering teams to C-suite stakeholders.",
                "2× winner of the Common Purpose Award for collaborating across organizational and industry boundaries to unblock business outcomes.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-neutral-600">
                  <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-neutral-400 translate-y-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Incident Leadership */}
          <div>
            <p className="text-sm font-semibold text-neutral-900 mb-3">Incident Leadership</p>
            <ul className="space-y-2">
              {[
                "Ran structured war room operations, assigning roles within minutes of major incident declaration and major platform events.",
                "Set a regular update cadence with a running hypothesis log to maintain alignment across engineering and senior leadership.",
                "Separated mitigation from root cause and pursued both tracks in parallel to reduce business impact without sacrificing analysis quality.",
                "Authored post-incident RCAs and prevention plans that drove lasting operational improvements.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-neutral-600">
                  <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-neutral-400 translate-y-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance and Change Rigor */}
          <div>
            <p className="text-sm font-semibold text-neutral-900 mb-3">Governance and Change Rigor</p>
            <ul className="space-y-2">
              {[
                "Led the Technical Review Board for high-risk changes: peer review and rollback plan required before approval.",
                "Established operational acceptance criteria for go-live decisions: load, failover, and monitoring validation required before production.",
                "Worked within architecture and governance approaches aligned to TOGAF and the AWS Well-Architected Framework to guide design decisions, risk management, and production readiness.",
                "Built delivery governance artifacts, LLDs, acceptance test plans, implementation guides, that reduced downstream risk and improved handoff quality across teams.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-neutral-600">
                  <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-neutral-400 translate-y-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Executive Communication */}
          <div>
            <p className="text-sm font-semibold text-neutral-900 mb-3">Executive Communication</p>
            <ul className="space-y-2">
              {[
                "Translated technical uncertainty into business impact and clear decision options for senior and C-suite stakeholders.",
                "Maintained short, structured updates during high-stakes situations: status, impact, confidence level, asks, and next checkpoint.",
                "Escalated early and without hesitation when risk was rising, no surprises as a leadership principle.",
                "Trusted to represent engineering in customer-facing presentations, contract discussions, and executive strategy sessions.",
                "Leadership Academy graduate, top of class, U.S. Cellular 9-month leadership development program. 2× Common Purpose Award winner.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-neutral-600">
                  <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-neutral-400 translate-y-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </PageShell>
  );
}