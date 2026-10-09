export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
};

export type Author = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  social?: {
    label: string;
    href: string;
  }[];
};

export type ArticleSection = {
  heading?: string;
  headingLevel?: 2 | 3;
  paragraphs?: string[];
  list?: string[];
  orderedList?: string[];
  table?: { headers: string[]; rows: string[][] };
  blockquote?: string;
  code?: string;
  links?: { label: string; href: string }[];
};

export type ArticleSource = {
  title: string;
  url: string;
  publisher: string;
};

/**
 * Editorial workflow state. Only `published` content may appear on the public
 * site. Keep preview access server-only; never expose this control through a
 * `NEXT_PUBLIC_` variable.
 */
export type PublicationStatus = "draft" | "editorial-review-required" | "approved" | "published";

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  authorSlug: string;
  author: string;
  featuredImage: string;
  featuredImageAlt: string;
  publishedAt?: string;
  updatedAt: string;
  readingTime: number;
  seoTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  publicationStatus: PublicationStatus;
  featured: boolean;
  trending: boolean;
  body: ArticleSection[];
  sources: ArticleSource[];
  reviewStatus: "editorial-review-required";
  substantialUpdatedAt: string;
};

export const categories: Category[] = [
  {
    slug: "artificial-intelligence",
    name: "AI & Machine Learning",
    shortName: "AI",
    description:
      "Practical AI coverage for business leaders, builders, and curious readers who want to understand tools, workflows, and real-world impact.",
  },
  {
    slug: "programming",
    name: "Programming & Development",
    shortName: "Programming",
    description:
      "Developer workflows, software architecture, and the tools that help teams ship higher-quality products faster.",
  },
  {
    slug: "software",
    name: "Software & Apps",
    shortName: "Software",
    description:
      "App reviews, product roundups, and software recommendations designed to help you choose tools with confidence.",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortName: "Security",
    description:
      "Clear guidance on protecting digital accounts, devices, and business data in an increasingly connected world.",
  },
  {
    slug: "how-to",
    name: "How-To Guides",
    shortName: "How-To",
    description:
      "Actionable step-by-step tutorials for troubleshooting, setup, optimization, and everyday tech tasks.",
  },
  {
    slug: "reviews",
    name: "Reviews & Comparisons",
    shortName: "Reviews",
    description:
      "Independent reviews and comparison content that helps readers cut through marketing language and make informed decisions.",
  },
];

const allAuthors: Author[] = [
  {
    slug: "maya-chen",
    name: authorProfiles["maya-chen"].name ?? unverifiedAuthorProfile.name,
    title: authorProfiles["maya-chen"].title ?? unverifiedAuthorProfile.title,
    bio: authorProfiles["maya-chen"].bio ?? unverifiedAuthorProfile.bio,
  },
  {
    slug: "eli-hart",
    name: authorProfiles["eli-hart"].name ?? unverifiedAuthorProfile.name,
    title: authorProfiles["eli-hart"].title ?? unverifiedAuthorProfile.title,
    bio: authorProfiles["eli-hart"].bio ?? unverifiedAuthorProfile.bio,
  },
  {
    slug: "sophia-rivera",
    name: authorProfiles["sophia-rivera"].name ?? unverifiedAuthorProfile.name,
    title: authorProfiles["sophia-rivera"].title ?? unverifiedAuthorProfile.title,
    bio: authorProfiles["sophia-rivera"].bio ?? unverifiedAuthorProfile.bio,
  },
  {
    slug: "nolan-price",
    name: authorProfiles["nolan-price"].name ?? unverifiedAuthorProfile.name,
    title: authorProfiles["nolan-price"].title ?? unverifiedAuthorProfile.title,
    bio: authorProfiles["nolan-price"].bio ?? unverifiedAuthorProfile.bio,
  },
  {
    slug: "zoe-martin",
    name: authorProfiles["zoe-martin"].name ?? unverifiedAuthorProfile.name,
    title: authorProfiles["zoe-martin"].title ?? unverifiedAuthorProfile.title,
    bio: authorProfiles["zoe-martin"].bio ?? unverifiedAuthorProfile.bio,
  },
];

