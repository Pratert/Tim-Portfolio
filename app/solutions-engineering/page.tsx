import PageShell from "../components/PageShell";
import PageHeader from "../components/PageHeader";

const engagementStages = [
  {
    stage: "01",
    title: "Technical Discovery",
    description:
      "Lead structured discovery sessions to surface the real requirements behind the stated ones. Map customer environments, identify integration constraints, and expose the gaps that kill deals late.",
  },
  {
    stage: "02",
    title: "Architecture and Design",
    description:
      "Translate discovery findings into HLDs and LLDs that are delivery-ready, not just presentation-ready. Every design accounts for security, failover, operational handoff, and the edge cases sales does not know to ask about.",
  },
  {
    stage: "03",
    title: "RFx Ownership",
    description:
      "Author technical responses to RFPs, RFIs, and RFQs that win. Translate customer, regulatory, and security requirements into solution narratives with full compliance mappings, implementation assumptions, and risk callouts.",
  },
  {
    stage: "04",
    title: "Stakeholder Alignment",
    description:
      "Carry the technical conversation across the full stakeholder map: from the customer network engineer validating feasibility to the VP signing the contract. Adjust depth and framing without losing accuracy.",
  },
  {
    stage: "05",
    title: "Delivery Governance",
    description:
      "Own the handoff. Create acceptance test plans, implementation guides, and operational readiness criteria so what was sold is actually what gets built and supported.",
  },
];

const scenarios = [
  {
    vertical: "Private Wireless and MVNO",
    situation:
      "An MVNO aggregator needed a standards-aligned LTE interconnect model that would let universities, private cellular operators, and enterprise customers leverage carrier roaming and peering agreements without a custom architecture for every customer.",
    constraints:
      "No repeatable blueprint existed. Each deal was being scoped from scratch, slowing the sales cycle and creating delivery inconsistency. Legal, architecture, and engineering all had different assumptions about what was actually being sold.",
    contribution:
      "Led end-to-end architecture and delivery planning for a 3GPP and GSMA-compliant integration model supporting both AWS-hosted and on-premises LTE core configurations across Nokia, Ericsson, and third-party environments. Drove alignment from technical strategy through executive sign-off and created a reusable acceptance test plan that could scale across customers.",
    outcome:
      "30+ signed contracts with terms of 1 to 5 years and deal values between $500K and $3M each.",
  },
  {
    vertical: "Enterprise and Utility Connectivity",
    situation:
      "Large enterprise and utility customers needed private wireless solutions with secure, segmented connectivity to carrier infrastructure, high-availability failover, and integration into existing on-premises environments.",
    constraints:
      "Customers came with partial requirements, mixed vendor environments, and security and compliance mandates that had to be met without slowing the sales cycle. Solutions engineers were being pulled into late-stage firefighting instead of shaping deals early.",
    contribution:
      "Served as primary technical SME across discovery, architecture, and executive presentation for high-priority accounts. Designed GRE and IPsec tunnel architectures, APN segmentation models, and failover strategies. Built internal SaaS-style tracking and communication tooling using AWS to reduce manual overhead and improve visibility for both engineering and sales.",
    outcome:
      "Influenced more than $10M annually in new business as principal technical author across RFP, RFI, and RFQ responses.",
  },
  {
    vertical: "IoT and M2M Integration",
    situation:
      "Enterprise customers needed connected device solutions that spanned carrier network integration, platform onboarding, API and interface design, provisioning workflows, and ongoing operational support.",
    constraints:
      "IoT deals routinely stalled at the integration design phase because customers lacked internal engineering depth to validate feasibility. Proposals that looked clean on the surface had hidden activation, provisioning, and support gaps that surfaced post-sale.",
    contribution:
      "Led technical discovery and LLD development for solutions spanning activation flows, API integration, secure connectivity, and provisioning automation. Applied NIST-based security practices and defense-in-depth principles to designs. Produced customer-facing architecture walk-throughs that clarified constraints and de-risked implementation for both technical and non-technical stakeholders.",
    outcome:
      "Reduced post-sale delivery risk and defect rates by surfacing integration gaps at the design stage rather than during implementation.",
  },
];

const salesCycleValue = [
  {
    phase: "Early Discovery",
    value:
      "Surface the requirements the customer does not know how to articulate. Identify deal-killing constraints before they become surprises at contract review.",
  },
  {
    phase: "Technical Qualification",
    value:
      "Evaluate feasibility honestly. Know when a solution fits, when it needs to be shaped, and when to walk away before the company overcommits.",
  },
  {
    phase: "Proposal and RFx",
    value:
      "Write technical content that wins. Compliance matrices, solution narratives, implementation assumptions, and risk callouts that give evaluators confidence.",
  },
  {
    phase: "Executive Presentation",
    value:
      "Translate architecture into business outcomes. Present to technical evaluators and C-suite stakeholders in the same session without losing either audience.",
  },
  {
    phase: "POC and Pilot Scoping",
    value:
      "Design proof-of-concept engagements that validate the right things. Define success criteria up front so pilots convert to contracts.",
  },
  {
    phase: "Delivery Handoff",
    value:
      "Create the artifacts that bridge pre-sales and delivery: acceptance test plans, LLDs, implementation guides, and operational readiness criteria.",
  },
];

