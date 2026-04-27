export type Document = {
  label: string;
  href: string;
  note?: string;
};

export type Diagram = {
  label: string;
  description: string;
  src: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  status: "active" | "in-progress" | "planned";
  domain: string;
  stack: Record<string, string[]>;
  overview: string;
  highlights: string[];
  documents?: Document[];
  diagrams?: Diagram[];
};

export const projects: Project[] = [
  {
    slug: "portfolio-platform",
    name: "Portfolio Platform",
    tagline: "Full-stack, cloud-hosted, production-grade",
    domain: "Cloud Architecture / Full-Stack",
    summary:
      "A production-style portfolio site built with Next.js and hosted on AWS. Demonstrates static-first architecture, CDN edge delivery with WAF protection, a fully automated CI/CD pipeline, and operational observability. This site is the project.",
    status: "active",
    overview:
      "Most portfolio sites are just websites. This one is a working demonstration of cloud-native architecture principles applied to a real production workload. Built with Next.js App Router, hosted on S3 with CloudFront edge distribution, and instrumented with CloudWatch for operational visibility. The contact workflow is fully serverless: API Gateway routes submissions through Lambda to SES for delivery. Infrastructure as Code is in progress using Terraform and CloudFormation. Every architectural decision was made the way it would be made in a professional engineering context: availability first, least privilege access, and observable by default.",
    highlights: [
      "Next.js App Router with reusable layout and shell components",
      "CI/CD pipeline: GitHub, CodePipeline, and CodeBuild with automatic deploy on push to main",
      "S3 static hosting with CloudFront CDN edge distribution",
      "Serverless contact workflow: API Gateway, Lambda, SES",
      "CloudWatch alarms publishing to SNS for operational alerting",
      "CloudFront access logs delivered to S3, cataloged in Glue, queried with Athena",
      "IAM least-privilege access model throughout",
    ],
    diagrams: [
      {
        label: "High-Level Architecture",
        description: "Full platform architecture across all 12 components",
        src: "/diagrams/hld-portfolio-platform.png",
      },
      {
        label: "CI/CD Pipeline Architecture",
        description: "End-to-end build and deploy pipeline flow",
        src: "/diagrams/hld-cicd-pipeline.png",
      },
    ],
    stack: {
      aws: ["S3", "CloudFront", "CodePipeline", "CodeBuild", "API Gateway", "Lambda", "SES", "SNS", "CloudWatch", "Glue", "Athena", "WAF"],
      app: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      tooling: ["GitHub", "Git", "VS Code", "Terraform", "CloudFormation"],
      pipeline: ["CI/CD", "CodePipeline", "CodeBuild", "GitHub"],
      practices: ["Serverless", "Static-first", "Least privilege IAM", "Observability", "IaC"],
    },
  },

  {
    slug: "iot-dashboard",
    name: "IoT Operations Dashboard",
    tagline: "Multi-tenant device visibility with weather and outage correlation",
    domain: "IoT / Cloud Architecture / Data",
    summary:
      "A multi-tenant IoT operations dashboard that maps device health, weather conditions, and outage events on a geographic interface. Demonstrates event-driven architecture, multi-tenant data isolation, real-time data ingestion, and operational visibility patterns relevant to enterprise IoT deployments.",
    status: "in-progress",
    overview:
      "Built from 7 years of IoT and M2M pre-sales and architecture experience, this project demonstrates the kind of operational visibility platform that enterprise IoT customers actually need. The dashboard provides a geographic map view of device state, correlates device health with weather data and operator-defined outage events, and supports both a company admin view and a customer-facing view with appropriate data scoping. Phase 1 focuses on the front-end map interface and data visualization. Phase 2 adds device management, analytics, and a separate statistics dashboard. Custom outage definitions are stored in DynamoDB and rendered on the map. Optional SNS notifications alert on threshold breaches. This is not a toy demo. It is designed the way a production IoT operations platform would be designed.",
    highlights: [
      "Geographic map interface showing real-time device state and health",
      "Weather data overlay correlated with device performance",
      "Operator-defined outage zones: custom geometry stored in DynamoDB, rendered on map",
      "Multi-tenant architecture: Company/Admin view and Customer view with scoped data access",
      "Event-driven data ingestion pipeline using EventBridge and Lambda",
      "Optional SNS notification hooks for threshold-based alerting",
      "Phase 2: device management console and statistics dashboard",
    ],
    stack: {
      aws: ["API Gateway", "Lambda", "DynamoDB", "S3", "SNS", "EventBridge", "CloudWatch", "Cognito", "Amplify"],
      app: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Mapping library (TBD)"],
      tooling: ["GitHub", "Terraform", "CloudFormation", "VS Code"],
      practices: ["Multi-tenant", "Event-driven", "Least privilege IAM", "Observability", "IaC"],
    },
    documents: [
      { label: "High-Level Design (HLD)", href: "/docs/iot-dashboard-hld.pdf", note: "Coming soon" },
      { label: "Phase 1 Low-Level Design (LLD)", href: "/docs/iot-dashboard-lld-phase1.pdf", note: "Coming soon" },
      { label: "Phase 2 Low-Level Design (LLD)", href: "/docs/iot-dashboard-lld-phase2.pdf", note: "Coming soon" },
    ],
  },

  {
    slug: "portfolio-ai-assistant",
    name: "Portfolio AI Assistant",
    tagline: "RAG-powered technical Q&A over curated portfolio content",
    domain: "AI / ML / Serverless",
    summary:
      "An AI assistant embedded in this portfolio that answers questions about my background, projects, and technical depth. Built on a retrieval-augmented generation (RAG) pipeline over curated portfolio content, with a serverless inference orchestration pattern and safety controls.",
    status: "planned",
    overview:
      "Purpose-built to demonstrate practical AI agent architecture in a real production context. Rather than a generic chatbot, this assistant is scoped specifically to portfolio content: project documentation, architecture notes, and professional background. The RAG pipeline retrieves relevant content chunks from a vector store before passing context to the model, keeping responses grounded and auditable. The inference workflow is fully serverless: API Gateway routes requests through Lambda to the model API, with CloudWatch logging for every request and response. Safety controls constrain the prompt scope and prevent the assistant from generating content outside its defined boundaries. This is the same architecture pattern used in enterprise AI assistant deployments, applied at portfolio scale.",
    highlights: [
      "RAG pipeline over curated portfolio content: projects, architecture docs, background",
      "Vector store for semantic retrieval (embeddings over structured portfolio data)",
      "Serverless inference orchestration: API Gateway, Lambda, Bedrock or model API",
      "Chat interface embedded into the portfolio site",
      "Safety controls: prompt constraints, content boundaries, request logging",
      "CloudWatch audit trail for all requests and responses",
      "Designed to scale the same pattern to enterprise RAG deployments",
    ],
    stack: {
      aws: ["Bedrock", "Lambda", "API Gateway", "S3", "CloudWatch", "IAM"],
      app: ["React", "TypeScript", "Chat UI component"],
      tooling: ["Vector DB (TBD)", "GitHub", "VS Code"],
      practices: ["RAG", "Prompt engineering", "Safety controls", "Serverless", "Observability"],
    },
    documents: [
      { label: "High-Level Design (HLD)", href: "/docs/portfolio-ai-assistant-hld.pdf", note: "Coming soon" },
      { label: "Low-Level Design (LLD)", href: "/docs/portfolio-ai-assistant-lld.pdf", note: "Coming soon" },
    ],
  },
];