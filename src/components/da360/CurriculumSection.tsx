import { useState } from "react";
import { Plus, Minus, Check } from "lucide-react";
import CTAButton from "@/components/da360/CTAButton";

type ModuleData = {
  label: string;
  number: number;
  title: string;
  sessions: string;
  assignments: string;
  caseStudies: string;
  assessments?: string;
  subtopics: string[];
};

const coreModules: ModuleData[] = [
  {
    label: "Module",
    number: 1,
    title: "Digital Marketing Foundation",
    sessions: "5 Live Sessions",
    assignments: "3 Assignments",
    caseStudies: "5 Case Study",
    subtopics: [
      "Fundamentals & Principles of Marketing",
      "ATL / BTL / TTL & Funnels",
      "Introduction to Digital Marketing",
      "Branding & Business Fundamentals",
      "Owned, Earned & Paid Media",
      "Customer Journey & Buyer Persona",
      "Importance of AI in Digital Marketing",
      "AI Content & Prompt Engineering",
      "Color Theory & Typography",
      "Social Media Creative Designing",
      "Social Media Account Creation",
    ],
  },
  {
    label: "Module",
    number: 2,
    title: "Website Development",
    sessions: "10 Live Sessions",
    assignments: "3 Assignments",
    caseStudies: "5 Case Study",
    subtopics: [
      "Introduction to Web Technologies",
      "HTML5 & CSS3 Fundamentals",
      "WordPress Installation & Setup",
      "Theme Customization & Plugins",
      "Landing Page Design",
      "E-commerce with WooCommerce",
      "Website Speed Optimization",
      "Mobile Responsive Design",
      "UI/UX Best Practices",
      "Website Security Essentials",
    ],
  },
  {
    label: "Module",
    number: 3,
    title: "SEO",
    sessions: "20 Live Sessions",
    assignments: "3 Assignments",
    caseStudies: "5 Case Study",
    assessments: "1 Assessments",
    subtopics: [
      "How Search Engines Work",
      "Keyword Research & Analysis",
      "On-Page SEO Optimization",
      "Technical SEO Fundamentals",
      "Off-Page SEO & Link Building",
      "Local SEO & Google Business Profile",
      "SEO Content Strategy",
      "Google Search Console Mastery",
      "SEO Tools (Ahrefs, SEMrush)",
      "SEO Reporting & Analytics",
    ],
  },
  {
    label: "Module",
    number: 4,
    title: "Social Media Intelligence & Brand Impact",
    sessions: "20 Live Sessions",
    assignments: "3 Assignments",
    caseStudies: "5 Case Study",
    assessments: "1 Assessments",
    subtopics: [
      "Social Media Strategy Development",
      "Facebook & Instagram Marketing",
      "LinkedIn Marketing",
      "YouTube Marketing & Optimization",
      "Twitter/X Marketing",
      "Content Calendar Planning",
      "Community Management",
      "Social Media Analytics",
      "Paid Social Advertising",
      "Influencer Collaboration Basics",
    ],
  },
  {
    label: "Module",
    number: 5,
    title: "Google Ads",
    sessions: "5 Live Sessions",
    assignments: "3 Assignments",
    caseStudies: "5 Case Study",
    assessments: "1 Assessments",
    subtopics: [
      "Google Ads Fundamentals",
      "Search Campaign Setup",
      "Display Advertising",
      "Video Ads (YouTube)",
      "Shopping Campaigns",
      "Remarketing Strategies",
      "Bidding Strategies & Budget",
      "Ad Extensions & Formats",
      "Campaign Optimization",
      "Google Ads Reporting",
    ],
  },
  {
    label: "Module",
    number: 6,
    title: "Advanced Digital Analytics",
    sessions: "5 Live Sessions",
    assignments: "1 Assignments",
    caseStudies: "5 Case Study",
    subtopics: [
      "Google Analytics 4 Setup",
      "Event Tracking & Conversions",
      "Audience Segmentation",
      "Attribution Modeling",
      "Custom Reports & Dashboards",
      "Google Tag Manager",
      "Data-Driven Decision Making",
      "Marketing KPIs & Metrics",
    ],
  },
];

