"use client";

import PageShell from "../components/PageShell";
import { useState } from "react";

const domains = [
  {
    id: "mobile-core",
    era: "2006 - 2017",
    label: "Mobile Core and Carrier Infrastructure",
    depth: "Hands-on operational",
    summary:
      "Carrier-grade production operations across LTE, EPC, and legacy mobile core platforms. Deep familiarity with the signaling, transport, and support workflows that keep nationwide wireless services running.",
    skills: [
      "LTE / EPC architecture (SGW, PGW, MME, HSS)",
      "5G core (5GC) concepts and transition planning",
      "Diameter and GTP-U/C signaling",
      "SS7, HLR, VLR, SMSC, MMSC",
      "APN design and roaming architecture",
      "MVNO enablement and carrier interconnect",
      "24x7 Tier 4 incident response and war room leadership",
      "Packet-level analysis: Wireshark, PCAP, protocol traces",
      "NetAct, Netcool, Netscout, Spirent",
      "Vendor environments: Nokia, Ericsson, Mavenir, Oracle, Affirmed",
    ],
  },
  {
    id: "networking",
    era: "2014 - Present",
    label: "Networking and Security",
    depth: "Hands-on operational",
    summary:
      "End-to-end IP networking across carrier and enterprise environments. Comfortable at the CLI and equally comfortable designing the architecture on a whiteboard for a customer executive.",
    skills: [
      "Cisco IOS routing and switching",
      "IPv4, TCP/IP, UDP, DNS, DHCP, NAT",
      "OSPF, BGP, MPLS, Segment Routing, VRF, VLAN",
      "GRE and IPsec tunnel design",
      "ACLs, QoS, VPN, network segmentation",
      "Firewall: Palo Alto, Fortinet",
      "Load balancing: F5",
      "Defense in depth and principle of least privilege",
      "NIST-based security practices",
      "Access controls, VPC design, zero trust concepts",
    ],
  },
  {
    id: "private-wireless",
    era: "2017 - Present",
    label: "Private Wireless and IoT",
    depth: "Architecture and pre-sales",
    summary:
      "End-to-end private LTE and 5G solution architecture for enterprise, utility, government, and MVNO customers. One of the more specialized skill sets on this page and one of the rarer ones in the market.",
    skills: [
      "Private LTE and private 5G network design",
      "On-premises and AWS-hosted LTE core models",
      "3GPP and GSMA standards alignment",
      "Roaming strategy and failover design",
      "MVNO interconnect and peering architecture",
      "IoT and M2M solution architecture",
      "API and interface integration for connected devices",
      "Provisioning workflows and activation flows",
      "Acceptance Test Plan development",
      "Vendor environments: Nokia, Ericsson, Cradlepoint, Thales",
    ],
  },
  {
    id: "cloud",
    era: "2019 - Present",
    label: "Cloud Architecture and Automation",
    depth: "Architecture and build",
    summary:
      "AWS-native architecture for customer-facing solutions, internal operational tooling, and portfolio projects. Comfortable moving from whiteboard to deployed infrastructure.",
    skills: [
      "Amazon API Gateway, Lambda, DynamoDB, S3",
      "Amazon SNS, SES, EventBridge, Cognito",
      "IAM, CloudWatch, Amplify",
      "Multi-tenant SaaS application architecture",
      "Event-driven and serverless design patterns",
      "VPC design, security groups, access controls",
      "Infrastructure as Code: Terraform, CloudFormation",
      "Python scripting and automation logic",
      "CI/CD concepts and deployment pipelines",
      "Microsoft Power Platform: Power Apps, Power Automate, SharePoint",
    ],
  },
  {
    id: "data",
    era: "2012 - 2014",
    label: "Data Engineering and Integration",
    depth: "Hands-on build",
    summary:
      "Foundational data engineering experience across enterprise data warehouses, ETL pipelines, and operational data stores. This role built the analytical and systems-thinking muscle that underpins everything else.",
    skills: [
      "SQL and PL/SQL",
      "ETL development: Informatica, Talend",
      "Oracle, Hadoop, MongoDB",
      "Data migration and cleansing",
      "Data modeling and warehouse design",
      "Python and R for data analysis",
      "SDLC and Agile delivery",
      "Production support and defect isolation",
    ],
  },
  {
    id: "architecture",
    era: "2017 - Present",
    label: "Solution Architecture and Delivery",
    depth: "Principal-level ownership",
    summary:
      "The connective tissue across every domain. Translating customer requirements into architecture that is secure, resilient, and actually deliverable. This is where technical depth meets business execution.",
    skills: [
      "High-level design (HLD) and low-level design (LLD)",
      "TOGAF-aligned architecture standards",
      "RFP, RFI, and RFQ technical authorship",
      "Proof-of-concept scoping and pilot design",
      "Scope of work and statement of work development",
      "Professional services portfolio design",
      "Cross-functional delivery governance",
      "Technical review board ownership",
      "Operational readiness and go-live criteria",
      "Post-acquisition migration planning and execution",
    ],
  },
];

