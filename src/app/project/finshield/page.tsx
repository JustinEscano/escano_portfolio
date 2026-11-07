import type { Metadata } from 'next';
import Image from 'next/image';
import finshieldLogo from '../../../assets/Finshield/FinShield.svg';
import adminDashboardSS from '../../../assets/Finshield/Admin Dashboard.png';
import superadminDashboardSS from '../../../assets/Finshield/Superadmin Dashboard.png';
import invoiceCreationSS from '../../../assets/Finshield/Invoice Creation.png';
import businessOwnerReportsSS from '../../../assets/Finshield/Business Owner Reports.png';
import ProjectHero from '../../../components/project/ProjectHero';
import ProjectNav from '../../../components/project/ProjectNav';
import ProjectContent from '../../../components/project/ProjectContent';
import ScreenshotCarousel from '../../../components/project/ScreenshotCarousel';
import { ProjectNavbarTheme, ProjectDetailsNavbarTheme } from '../../../contexts/NavbarThemeContext';

export const metadata: Metadata = {
  title: 'FinShield | Justin Escano',
  description: 'An enterprise invoice management and blockchain verification system that anchors document hashes on Polygon and leverages Redis/BullMQ outbox processing and visual diff analysis.',
};

const slides = [
  {
    image: adminDashboardSS,
    title: 'Platform Analytics & Telemetry',
    description: 'Real-time health monitoring of the Express.js API, PostgreSQL database, Redis cache, and BullMQ background workers with 24-hour latency signals and error telemetry.',
  },
  {
    image: superadminDashboardSS,
    title: 'Multi-Tenant Executive Overview',
    description: 'Centralized company dashboard tracking total invoice volume, net revenue trends, inventory stock levels, and cross-branch operational summaries.',
  },
  {
    image: invoiceCreationSS,
    title: 'BIR-Compliant Invoice Issuance',
    description: 'Fast invoice creation interface supporting customer TIN inputs, active branch catalog item selection, automated VAT computations, and payment authorization.',
  },
  {
    image: businessOwnerReportsSS,
    title: 'Financial & Audit Reporting',
    description: 'Comprehensive gross sales analytics, completed credit-memo refund tracking, branch-level metrics, and one-click Excel audit exports.',
  },
];