const specialisations: ModuleData[] = [
  {
    label: "Specialisation",
    number: 1,
    title: "Specialisation 1 - SEO Mastery with AI",
    sessions: "20 Live Sessions",
    assignments: "3 Assignments",
    caseStudies: "5 Case Study",
    assessments: "1 Assessments",
    subtopics: [
      "Programmatic SEO",
      "AEO | GEO | AIO | SXO",
      "Parasite SEO",
      "Bing Webmaster tools",
      "Conversion Rate Optimisation",
      "A/B Testing",
      "International SEO",
      "Microsoft Clarity - Heat Maps",
      "AI Powered Content Generation",
      "SEO Monetization Strategies",
      "Discovery SEO",
      "Advanced AI Tools for Improving Rankings",
      "Advanced backlinking methods",
      "Advanced Backlink competitor Analysis",
      "Calculating ROI of an SEO campaign",
      "Latest Google Algorithm Updates",
      "SEO Reporting & Budget Forecasting",
      "App Store SEO",
      "SEO Audit using AI",
      "SEO Roadmaps and Strategy",
    ],
  },
  {
    label: "Specialisation",
    number: 2,
    title: "Specialisation 2 - Performance Marketing",
    sessions: "10 Live Sessions",
    assignments: "2 Assignments",
    caseStudies: "3 Case Study",
    assessments: "1 Assessments",
    subtopics: [
      "Advanced Meta Ads Strategies",
      "Google Ads Performance Max",
      "LinkedIn Advertising",
      "Campaign Budget Optimization",
      "Advanced Audience Targeting",
      "Dynamic Creative Optimization",
      "Cross-Platform Attribution",
      "ROAS & CPA Optimization",
      "Landing Page Optimization",
      "Performance Marketing Dashboards",
    ],
  },
  {
    label: "Specialisation",
    number: 3,
    title: "Specialisation 3 - AI-Powered E-commerce Specialisation",
    sessions: "10 Live Sessions",
    assignments: "2 Assignments",
    caseStudies: "3 Case Study",
    assessments: "1 Assessments",
    subtopics: [
      "E-commerce Business Models",
      "Product Listing Optimization",
      "AI-Powered Product Recommendations",
      "Shopping Feed Management",
      "Marketplace Marketing (Amazon, Flipkart)",
      "E-commerce SEO Strategies",
      "Conversion Rate Optimization",
      "Customer Retention & Loyalty Programs",
      "E-commerce Analytics & Reporting",
      "AI Chatbots for E-commerce",
    ],
  },
  {
    label: "Specialisation",
    number: 6,
    title: "Specialisation 6 : Marketing Automation and MarTech",
    sessions: "5 Live Sessions",
    assignments: "2 Assignments",
    caseStudies: "3 Case Study",
    assessments: "1 Assessments",
    subtopics: [
      "MarkTech and Automation Essentials",
      "MarkTech Strategy Building",
      "Project Management",
      "Types of Automations",
      "Lead Nurturing with Automations",
      "Tools To Automate Outreach",
      "N8N Automation Workflows",
      "Zapier Ecosystem",
      "Email Marketing Automation",
      "Whatsapp & SMS Marketing",
      "CRM Marketing Automation",
      "Key Metrics & Reporting Methods",
      "Chat Bot implementation",
      "What is Chatbot Workflow",
      "Affiliate Marketing",
      "Google Ad Sense",
      "Building Go-To-Market Strategies",
      "Mastering Product/Service Led Growth",
    ],
  },
];

const AccordionCard = ({ item }: { item: ModuleData }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-[2.5px] border-black rounded-[20px] overflow-hidden shadow-[0_4px_0_0_rgba(0,0,0,0.45)] transition-all duration-300 ${
        open ? "bg-[#EDE9FE]" : "bg-white"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-8 py-6 md:px-10 md:py-8 text-left"
      >
        <div className="flex items-center gap-6 md:gap-10 flex-1">
          {/* Label & Number */}
          <div className="shrink-0">
            <p className="text-sm italic font-semibold text-gray-800">{item.label}</p>
            <p className="text-4xl md:text-[48px] font-extrabold text-purple-700 leading-none">
              {item.number}
            </p>
          </div>

          {/* Title & Pills */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="text-sm border-[1.5px] border-black rounded-full px-5 py-2 text-black bg-white font-medium">
                {item.sessions}
              </span>
              <span className="text-sm border-[1.5px] border-black rounded-full px-5 py-2 text-black bg-white font-medium">
                {item.assignments}
              </span>
              <span className="text-sm border-[1.5px] border-black rounded-full px-5 py-2 text-black bg-white font-medium">
                {item.caseStudies}
              </span>
              {item.assessments && (
                <span className="text-sm border-[1.5px] border-black rounded-full px-5 py-2 text-black bg-white font-medium">
                  {item.assessments}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Toggle Icon */}
        <div className="shrink-0 ml-4">
          {open ? (
            <Minus className="h-8 w-8 text-gray-700" />
          ) : (
            <Plus className="h-8 w-8 text-gray-700" />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      {open && item.subtopics.length > 0 && (
        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 ml-0 md:ml-[120px]">
            {item.subtopics.map((topic) => (
              <div key={topic} className="flex items-start gap-3">
                <Check className="h-4 w-4 text-gray-600 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-700">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CurriculumSection = () => (
  <section id="curriculum-section" className="section-spacing bg-[#F5F5F5]">
    <div className="container mx-auto px-4">
      {/* Section 1: Core Modules */}
      <div className="max-w-[1200px] mx-auto mb-20">
        <h2 className="font-heading text-3xl md:text-[48px] font-extrabold text-center mb-4 text-gray-900 leading-tight md:leading-[1.3]">
          Latest Curriculum Co-Created by Industry Leaders
        </h2>
        <p className="text-center text-gray-600 mb-4 max-w-3xl mx-auto">
          Master advanced curriculum approved by industry leaders at our AI digital marketing leadership course for entrepreneurs. We combine expert-led training with a syllabus recognized by top professionals to ensure you are job ready.
        </p>
        <div className="flex justify-center gap-6 mb-[40px] text-sm text-gray-600">
          <span><strong>Learning Mode</strong> &nbsp;Offline</span>
          <span><strong>Batch Timings</strong> &nbsp;9:00AM to 11:00AM | 11:30 AM to 1:00 PM</span>
        </div>

        <div className="flex flex-col gap-4">
          {coreModules.map((mod) => (
            <AccordionCard key={mod.number} item={mod} />
          ))}
        </div>
      </div>

      {/* Section 2: Specialisations */}
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-heading text-3xl md:text-[48px] font-extrabold text-center mb-4 text-gray-900 leading-tight md:leading-[1.3]">
          Fastrack Your AI Digital Marketing Career
        </h2>
        <p className="text-center text-gray-600 mb-[40px] max-w-3xl mx-auto">
          Learn 4 distinct specializations with our 6-month postgraduate leadership certification program with AI
        </p>

        <div className="flex flex-col gap-4">
          {specialisations.map((spec) => (
            <AccordionCard key={spec.number} item={spec} />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <CTAButton>Download Full Curriculum</CTAButton>
      </div>
    </div>
  </section>
);

export default CurriculumSection;