const articleBody = {
  aiTools: [
    {
      heading: "Why small teams are moving faster with AI",
      paragraphs: [
        "The best AI tools for smaller businesses solve specific operational problems instead of trying to replace a full marketing or product team. The practical winners are the ones that save time on research, writing, workflow automation, and customer support while staying easy to adopt.",
        "Small businesses rarely need a sprawling AI stack. They need a focused set of tools that fit into existing workflows and can be learned quickly by the people already doing the work.",
      ],
      list: [
        "Research and summarization for faster market understanding",
        "Drafting and persona prompting for content and outreach",
        "Task automation across email, CRM, and support workflows",
        "Search and retrieval tools that surface internal knowledge quickly",
      ],
    },
    {
      heading: "What to look for before committing",
      paragraphs: [
        "The right AI stack aligns with your existing process. If your team is already using Slack, Google Workspace, or Notion, prioritize tools that integrate cleanly and keep usage simple. Security and data handling matter just as much as features, especially if you manage customer data or internal documents.",
      ],
      blockquote:
        "The strongest AI tools are the ones you can adopt in week one and trust in week twelve.",
    },
  ],
  claude: [
    {
      heading: "The key difference is style and structure",
      paragraphs: [
        "ChatGPT and Claude are both strong general-purpose assistants, but they tend to feel different in how they reason, draft, and structure responses. ChatGPT often shines in quick iteration, coding help, and direct task execution, while Claude is often praised for longer-form writing and careful synthesis.",
        "For everyday work, the difference often comes down to your use case. If you're working in text-heavy tasks, long analysis, or large document review, Claude may feel more natural. If you need coding help, API integration, or a flexible workflow across tools, ChatGPT may give you more immediate utility.",
      ],
    },
    {
      heading: "What users should evaluate",
      paragraphs: [
        "The best approach is not to pick a winner in the abstract. Instead, compare which assistant fits your workflow, the quality of output you need, and how well it handles references, code, and turnaround time. Many people end up using both for different tasks.",
      ],
      list: [
        "Use ChatGPT for quick ideation, coding support, and multimodal experimentation.",
        "Use Claude for longer reading, summary-heavy tasks, and thoughtful drafting.",
        "Test each tool with your real workflows, not generic prompts.",
      ],
    },
  ],
  windows: [
    {
      heading: "Start with the sources of slowdown",
      paragraphs: [
        "A slow Windows PC is often the result of too many startup apps, background services, and resource-heavy software eating away at storage and memory. The fastest wins usually come from trimming startup tasks and checking whether the machine is simply overloaded with programs it no longer needs.",
      ],
      list: [
        "Disable unnecessary startup apps",
        "Uninstall programs you do not use",
        "Run a disk cleanup and defragmentation check",
        "Check memory pressure using Task Manager",
      ],
    },
    {
      heading: "The easiest fixes that actually work",
      paragraphs: [
        "Windows users often overlook the impact of a crowded drive. If storage is nearly full, the system will struggle to allocate temporary files and perform updates efficiently. A proper cleanup, combined with a modern browser and fewer background services, can transform a sluggish laptop quickly.",
      ],
      code: "ms-settings:startupapps\n# or open Task Manager > Startup apps",
    },
  ],
  codingTools: [
    {
      heading: "Free tools that still deliver serious leverage",
      paragraphs: [
        "The best free coding tools are not necessarily the flashiest. They are the ones that help you stay focused on the actual work: writing, testing, navigating code, and collaborating without friction. A good setup can dramatically reduce context switching and mental overhead.",
      ],
      list: [
        "Code editors with strong extensions and terminal integration",
        "Git clients that simplify branch reviews",
        "Local testing tools for quick iteration",
        "Theming and accessibility options that reduce fatigue",
      ],
    },
    {
      heading: "A balanced toolchain beats a crowded one",
      paragraphs: [
        "A lean setup often creates more momentum than a packed toolbox. A well-chosen editor, a solid terminal, and a few proven plugins can outperform a bloated workflow that takes forever to configure. The goal is clarity and consistent use, not endless experimentation.",
      ],
    },
  ],
  rag: [
    {
      heading: "What retrieval-augmented generation changes",
      paragraphs: [
        "Retrieval-augmented generation, or RAG, is a pattern that combines a language model with a retrieval layer. Instead of relying only on the model's training data, the system first pulls relevant documents or snippets from a knowledge base, then uses them to ground the answer.",
        "That matters because it makes AI responses more specific, traceable, and useful in real business settings. The model is not guessing from memory alone; it is synthesizing from material you choose to trust.",
      ],
    },
    {
      heading: "Why RAG matters for teams",
      paragraphs: [
        "For knowledge work, this is the difference between a generic assistant and a useful internal assistant. With the right retrieval layer, an AI tool can answer from product docs, internal policies, support history, and past project notes without requiring users to paste everything manually.",
      ],
      blockquote:
        "RAG is valuable when the answer depends on up-to-date, organization-specific context rather than a single model's broad general knowledge.",
    },
  ],
  security: [
    {
      heading: "Protecting accounts is a daily practice",
      paragraphs: [
        "The most effective online security habits are simple but consistent: use unique passwords, enable multi-factor authentication, and avoid password reuse across important accounts. The cost of shortcuts is high because attackers often rely on one compromised credential to move laterally through other services.",
      ],
      list: [
        "Use a password manager to generate and store strong credentials",
        "Prioritize two-factor or passkey-based protections",
        "Check for reused passwords and outdated recovery methods",
        "Beware of phishing messages that pressure you to act immediately",
      ],
    },
    {
      heading: "The biggest security mistake is overconfidence",
      paragraphs: [
        "People often assume that if they are not famous or a business owner, they are not a target. In reality, attackers often exploit mass-market patterns: leaked credentials, fake support messages, lure emails, and reused passwords across websites. Basic protection goes a long way.",
      ],
    },
  ],
  vscode: [
    {
      heading: "The best extensions reduce friction",
      paragraphs: [
        "Excellent VS Code extensions are rarely the ones that add the most complexity. They are the ones that help you understand a codebase faster, catch issues earlier, and keep your workflow steady while you build. A well-curated setup can feel almost invisible because it simply makes the work easier.",
      ],
      list: [
        "Linting and formatting tools that keep code consistent",
        "Git and PR integrations to reduce context switching",
        "AI copilots that help with boilerplate and repeated patterns",
        "Themes and fonts that reduce eye fatigue during long sessions",
      ],
    },
    {
      heading: "Focus on reliability over novelty",
      paragraphs: [
        "We gravitate toward tools that are active, fast, and stable. The best extension stack is small enough to maintain, yet broad enough to cover the real tasks developers perform every day. That is often a better investment than collecting a huge number of niche utilities.",
      ],
    },
  ],
  hosting: [
    {
      heading: "The right hosting decision depends on your goals",
      paragraphs: [
        "Web hosting is one of those technical decisions where the cheapest option can become the most expensive in the long run. A provider should deliver reliable performance, straightforward setup, and room to grow without requiring a painful migration later. For many small teams, simplicity matters as much as raw specs.",
      ],
      list: [
        "Review pricing for renewals, not just intro offers",
        "Look at uptime guarantees and support quality",
        "Consider bandwidth, storage, and performance expectations",
        "Check migration and maintenance requirements before committing",
      ],
    },
    {
      heading: "What usually matters most",
      paragraphs: [
        "A good hosting provider supports your workload with clear documentation, stable infrastructure, and options for scaling. The best choice for a small site differs from the best choice for a busy ecommerce storefront or a high-traffic SaaS application. The key is to match the hosting plan to the real demands of the project.",
      ],
    },
  ],
  productivity: [
    {
      heading: "Productivity software works best when it disappears",
      paragraphs: [
        "The best productivity apps help you reduce friction without turning your day into a systems optimization project. That means fewer tabs, less checklist guilt, and better focus when it matters most. The right tool should support your priorities, not add more overhead.",
      ],
      list: [
        "Capture tasks quickly without extra setup",
        "Reduce notification noise during deep work",
        "Keep project context unified across devices",
        "Review priorities regularly instead of chasing every task",
      ],
    },
    {
      heading: "A sustainable daily system matters more than the app itself",
      paragraphs: [
        "Software matters only to the extent that it helps you build repeatable habits. A single app can be powerful, but consistency and routine create most of the long-term gains. Many people are more productive with a simpler system they actually use every day.",
      ],
    },
  ],
  apis: [
    {
      heading: "APIs are the connective tissue of modern software",
      paragraphs: [
        "An API allows one system to request data or trigger actions in another system without exposing the entire implementation. It is a structured interface, which is why APIs are so central to modern software development and digital ecosystems.",
      ],
      list: [
        "REST is common for web services and general resource access",
        "GraphQL gives clients flexibility in response shape",
        "Webhooks can push events in near real time",
        "Authentication and rate limits protect reliable usage",
      ],
    },
    {
      heading: "Start by understanding the request lifecycle",
      paragraphs: [
        "A beginner-friendly way to think about APIs is as a conversation between clients and servers. The client sends a request, the server validates it, and the response comes back with data, error details, or both. Once you understand that pattern, it is much easier to reason about authentication, error handling, and integrations.",
      ],
    },
  ],
  wordpress: [
    {
      heading: "Common issues usually come from the same place",
      paragraphs: [
        "WordPress websites often run into performance, plugin conflicts, and theme issues that slowly accumulate over time. In many cases, the root cause is not a single catastrophic failure, but a combination of outdated plugins, excessive scripts, and poor configuration.",
      ],
      list: [
        "Check plugin conflicts after recent updates",
        "Review theme compatibility before major changes",
        "Clear caches after configuration changes",
        "Look at error logs before reinstalling core components",
      ],
    },
    {
      heading: "A maintenance routine prevents chronic breakage",
      paragraphs: [
        "Regular updates and careful backups are more important than dramatic fixes. The most sustainable WordPress site is one with a clear update process, limited plugin use, and a healthy maintenance rhythm. That reduces downtime and improves site reliability.",
      ],
    },
  ],
  aiSoftware: [
    {
      heading: "AI is shifting from experimentation to workflow design",
      paragraphs: [
        "The most meaningful change is not that AI can generate content. It is that teams are redesigning work around tools that summarize, assist, predict, and automate. This creates new expectations for software products, including faster iteration, richer assistive features, and better human-in-the-loop systems.",
      ],
      blockquote:
        "The companies that win will use AI to make work feel more intelligent, not simply more automated.",
    },
    {
      heading: "What this means for developers",
      paragraphs: [
        "Developers are increasingly spending time on system design, human experience, trust, and workflow integration. AI can help with code generation, but the durable value still comes from product judgment, thoughtful implementation, and careful testing.",
      ],
    },
  ],
};