export default function Page() {
  return (
    <PageShell>
      <PageHeader
        title="I close the gap between what engineering builds and what the business needs to win."
        subtitle="19 years of carrier-grade technical depth applied to the full solutions and pre-sales lifecycle: from first discovery call through signed contract and delivery handoff."
      />

      {/* Positioning statement */}
      <div className="mb-16 max-w-2xl">
        <p className="text-neutral-600 leading-relaxed mb-4">
          Most engineers can design a solution. Most salespeople can describe one. The gap between
          those two things is where deals slow down, proposals miss the mark, and customers lose
          confidence. I operate in that gap by design.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-4">
          My background spans mobile core engineering, LTE and 5G architecture, IoT and M2M
          integration, private wireless, and cloud-connected enterprise solutions. That depth is not
          incidental. It is what allows me to lead discovery sessions that surface the real
          constraints, write RFP responses that win, design architectures that survive delivery, and
          present to a VP of Engineering and a CFO in the same room without losing either one.
        </p>
        <p className="text-neutral-600 leading-relaxed">
          I have served as the principal technical author on responses that influenced more than
          $10M annually in business, led cross-functional tiger teams to bring new solution
          offerings to market, and built the internal tools, runbooks, and governance frameworks
          that made the delivery side match the promise made in the proposal.
        </p>
      </div>

      {/* How I engage: process flow */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          How I Engage Across the Sales and Delivery Lifecycle
        </p>
        <div className="grid md:grid-cols-5 gap-px bg-neutral-200 rounded-xl overflow-hidden">
          {engagementStages.map((s) => (
            <div key={s.stage} className="bg-white p-5">
              <p className="text-xs font-mono text-neutral-400 mb-2">{s.stage}</p>
              <p className="text-sm font-semibold text-neutral-900 mb-2">{s.title}</p>
              <p className="text-xs text-neutral-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Deal scenarios */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          Representative Engagement Scenarios
        </p>
        <div className="space-y-6">
          {scenarios.map((s) => (
            <div key={s.vertical} className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-neutral-50 border-b border-neutral-200 px-6 py-3">
                <p className="text-sm font-semibold text-neutral-900">{s.vertical}</p>
              </div>
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
                <div className="px-6 py-5">
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Situation and Constraints
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-3">{s.situation}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed italic">{s.constraints}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    What I Brought
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{s.contribution}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Outcome
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{s.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Where I add value in a sales cycle */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          Where I Add Value in a Sales Cycle
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {salesCycleValue.map((item) => (
            <div key={item.phase} className="flex gap-4">
              <div className="shrink-0 w-px bg-neutral-300 self-stretch" />
              <div className="pb-4">
                <p className="text-sm font-semibold text-neutral-900 mb-1">{item.phase}</p>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What I have built to support the motion */}
      <div className="mb-4">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          Artifacts and Infrastructure I Have Built to Support the Sales and Delivery Motion
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-neutral-200 rounded-xl overflow-hidden">
          {[
            {
              title: "RFx Response Library",
              body: "Authored winning technical responses across RFP, RFI, and RFQ formats. Built reusable solution narratives, compliance mappings, and technical assumption frameworks that shortened response cycles and improved proposal quality.",
            },
            {
              title: "Professional Services Portfolio",
              body: "Designed a portfolio of repeatable consulting, audit, architecture assessment, and security assessment offerings. Created scope language, delivery framing, and customer-facing collateral supporting engagements valued at $250K to $700K.",
            },
            {
              title: "Onboarding and Training Programs",
              body: "Built 90-day onboarding plans and technical training programs adopted organization-wide. Developed runbooks and solution delivery guides so pre-sales commitments translated into consistent, predictable delivery outcomes.",
            },
            {
              title: "Internal SaaS Tooling",
              body: "Architected a multi-tenant SaaS-style tracking platform using AWS (API Gateway, Lambda, DynamoDB, Cognito) to manage white-glove customer engagements, onboarding status, and delivery milestones across enterprise accounts.",
            },
            {
              title: "Notification and Review Platform",
              body: "Built a multi-tenant customer notification and review platform using Microsoft Power Platform to ingest engineering work requests, manage internal validation workflows, and generate standardized customer communications at scale.",
            },
            {
              title: "Acceptance Test Plans and LLDs",
              body: "Created detailed low-level designs and acceptance test plans for private wireless, MVNO, and enterprise connectivity solutions. These artifacts bridged the pre-sales and delivery boundary and reduced downstream risk significantly.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white px-6 py-5">
              <p className="text-sm font-semibold text-neutral-900 mb-2">{item.title}</p>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

    </PageShell>
  );
}