export default function FinShieldDetail() {
  const finshieldLogoSlot = (
    <div className="flex items-center gap-4">
      <Image
        src={finshieldLogo}
        alt="FinShield Logo"
        width={72}
        height={72}
        className="w-16 h-16 drop-shadow-2xl object-contain shrink-0"
        priority
      />
      <div className="flex flex-col">
        <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Enterprise Blockchain Integrity</span>
        <span className="text-3xl font-black tracking-tight text-white">FinShield</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen theme-finshield bg-[#080e1e]">
      <ProjectNavbarTheme scrolledBg="#0b1329" accent="#10b981" hoverAccent="#34d399" />

      <ProjectHero
        title="FinShield"
        description="An enterprise-grade invoice management and blockchain protection verification system designed to eliminate invoice fraud and ensure document integrity. Powered by a service-oriented architecture with Next.js, Express.js, PostgreSQL/Prisma, Redis & BullMQ outbox workers, private S3 storage, and Polygon blockchain anchoring, FinShield cryptographically proves document authenticity while offering automated visual diff analysis for modified records."
        techStack={['Next.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Redis / BullMQ', 'Polygon', 'FastAPI / Python', 'AWS S3']}
        githubLink="https://github.com/JustinEscano"
        logoSlot={finshieldLogoSlot}
        isDark={true}
        bgClass="bg-[#0b1329] border-b border-emerald-500/20"
      />

      <ProjectNav hasFeatures={true} />
      <ProjectDetailsNavbarTheme scrolledBg="#0b1329" accent="#10b981" />

      <div className="bg-[#080e1e]" style={{ minHeight: '100vh', marginTop: '-1px', paddingTop: '2rem' }}>
        <ProjectContent className="text-project-body">

          {/* Screenshots Carousel */}
          <section id="key-features" className="scroll-mt-32 bg-project-card border border-slate-800 rounded-3xl p-6 lg:p-10 mb-12 shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-700/80 text-white flex items-center gap-3" style={{ color: '#ffffff' }}>
              <span className="w-2 h-8 bg-emerald-500 rounded-full inline-block"></span>
              Key Features
            </h2>
            <ScreenshotCarousel slides={slides} />
          </section>

          {/* About the Project */}
          <section className="scroll-mt-32 bg-project-card border border-slate-800 rounded-3xl p-6 lg:p-10 mb-12 shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-700/80 text-white flex items-center gap-3" style={{ color: '#ffffff' }}>
              <span className="w-2 h-8 bg-emerald-500 rounded-full inline-block"></span>
              About the System
            </h2>

            <div className="mb-10 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-700/70 shadow-sm hover:border-emerald-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Primary Goal</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                FinShield is designed to mitigate invoice tampering, unauthorized financial alterations, and audit vulnerabilities in retail and commercial environments. By decoupling high-throughput invoice issuance from asynchronous document generation and anchoring cryptographic SHA-256 hashes onto the Polygon blockchain, the platform guarantees mathematical immutability for all issued documents. When a presented invoice is modified, an isolated computer vision microservice performs visual and textual difference analysis to assist human audit review without making subjective fraud claims.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-3" style={{ color: '#ffffff' }}>Core Capabilities &amp; Features</h3>

            <div className="space-y-6">
              {[
                {
                  category: '1. Superadmin & Platform Administrator',
                  items: [
                    { title: 'Platform Telemetry', desc: 'Real-time heartbeat probes across Express.js API, PostgreSQL, Redis, and async workers with 365-day request telemetry.' },
                    { title: 'Multi-Tenant Governance', desc: 'Global company onboarding, cross-branch scope isolation, and centralized tamper-evident audit logging.' },
                    { title: 'Security & Operations Center', desc: 'Distributed rate limiting, token-revocation caching in Redis, and point-in-time recovery configurations.' },
                  ],
                },
                {
                  category: '2. Business Owner & Branch Manager',
                  items: [
                    { title: 'Branch Scoping & Catalogs', desc: 'Manage branch-level pricing, item catalogs, and staff permissions within strict organizational boundaries.' },
                    { title: 'Refund & Credit-Memo Authority', desc: 'Explicit Branch Manager approval workflow for invoice refunds to safeguard against unauthorized reversals.' },
                    { title: 'Financial Analytics', desc: 'Granular views of gross sales, net revenues, refund distributions, and one-click Excel audit exports.' },
                  ],
                },
                {
                  category: '3. Cashier & Operational Staff',
                  items: [
                    { title: 'Fast Invoice Issuance', desc: 'Streamlined checkout with customer TIN inputs, item lookup, automated VAT calculations, and BIR compliance validation.' },
                    { title: 'Outbox-Backed Processing', desc: 'Asynchronous document compilation preventing API request blocking and ensuring guaranteed document delivery.' },
                  ],
                },
                {
                  category: '4. Public & Customer Verification',
                  items: [
                    { title: 'QR Code Blockchain Verification', desc: 'Instant zero-knowledge document verification matching presented invoice hashes with Polygon ledger records.' },
                    { title: 'Document Difference Analysis', desc: 'FastAPI Python microservice using PyMuPDF and OpenCV to highlight visual and textual modifications for human review.' },
                  ],
                },
              ].map((group, i) => (
                <div key={i} className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 shadow-sm hover:border-emerald-500/40 transition-colors">
                  <h4 className="text-lg font-bold text-emerald-400 mb-4">{group.category}</h4>
                  <ul className="space-y-4">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          <strong className="text-white">{item.title}:</strong> {item.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Details */}
          <section id="technical-details" className="scroll-mt-32 bg-project-card border border-slate-800 rounded-3xl p-6 lg:p-10 mb-12 shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-700/80 text-white flex items-center gap-3" style={{ color: '#ffffff' }}>
              <span className="w-2 h-8 bg-emerald-500 rounded-full inline-block"></span>
              Technical Architecture
            </h2>

            <div className="space-y-10 pb-6">
              {/* Stack */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6" style={{ color: '#ffffff' }}>Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    {
                      name: 'Next.js & React',
                      icon: (
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
                        </svg>
                      ),
                    },
                    {
                      name: 'Express.js & TypeScript',
                      icon: (
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3" />
                        </svg>
                      ),
                    },
                    {
                      name: 'PostgreSQL & Prisma',
                      icon: (
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
                        </svg>
                      ),
                    },
                    {
                      name: 'Redis & BullMQ',
                      icon: (
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                        </svg>
                      ),
                    },
                    {
                      name: 'Polygon Blockchain',
                      icon: (
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      ),
                    },
                    {
                      name: 'Python & FastAPI',
                      icon: (
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                        </svg>
                      ),
                    },
                  ].map((tech) => (
                    <div key={tech.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center shadow-lg flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 text-emerald-400">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-bold text-slate-200">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture directory */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6" style={{ color: '#ffffff' }}>System Modules &amp; Directory Structure</h3>
                <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                  <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-950">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <div className="mx-auto text-xs text-slate-400 font-mono tracking-wider">finshield</div>
                  </div>
                  <div className="p-6 font-mono text-sm text-slate-300 overflow-x-auto space-y-1 bg-slate-900">
                    {[
                      { name: 'FRONTEND/', desc: 'Next.js 14 client application with role-specific workspaces and public QR verification portal', isSub: false },
                      { name: 'BACKEND/', desc: 'Express.js server, Prisma ORM, BullMQ background queues, and private S3 storage integration', isSub: false },
                      { name: 'blockchain/', desc: 'Solidity smart contracts and ethers.js anchoring SHA-256 document hashes to Polygon', isSub: true },
                      { name: 'workers/', desc: 'Redis & BullMQ outbox queue workers for non-blocking invoice PDF generation and storage vaulting', isSub: true },
                      { name: 'src/', desc: 'Express.js REST API routes, JWT/MFA authentication, Zod validation, and branch/company RBAC rules', isSub: true },
                      { name: 'AI/', desc: 'Python FastAPI microservice using PyMuPDF and OpenCV for visual and textual document difference detection', isSub: false },
                    ].map(folder => (
                      <div
                        key={folder.name}
                        className={`flex items-center gap-4 hover:bg-slate-800/60 p-2 rounded-lg transition-colors ${
                          folder.isSub ? 'ml-6 border-l-2 border-emerald-500/30 pl-4 bg-slate-950/40' : ''
                        }`}
                      >
                        <span className={`text-xl ${folder.isSub ? 'text-emerald-400/80' : 'text-emerald-400'}`}>
                          {folder.isSub ? '↳ 📁' : '📁'}
                        </span>
                        <div className="flex flex-col">
                          <span className={`${folder.isSub ? 'text-emerald-300 font-medium' : 'text-white font-bold'}`}>
                            {folder.name}
                          </span>
                          <span className="text-slate-400 text-xs">{folder.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section id="team-members" className="scroll-mt-32 bg-project-card border border-slate-800 rounded-3xl p-6 lg:p-10 mb-12 shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 pb-4 border-b border-slate-700/80 text-white flex items-center gap-3" style={{ color: '#ffffff' }}>
              <span className="w-2 h-8 bg-emerald-500 rounded-full inline-block"></span>
              Development Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Karlos Son Rivo', role: 'Backend/Security Developer & Leader', link: '#' },
                { name: 'Justin Paul Louise C. Escaño', role: 'Frontend Developer & Documentator', link: 'https://github.com/JustinEscano' },
                { name: 'Trisha Buclares', role: 'Documentator for Capstone', link: '#' },
                { name: 'Christian Mondala', role: 'System Tester', link: '#' },
                { name: 'Kim Mendoza', role: 'System Tester', link: '#' },
              ].map((member, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
                  <div className="mb-5">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-emerald-400 transition-colors duration-300" style={{ color: '#ffffff' }}>{member.name}</h3>
                    <p className="text-slate-400 text-sm mt-2">{member.role}</p>
                  </div>
                  <a href={member.link} target="_blank" rel="noopener noreferrer" className="mt-auto block w-full">
                    <button className="w-full flex justify-center items-center gap-2 px-3 py-2 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-lg text-sm font-bold text-white transition-all shadow-sm cursor-pointer">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white shrink-0"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      <span className="text-white">GitHub Profile</span>
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* My Contributions */}
          <section id="my-contributions" className="scroll-mt-32 bg-project-card border border-slate-800 rounded-3xl p-6 lg:p-10 mb-12 shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-700/80 text-white flex items-center gap-3" style={{ color: '#ffffff' }}>
              <span className="w-2 h-8 bg-emerald-500 rounded-full inline-block"></span>
              My Contributions
            </h2>
            <div className="mb-6 pb-6 border-b border-slate-800">
              <p className="text-lg text-slate-300 font-medium leading-relaxed">
                As <strong className="text-white">Frontend Developer &amp; Documentator</strong>, I crafted the client interface across role-specific workspaces, implemented interactive invoice document handling, and authored the technical documentation covering system architecture, security workflows, and verification mechanisms.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { title: 'Frontend UI/UX Design', desc: 'Designed and implemented intuitive, role-specific Next.js workspaces for Superadmin, Business Owners, Branch Managers, and Cashiers with responsive data visualization and dark-mode styling.' },
                { title: 'Invoice Document Handling', desc: 'Engineered client-side invoice drafting, live BIR-compliant tax calculations, automated item-catalog lookups, and asynchronous PDF generation pipelines.' },
                { title: 'Secure Document Handling & Vaulting', desc: 'Implemented private S3-compatible encrypted document archiving, versioned retrieval protocols, SHA-256 hash generation upon creation, and access-controlled file delivery.' },
                { title: 'Technical & Capstone Documentation', desc: 'Authored comprehensive project documentation detailing system architecture, data-flow diagrams, document handling lifecycles, and cryptographic verification processes.' },
              ].map((contrib, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors duration-300 shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff' }}><span className="text-emerald-400">{contrib.title}</span></h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{contrib.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </ProjectContent>
      </div>
    </div>
  );
}