const sourcesByArticle: Record<string, ArticleSource[]> = {
  "best-ai-tools-for-small-businesses": [
    { title: "OpenAI business pricing", url: "https://openai.com/business/pricing/", publisher: "OpenAI" },
    { title: "Managing data and privacy in ChatGPT Business", url: "https://help.openai.com/en/articles/8798634-managing-data-sharing-and-privacy-in-chatgpt-business", publisher: "OpenAI Help Center" },
    { title: "Anthropic pricing and available plans", url: "https://claude.com/pricing", publisher: "Anthropic" },
    { title: "Notion AI feature guide", url: "https://www.notion.com/help/notion-ai-faqs", publisher: "Notion" },
    { title: "Notion pricing", url: "https://www.notion.com/pricing", publisher: "Notion" },
    { title: "Zapier pricing", url: "https://zapier.com/pricing", publisher: "Zapier" },
    { title: "What is included in Zapier's Free plan?", url: "https://help.zapier.com/hc/en-us/articles/32337438839565-What-s-included-in-Zapier-s-Free-plan", publisher: "Zapier Help" },
    { title: "Canva pricing", url: "https://www.canva.com/pricing/", publisher: "Canva" },
    { title: "Magic Write documentation", url: "https://www.canva.com/help/about-magic-write/", publisher: "Canva" },
    { title: "Using Magic Studio safely and legally", url: "https://www.canva.com/help/using-magic-studio-safely-and-legally/", publisher: "Canva" },
  ],
  "chatgpt-vs-claude": [
    { title: "OpenAI — ChatGPT Capabilities Overview", url: "https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview", publisher: "OpenAI Help Center" },
    { title: "OpenAI — ChatGPT Pricing", url: "https://chatgpt.com/pricing/", publisher: "OpenAI" },
    { title: "OpenAI — ChatGPT Accuracy and Limitations", url: "https://help.openai.com/en/articles/8313428", publisher: "OpenAI Help Center" },
    { title: "Anthropic — Claude Pricing", url: "https://claude.com/pricing", publisher: "Anthropic" },
    { title: "Anthropic — How Claude Web Search Works", url: "https://support.claude.com/en/articles/10684626-enable-and-use-web-search", publisher: "Anthropic Support" },
    { title: "Anthropic — Choosing Between Web Search, Thinking, and Research", url: "https://support.claude.com/en/articles/11095361-when-should-i-use-web-search-extended-thinking-and-research", publisher: "Anthropic Support" },
    { title: "Anthropic — Artifacts Overview", url: "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them", publisher: "Anthropic Support" },
  ],
  "how-to-speed-up-a-slow-windows-pc": [
    { title: "Microsoft — Tips to Improve PC Performance in Windows", url: "https://support.microsoft.com/en-us/windows/experience/performance-optimization/tips-to-improve-pc-performance-in-windows", publisher: "Microsoft" },
    { title: "Microsoft — Configure Startup Applications in Windows", url: "https://support.microsoft.com/en-us/windows/experience/startup-boot/configure-startup-applications-in-windows", publisher: "Microsoft" },
    { title: "Microsoft — Manage Drive Space with Storage Sense", url: "https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/manage-drive-space-with-storage-sense", publisher: "Microsoft" },
    { title: "Microsoft — Defragment and Optimize Your Data Drives", url: "https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/defragment-optimize-your-data-drives-in-windows", publisher: "Microsoft" },
    { title: "Microsoft — Windows 10 Support Has Ended", url: "https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/windows-10-support-has-ended-on-october-14-2025", publisher: "Microsoft" },
    { title: "Microsoft — How to Know It's Time for a New PC", url: "https://support.microsoft.com/en-us/windows/experience/compatibility/how-to-know-it-s-time-for-a-new-pc", publisher: "Microsoft" },
  ],
  "best-free-coding-tools": [{ title: "Visual Studio Code documentation", url: "https://code.visualstudio.com/docs", publisher: "Microsoft" }, { title: "Client-side tooling overview", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Overview", publisher: "MDN" }],
  "what-is-retrieval-augmented-generation": [{ title: "RAG and Generative AI", url: "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview?tabs=docs", publisher: "Microsoft Learn" }],
  "how-to-protect-your-online-accounts": [{ title: "NIST Digital Identity Guidelines FAQ", url: "https://pages.nist.gov/800-63-FAQ/", publisher: "NIST" }, { title: "NIST SP 800-63B-4", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b-4.pdf", publisher: "NIST" }],
  "best-vscode-extensions-for-developers": [{ title: "VS Code extensions documentation", url: "https://code.visualstudio.com/docs/configure/extensions/extension-marketplace", publisher: "Microsoft" }],
  "how-to-choose-a-web-hosting-provider": [{ title: "Next.js self-hosting guide", url: "https://nextjs.org/docs/app/guides/self-hosting", publisher: "Next.js" }, { title: "Next.js environment variables guide", url: "https://nextjs.org/docs/app/guides/environment-variables", publisher: "Next.js" }],
  "best-productivity-apps": [{ title: "Todoist Help Center", url: "https://www.todoist.com/help", publisher: "Todoist" }, { title: "Getting started with projects and tasks", url: "https://www.notion.com/en-gb/help/guides/getting-started-with-projects-and-tasks", publisher: "Notion" }],
  "beginners-guide-to-apis": [{ title: "Introduction to web APIs", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction", publisher: "MDN" }],
  "common-wordpress-errors-and-fixes": [{ title: "Troubleshooting plugin and theme conflicts", url: "https://learn.wordpress.org/lesson/troubleshooting-your-site-plugin-and-theme-conflicts/", publisher: "Learn WordPress" }, { title: "Plugin and theme auto-updates", url: "https://wordpress.org/documentation/article/plugins-themes-auto-updates/", publisher: "WordPress.org" }],
  "how-ai-is-changing-software-development": [{ title: "ChatGPT capabilities overview", url: "https://help.openai.com/en/articles/9260256-chatgpt-capabilities-overview", publisher: "OpenAI Help Center" }, { title: "Intro to Claude", url: "https://docs.anthropic.com/en/docs/welcome", publisher: "Anthropic" }],
};

function getArticleBody(key: string): ArticleSection[] {
  const baseBody = remainingArticleBodies[key] ?? revisedArticleBodies[key] ?? articleBody[key as keyof typeof articleBody] ?? [];
  return [...baseBody, ...(editorialExpansions[key] ?? [])];
}

function getEditorialMetadata(slug: string) {
  return { sources: remainingArticleSources[slug] ?? sourcesByArticle[slug] ?? [], reviewStatus: "editorial-review-required" as const, substantialUpdatedAt: "2026-10-09" };
}

type RemainingArticleManifestEntry = {
  title: string;
  excerpt: string;
  seoTitle: string;
  metaDescription: string;
  tags: string[];
  verifiedOn: string;
  publicationStatus: "editorial-review-required";
};

const remainingArticleMetadata = remainingArticleManifest as Record<string, RemainingArticleManifestEntry>;

function calculateReadingTime(body: ArticleSection[]): number {
  const text = body
    .flatMap((section) => [
      section.heading,
      ...(section.paragraphs ?? []),
      ...(section.list ?? []),
      ...(section.orderedList ?? []),
      ...(section.table ? [...section.table.headers, ...section.table.rows.flat()] : []),
      section.blockquote,
      section.code,
      ...(section.links?.map((link) => link.label) ?? []),
    ])
    .filter((value): value is string => Boolean(value))
    .join(" ");

  return Math.max(1, Math.ceil(text.trim().split(/\s+/).filter(Boolean).length / 200));
}

function applyArticleMetadata(article: Article): Article {
  const metadata = remainingArticleMetadata[article.slug];

  return {
    ...article,
    author: "TechPulseDaily Editorial Team",
    readingTime: calculateReadingTime(article.body),
    ...(metadata
      ? {
          title: metadata.title,
          excerpt: metadata.excerpt,
          seoTitle: metadata.seoTitle,
          metaDescription: metadata.metaDescription,
          tags: metadata.tags,
          updatedAt: metadata.verifiedOn,
          substantialUpdatedAt: metadata.verifiedOn,
        }
      : {}),
  };
}

const allArticles: Article[] = [
  {
    id: "a1",
    slug: "best-ai-tools-for-small-businesses",
    title: "Best AI Tools for Small Businesses: 5 Practical Options Compared",
    excerpt:
      "Compare ChatGPT, Claude, Notion AI, Zapier and Canva to find practical AI tools for your small business.",
    category: "artificial-intelligence",
    tags: ["ai", "workflow", "small-business", "automation"],
    authorSlug: "maya-chen",
    author: "TechPulseDaily Editorial Team",
    featuredImage: "/images/editorial-ai-tools.svg",
    featuredImageAlt: "An AI small-business workspace with workflow cards and connected tools",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-09",
    readingTime: 9,
    seoTitle: "Best AI Tools for Small Businesses (2026 Guide)",
    metaDescription:
      "Compare ChatGPT, Claude, Notion AI, Zapier, and Canva for small-business workflows, pricing, privacy, risks, and a practical 30-day pilot.",
    canonicalUrl: "/article/best-ai-tools-for-small-businesses",
    publicationStatus: "published",
    featured: true,
    trending: true,
    body: getArticleBody("aiTools"),
    ...getEditorialMetadata("best-ai-tools-for-small-businesses"),
    substantialUpdatedAt: "2026-10-09",
  },
  {
    id: "a2",
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude: Which AI Assistant Should You Choose in 2026?",
    excerpt:
      "Compare ChatGPT and Claude across features, writing, coding, research, documents, pricing, privacy, and a fair evaluation process.",
    category: "artificial-intelligence",
    tags: ["chatgpt", "claude", "ai-assistants"],
    authorSlug: "maya-chen",
    author: "TechPulseDaily Editorial Team",
    featuredImage: "/images/editorial-ai-assistants.svg",
    featuredImageAlt: "Two AI assistant panels compared around a central evaluation scorecard",
    publishedAt: "2025-01-16",
    updatedAt: "2026-10-09",
    readingTime: 12,
    seoTitle: "ChatGPT vs Claude: Which AI Assistant Should You Choose in 2026?",
    metaDescription:
      "Compare ChatGPT and Claude for writing, coding, research, document analysis, pricing, privacy, and real-world workflows in 2026.",
    canonicalUrl: "/article/chatgpt-vs-claude",
    publicationStatus: "published",
    featured: true,
    trending: true,
    body: getArticleBody("claude"),
    ...getEditorialMetadata("chatgpt-vs-claude"),
    substantialUpdatedAt: "2026-10-09",
  },
  {
    id: "a3",
    slug: "how-to-speed-up-a-slow-windows-pc",
    title: "How to Speed Up a Slow Windows PC: 12 Proven Fixes (2026)",
    excerpt:
      "A practical, step-by-step guide to diagnosing and improving a slow Windows PC with built-in tools and safe maintenance steps.",
    category: "how-to",
    tags: ["windows", "pc-optimization", "performance"],
    authorSlug: "nolan-price",
    author: "TechPulseDaily Editorial Team",
    featuredImage: "/images/editorial-windows-performance.svg",
    featuredImageAlt: "A laptop performance dashboard with an upward trend",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-09",
    readingTime: 12,
    seoTitle: "How to Speed Up a Slow Windows PC: 12 Proven Fixes (2026)",
    metaDescription:
      "Learn 12 practical ways to speed up a slow Windows PC, from startup apps and storage to updates, malware checks, heat, and hardware upgrades.",
    canonicalUrl: "/article/how-to-speed-up-a-slow-windows-pc",
    publicationStatus: "published",
    featured: true,
    trending: true,
    body: getArticleBody("windows"),
    ...getEditorialMetadata("how-to-speed-up-a-slow-windows-pc"),
    substantialUpdatedAt: "2026-10-09",
  },
  {
    id: "a4",
    slug: "best-free-coding-tools",
    title: "Best Free Coding Tools for Developers",
    excerpt:
      "Build a lean, productive setup with the free tools that improve coding, testing, and debugging.",
    category: "programming",
    tags: ["developer-tools", "coding", "software"],
    authorSlug: "nolan-price",
    author: "TechPulseDaily Editorial Team",
    featuredImage: "/images/editorial-coding-tools.svg",
    featuredImageAlt: "A developer workstation showing code, terminal, and testing panels",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-08",
    readingTime: 8,
    seoTitle: "Best Free Coding Tools for Developers in 2025",
    metaDescription:
      "Explore the best free coding tools for developers, from editors and Git clients to local testing and debugging utilities.",
    canonicalUrl: "/article/best-free-coding-tools",
    publicationStatus: "published",
    featured: false,
    trending: true,
    body: getArticleBody("codingTools"),
    ...getEditorialMetadata("best-free-coding-tools"),
  },
  {
    id: "a5",
    slug: "what-is-retrieval-augmented-generation",
    title: "What Is Retrieval-Augmented Generation?",
    excerpt:
      "A clear explanation of RAG and why it matters for grounded, helpful AI systems.",
    category: "artificial-intelligence",
    tags: ["rag", "ai", "machine-learning"],
    authorSlug: "maya-chen",
    author: "TechPulseDaily Editorial Team",
    featuredImage: "/images/editorial-rag.svg",
    featuredImageAlt: "Documents flowing through retrieval nodes to an AI response",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-08",
    readingTime: 7,
    seoTitle: "What Is Retrieval-Augmented Generation (RAG)?",
    metaDescription:
      "Learn what retrieval-augmented generation is, how it works, and why it matters for practical AI applications.",
    canonicalUrl: "/article/what-is-retrieval-augmented-generation",
    publicationStatus: "published",
    featured: false,
    trending: true,
    body: getArticleBody("rag"),
    ...getEditorialMetadata("what-is-retrieval-augmented-generation"),
  },
  {
    id: "a6",
    slug: "how-to-protect-your-online-accounts",
    title: "How to Protect Your Online Accounts",
    excerpt:
      "A simple security system that reduces risk across email, banking, social, and work services.",
    category: "cybersecurity",
    tags: ["security", "passwords", "privacy"],
    authorSlug: "sophia-rivera",
    author: "TechPulseDaily Editorial Team",
    featuredImage: "/images/editorial-account-security.svg",
    featuredImageAlt: "A digital shield protecting account cards and verification signals",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-08",
    readingTime: 6,
    seoTitle: "How to Protect Your Online Accounts in 2025",
    metaDescription:
      "Learn the basics of account protection, password hygiene, MFA, and phishing prevention for safer digital life.",
    canonicalUrl: "/article/how-to-protect-your-online-accounts",
    publicationStatus: "published",
    featured: false,
    trending: true,
    body: getArticleBody("security"),
    ...getEditorialMetadata("how-to-protect-your-online-accounts"),
  },
  {
    id: "a7",
    slug: "best-vscode-extensions-for-developers",
    title: "Best VS Code Extensions for Developers",
    excerpt:
      "A focused list of editor extensions that improve speed, clarity, and daily coding quality.",
    category: "programming",
    tags: ["vscode", "extensions", "developer-tools"],
    authorSlug: "nolan-price",
    author: "TechPulseDaily Editorial Team",
    featuredImage: "/images/editorial-editor-extensions.svg",
    featuredImageAlt: "A code editor with extension blocks and source-control indicators",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-08",
    readingTime: 7,
    seoTitle: "Best VS Code Extensions for Developers in 2025",
    metaDescription:
      "A practical round-up of the VS Code extensions that help developers write better code faster.",
    canonicalUrl: "/article/best-vscode-extensions-for-developers",
    publicationStatus: "published",
    featured: false,
    trending: true,
    body: getArticleBody("vscode"),
    ...getEditorialMetadata("best-vscode-extensions-for-developers"),
  },
  {
    id: "a8",
    slug: "how-to-choose-a-web-hosting-provider",
    title: "How to Choose a Web Hosting Provider",
    excerpt:
      "Understand the decision points that matter before you commit to a hosting plan for your site.",
    category: "reviews",
    tags: ["hosting", "web-development", "websites"],
    authorSlug: "zoe-martin",
    author: "TechPulseDaily Editorial Team",
    featuredImage: "/images/editorial-hosting.svg",
    featuredImageAlt: "A cloud connecting three hosting server options",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-08",
    readingTime: 6,
    seoTitle: "How to Choose a Web Hosting Provider for Your Project",
    metaDescription:
      "Compare hosting options, performance metrics, and migration risks before selecting a provider for your site.",
    canonicalUrl: "/article/how-to-choose-a-web-hosting-provider",
    publicationStatus: "published",
    featured: false,
    trending: false,
    body: getArticleBody("hosting"),
    ...getEditorialMetadata("how-to-choose-a-web-hosting-provider"),
  },
  {
    id: "a9",
    slug: "best-productivity-apps",
    title: "Best Productivity Apps for Focused Work",
    excerpt:
      "The best apps are the ones that reduce friction, not the ones with the longest list of features.",
    category: "software",
    tags: ["productivity", "apps", "workflow"],
    authorSlug: "eli-hart",
    author: "TechPulseDaily Editorial Team",
    featuredImage: "/images/editorial-productivity.svg",
    featuredImageAlt: "A task board, calendar, and clock organizing focused work",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-08",
    readingTime: 5,
    seoTitle: "Best Productivity Apps for Focused Work and Team Planning",
    metaDescription:
      "Explore the productivity apps that help teams focus, plan, and move from tasks to outcomes with less friction.",
    canonicalUrl: "/article/best-productivity-apps",
    publicationStatus: "published",
    featured: false,
    trending: false,
    body: getArticleBody("productivity"),
    ...getEditorialMetadata("best-productivity-apps"),
  },
  {
    id: "a10",
    slug: "beginners-guide-to-apis",
    title: "Beginner's Guide to APIs",
    excerpt:
      "Learn the foundations behind APIs, request patterns, and how developers integrate systems together.",
    category: "programming",
    tags: ["api", "beginners", "backend"],
    authorSlug: "nolan-price",
    author: "TechPulseDaily Editorial Team",
    featuredImage: "/images/editorial-api.svg",
    featuredImageAlt: "A client application and server exchanging an API request and response",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-08",
    readingTime: 7,
    seoTitle: "Beginner's Guide to APIs for Web Development",
    metaDescription:
      "A beginner-friendly explanation of what APIs are, how they work, and why they matter in modern software.",
    canonicalUrl: "/article/beginners-guide-to-apis",
    publicationStatus: "published",
    featured: false,
    trending: false,
    body: getArticleBody("apis"),
    ...getEditorialMetadata("beginners-guide-to-apis"),
  },
  {
    id: "a11",
    slug: "common-wordpress-errors-and-fixes",
    title: "Common WordPress Errors and Fixes",
    excerpt:
      "Diagnose the most common WordPress problems without panic and with a clear maintenance checklist.",
    category: "software",
    tags: ["wordpress", "maintenance", "debugging"],
    authorSlug: "zoe-martin",
    author: "TechPulseDaily Editorial Team",
    featuredImage: "/images/editorial-wordpress.svg",
    featuredImageAlt: "A website browser panel repaired with diagnostic tools",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-08",
    readingTime: 6,
    seoTitle: "Common WordPress Errors and Fixes for Site Owners",
    metaDescription:
      "Learn how to identify and fix common WordPress errors, plugin conflicts, and performance problems with confidence.",
    canonicalUrl: "/article/common-wordpress-errors-and-fixes",
    publicationStatus: "published",
    featured: false,
    trending: false,
    body: getArticleBody("wordpress"),
    ...getEditorialMetadata("common-wordpress-errors-and-fixes"),
  },
  {
    id: "a12",
    slug: "how-ai-is-changing-software-development",
    title: "How AI Is Changing Software Development",
    excerpt:
      "AI is elevating the role of the developer from boilerplate writer to product and systems thinker.",
    category: "artificial-intelligence",
    tags: ["ai", "software-development", "engineering"],
    authorSlug: "eli-hart",
    author: "TechPulseDaily Editorial Team",
    featuredImage: "/images/editorial-ai-development.svg",
    featuredImageAlt: "A developer builds software with AI-assisted code, testing, and deployment",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-08",
    readingTime: 8,
    seoTitle: "How AI Is Changing Software Development Right Now",
    metaDescription:
      "Understand how AI is changing software development roles, workflows, and the kind of judgment developers need most.",
    canonicalUrl: "/article/how-ai-is-changing-software-development",
    publicationStatus: "published",
    featured: true,
    trending: true,
    body: getArticleBody("aiSoftware"),
    ...getEditorialMetadata("how-ai-is-changing-software-development"),
  },
].map((article) => applyArticleMetadata(article as Article));

/**
 * Local editorial preview only. This is evaluated on the server at build time;
 * do not set it in a production deployment. It lets editors inspect drafts
 * without allowing unapproved work into ordinary public outputs.
 */
export const isEditorialPreview = process.env.NODE_ENV !== "production" && process.env.EDITORIAL_PREVIEW === "true";
export const publicArticles = allArticles.filter((article) => article.publicationStatus === "published");
export const articles = isEditorialPreview ? allArticles : publicArticles;
export const authors = (isEditorialPreview ? allAuthors : allAuthors.filter((author) => publicArticles.some((article) => article.authorSlug === author.slug)));

export const trendingArticles = articles.filter((article) => article.trending).slice(0, 6);
export const featuredArticles = articles.filter((article) => article.featured).slice(0, 4);
export const latestArticles = [...articles].sort((a, b) =>
  new Date(b.publishedAt ?? b.updatedAt).getTime() - new Date(a.publishedAt ?? a.updatedAt).getTime(),
);

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string) {
  return latestArticles.filter((article) => article.category === categorySlug);
}

export function getArticlesByTag(tag: string) {
  return latestArticles.filter((article) => article.tags.map((item) => item.toLowerCase()).includes(tag.toLowerCase()));
}

export function getArticlesByAuthor(authorSlug: string) {
  return latestArticles.filter((article) => article.authorSlug === authorSlug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getAuthorBySlug(slug: string) {
  return authors.find((author) => author.slug === slug);
}

export function getTagData(tag: string) {
  const items = getArticlesByTag(tag);
  return {
    name: tag,
    count: items.length,
  };
}

export function getMostPopularArticles() {
  return latestArticles.slice(0, 5);
}

export function getRelatedArticles(currentArticle: Article) {
  const related = articles
    .filter((article) => article.slug !== currentArticle.slug)
    .map((article) => ({
      article,
      score:
        Number(article.category === currentArticle.category) * 4 +
        article.tags.filter((tag) => currentArticle.tags.includes(tag)).length * 2,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ article }) => article);

  return related.length ? related : articles.filter((article) => article.slug !== currentArticle.slug).slice(0, 4);
}

export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "AI", href: "/category/artificial-intelligence" },
  { label: "Software", href: "/category/software" },
  { label: "How-To", href: "/category/how-to" },
  { label: "Programming", href: "/category/programming" },
  { label: "Cybersecurity", href: "/category/cybersecurity" },
  { label: "Reviews", href: "/category/reviews" },
  { label: "Latest", href: "/articles" },
];
import { authorProfiles, unverifiedAuthorProfile } from "@/lib/site-config";
import { editorialExpansions, revisedArticleBodies } from "@/lib/article-content";
import { remainingArticleBodies, remainingArticleSources } from "@/lib/remaining-article-bodies";
import remainingArticleManifest from "@/lib/remaining-article-manifest.json";