const credentials = [
  {
    type: "Academic",
    items: [
      "Master of Science, Information Technology Network Management",
      "Bachelor of Science, Computer and Information Systems Security",
      "Associate of Applied Science, Computer Networking Systems",
    ],
  },
  {
    type: "Certifications (previously held)",
    items: [
      "Cisco Certified Network Professional (CCNP)",
      "Alcatel-Lucent Network Routing Specialist I",
    ],
  },
  {
    type: "Recognition",
    items: [
      "Leadership Academy graduate, top of class — U.S. Cellular 9-month program",
      "Common Purpose Award, 2x winner",
      "Consistently rated Exceeds Expectations or Far Exceeds Expectations",
    ],
  },
];

export default function Page() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <PageShell>
      {/* Header: intentionally different from PageHeader component */}
      <div className="mb-16 max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
          Technical Expertise
        </p>
        <h1 className="text-4xl font-semibold tracking-tight leading-snug mb-5">
          Depth across domains. Built through doing, not just designing.
        </h1>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Most engineers go deep in one area. My career required going deep in several: mobile core
          operations, carrier networking, private wireless architecture, cloud-native development,
          data engineering, and enterprise solution design. Each role added a layer. None of them
          left.
        </p>
        <p className="text-neutral-600 leading-relaxed">
          The domains below are not a keyword list. Each one represents real operational or
          build experience: production incidents, customer deployments, architecture reviews,
          and delivery outcomes. Select any domain to see the depth behind it.
        </p>
      </div>

      {/* Domain grid: dark-background section for contrast */}
      <div className="mb-16 -mx-6 px-6 py-10 bg-neutral-900 rounded-2xl">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
          Technical Domains
        </p>

        {/* Domain selector row */}
        <div className="grid md:grid-cols-3 gap-3 mb-8">
          {domains.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive(active === d.id ? null : d.id)}
              className={`text-left px-4 py-4 rounded-xl border transition-all duration-200 ${
                active === d.id
                  ? "bg-white text-neutral-900 border-white"
                  : "bg-neutral-800 text-neutral-300 border-neutral-700 hover:border-neutral-500 hover:text-white"
              }`}
            >
              <p className="text-xs font-mono text-neutral-500 mb-1"
                style={{ color: active === d.id ? "#9ca3af" : undefined }}>
                {d.era}
              </p>
              <p className="text-sm font-semibold leading-snug mb-1">{d.label}</p>
              <p className={`text-xs ${active === d.id ? "text-neutral-500" : "text-neutral-600"}`}>
                {d.depth}
              </p>
            </button>
          ))}
        </div>

        {/* Expanded domain detail */}
        {active && (() => {
          const d = domains.find((x) => x.id === active)!;
          return (
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <p className="text-xs font-mono text-neutral-500 mb-1">{d.era}</p>
                  <p className="text-base font-semibold text-white mb-2">{d.label}</p>
                  <span className="inline-block text-xs text-neutral-400 border border-neutral-600 rounded px-2 py-0.5 mb-4">
                    {d.depth}
                  </span>
                  <p className="text-sm text-neutral-400 leading-relaxed">{d.summary}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
                    Technologies, platforms, and methods
                  </p>
                  <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                    {d.skills.map((skill) => (
                      <li key={skill} className="flex gap-2 text-sm text-neutral-300">
                        <span className="text-neutral-600 shrink-0 font-mono">--</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })()}

        {!active && (
          <p className="text-xs text-neutral-600 text-center py-4">
            Select a domain above to explore the depth behind it.
          </p>
        )}
      </div>

      {/* Operational tools callout */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          Operational and Diagnostic Tooling
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Wireshark", "PCAP analysis", "Netcool", "Netscout", "Spirent",
            "Cisco CLI", "Linux / Unix", "F5", "Palo Alto", "Fortinet",
            "NetAct", "Remedy / BMC", "SNMP", "NetFlow", "SSH / SFTP",
            "Python", "Git", "AWS CLI", "Terraform", "CloudFormation",
            "Power Apps", "Power Automate", "SharePoint", "VS Code",
          ].map((tool) => (
            <span
              key={tool}
              className="text-xs font-mono text-neutral-600 bg-neutral-100 border border-neutral-200 rounded px-2.5 py-1"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Vendor exposure */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          Vendor Exposure
        </p>
        <div className="grid md:grid-cols-2 gap-px bg-neutral-200 rounded-xl overflow-hidden">
          {[
            { category: "Telecom and Core", vendors: "Nokia, Ericsson, Mavenir, Oracle, Affirmed Networks, Alcatel-Lucent" },
            { category: "Networking and Security", vendors: "Cisco, Palo Alto, Fortinet, F5, Cradlepoint" },
            { category: "Cloud and Platforms", vendors: "AWS, Microsoft Azure (Power Platform), SharePoint" },
            { category: "IoT and Edge", vendors: "Thales, Innopath, Cradlepoint" },
          ].map((v) => (
            <div key={v.category} className="bg-white px-6 py-5">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">{v.category}</p>
              <p className="text-sm text-neutral-700">{v.vendors}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials: academic, certs, recognition */}
      <div className="mb-4">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">
          Credentials and Recognition
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((c) => (
            <div key={c.type}>
              <p className="text-sm font-semibold text-neutral-900 mb-3">{c.type}</p>
              <ul className="space-y-2">
                {c.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-neutral-600">
                    <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-neutral-400 translate-y-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </PageShell>
  );
}
