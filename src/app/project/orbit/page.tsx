import type { Metadata } from 'next';
import Image from 'next/image';
import orbitIcon from '../../../assets/Orbit/ORBIT.png';
import orbitLogoName from '../../../assets/Orbit/Logo-Name.png';
import aboutSS from '../../../assets/Orbit/ABOUT_SS.png';
import dashboardSS from '../../../assets/Orbit/DASHBOARD_SS.png';
import llmSS from '../../../assets/Orbit/LLM_SS.png';
import loginSS from '../../../assets/Orbit/LOGIN_SS.png';
import usageSS from '../../../assets/Orbit/USAGE_SS.png';
import ProjectHero from '../../../components/project/ProjectHero';
import ProjectNav from '../../../components/project/ProjectNav';
import ProjectContent from '../../../components/project/ProjectContent';
import ScreenshotCarousel from '../../../components/project/ScreenshotCarousel';
import { ProjectNavbarTheme, ProjectDetailsNavbarTheme } from '../../../contexts/NavbarThemeContext';

export const metadata: Metadata = {
  title: 'Orbit | Justin Escano',
  description: 'Orbit is a smart platform that monitors room security, energy and maintenance requests to automate building operations and make facilities more efficient and comfortable.',
};

const slides = [
  {
    image: loginSS,
    title: 'Authentication',
    description: 'Secure login and registration system with session management and role-based access control for users and admins.',
  },
  {
    image: dashboardSS,
    title: 'Admin Dashboard',
    description: 'A comprehensive admin panel for managing inventory, orders, and user accounts in real time.',
  },
  {
    image: aboutSS,
    title: 'About & Branding',
    description: 'Clean about page with project branding, mission statement, and team information for a polished user experience.',
  },
  {
    image: llmSS,
    title: 'AI Assistant',
    description: 'Integrated LLM-powered chat assistant to help users navigate the store, find products, and get support.',
  },
  {
    image: usageSS,
    title: 'Usage & Analytics',
    description: 'Detailed usage tracking and analytics views to monitor product performance and customer behaviour.',
  },
];

export default function OrbitDetail() {
  const orbitLogo = (
    <div className="flex items-center gap-3">
      <Image src={orbitIcon} alt="Orbit Icon" width={52} height={52} className="drop-shadow-md" />
      <Image src={orbitLogoName} alt="Orbit" width={120} height={40} className="drop-shadow-sm" />
    </div>
  );

  return (
    <div className="min-h-screen theme-orbit">
      <ProjectNavbarTheme scrolledBg="#26273B" accent="#f97316" hoverAccent="#3b82f6" />
      <ProjectHero
        title="Orbit"
        description="Orbit is a smart platform that monitors room security, energy and maintenance requests to automate building operations and make facilities more efficient and comfortable. It uses AI for energy optimization, device diagnostic, and room analysis based on real-time data, letting users monitor everything from a web or mobile app. By simulating IoT devices, Orbit cuts costs, prevents breakdowns, and improves daily life for occupants through simple, secure controls."
        techStack={['React', 'PostgreSQL', 'MongoDB', 'Django', 'Flutter']}
        githubLink="https://github.com/JustinEscano"
        logoSlot={orbitLogo}
        isDark={true}
        bgClass="bg-[var(--project-hero-bg)] border-transparent"
      />

      <ProjectNav hasFeatures={true} />
      <ProjectDetailsNavbarTheme scrolledBg="#26273B" accent="#f97316" />

      <div className="bg-project-main" style={{ minHeight: '100vh', marginTop: '-1px', paddingTop: '2rem' }}>
        <ProjectContent className="text-project-body">
          {/* Key Features — Screenshot Carousel */}
          <section id="key-features" className="scroll-mt-32 bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-10 mb-12 shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-blue-500/50 text-accent flex items-center gap-3">
              <span className="w-2 h-8 bg-accent rounded-full inline-block"></span>
              Key Features
            </h2>
            <ScreenshotCarousel slides={slides} />
          </section>

          <section id="team-members" className="scroll-mt-32 bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-10 mb-12 shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 pb-4 border-b border-blue-500/50 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-accent rounded-full inline-block"></span>
              Team Members
            </h2>

            <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-project-body text-base sm:text-lg bg-black/20 p-4 rounded-xl border border-white/5 shadow-inner">
              <p><strong className="text-project-heading">Team Name:</strong> <span className="text-accent font-medium">Hyperion Studios</span></p>
              <div className="hidden sm:block w-px h-5 bg-white/20"></div>
              <p><strong className="text-project-heading">Section:</strong> <span className="text-blue-400 font-medium">UP-FB1S25-BSIT3-SYSDEV-02</span></p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Justin Paul Louise C. Escano', role: 'Leader / Project Manager' },
                { name: 'Ace Philip S. Denulan', role: 'Lead Developer' },
                { name: 'Matthew Cymon S. Estrada', role: 'LLM Engineer & Backend Developer' },
                { name: 'Gemerald De Guzman', role: 'UI/UX Designer' },
                { name: 'Peter R. Pagasartonga', role: 'Web & Mobile Frontend Developer' },
                { name: 'Shierwin Carl Sandino', role: 'Web Frontend Developer' },
                { name: 'David Paul Manaloto', role: 'LLM Engineer' },
                { name: 'Brian Villegas', role: 'Backend Developer' },
                { name: 'Xander Posadas', role: 'Web & Mobile Frontend' },
              ].map((member, i) => (
                <div key={i} className="bg-project-card border border-white/5 hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] group flex flex-col justify-between">
                  <div className="mb-5">
                    <h3 className="text-project-heading font-bold text-lg leading-tight group-hover:text-accent transition-colors duration-300">{member.name}</h3>
                    <p className="text-project-body opacity-80 text-sm mt-2">{member.role}</p>
                  </div>
                  <a href={`https://github.com/JustinEscano`} target="_blank" rel="noopener noreferrer" className="mt-auto block w-full">
                    <button className="w-full flex justify-center items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium text-project-body hover:text-project-heading transition-all shadow-sm hover:shadow">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      View Profile
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section id="technical-details" className="scroll-mt-32 bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-10 mb-12 shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-blue-500/50 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-accent rounded-full inline-block"></span>
              Technical Architecture
            </h2>
            
            <div className="space-y-12 pb-6">
              {/* Technology Stack */}
              <div>
                <h3 className="text-xl font-bold text-project-heading mb-6">Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { name: 'React Web', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg> },
                    { name: 'Flutter Mobile', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> },
                    { name: 'Django API', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg> },
                    { name: 'PostgreSQL', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg> },
                    { name: 'LLM Engine', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg> },
                    { name: 'ESP32 / IoT', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg> }
                  ].map((tech) => (
                    <div key={tech.name} className="bg-project-terminal border border-white/5 rounded-2xl p-4 text-center hover:border-white/20 transition-colors shadow-inner flex flex-col items-center justify-center gap-3 group">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-accent/80 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:text-accent transition-all">
                         {tech.icon}
                      </div>
                      <span className="text-sm font-medium text-project-body group-hover:text-project-heading transition-colors">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Architecture */}
              <div>
                <h3 className="text-xl font-bold text-project-heading mb-6">System Architecture & Monorepo Structure</h3>
                <div className="w-full bg-project-terminal rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                  {/* Mac-style Window Header */}
                  <div className="flex items-center px-4 py-3 border-b border-white/5 bg-project-terminal-header">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="mx-auto text-xs text-project-body opacity-80 font-mono tracking-wider">orbit_monorepo</div>
                  </div>
                  {/* Folder List Content */}
                  <div className="p-6 font-mono text-sm text-project-body overflow-x-auto space-y-1">
                    {[
                      { name: 'api', desc: 'Django REST API routing and PostgreSQL models' },
                      { name: 'iot_scripts', desc: 'Python scripts simulating real-time ESP32 sensors' },
                      { name: 'llm', desc: 'Core logic for predictive analytics and OpenAI integration' },
                      { name: 'logs', desc: 'MongoDB pipelines storing high-frequency usage metrics' },
                      { name: 'mobile', desc: 'Flutter mobile application for on-the-go monitoring' },
                      { name: 'web', desc: 'React administrative dashboards and analytics views' }
                    ].map(folder => (
                      <div key={folder.name} className="flex items-center gap-4 hover:bg-white/5 p-2 rounded-lg transition-colors">
                        <span className="text-yellow-400 text-xl">📁</span> 
                        <div className="flex flex-col">
                          <span className="text-project-heading font-bold">{folder.name}</span>
                          <span className="text-slate-500 text-xs">{folder.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <div>
                <h3 className="text-xl font-bold text-project-heading mb-6">Core Features & Integrations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Simulated Real-Time Dashboard', desc: 'Central hub displaying live metrics for HVAC, lighting, and security alarms.' },
                    { title: 'Room & Equipment Management', desc: 'Track assets, assign devices to rooms, and utilize mobile QR scanning.' },
                    { title: 'Maintenance Request System', desc: 'Integrated workflow for reporting, scheduling, and resolving facility issues.' },
                    { title: 'Energy Usage Analytics', desc: 'Visual charts mapping consumption trends and highlighting efficiency gaps.' },
                    { title: 'Predictive Maintenance', desc: 'AI-driven analysis flagging anomalies before critical failures occur.' },
                    { title: 'LLM Chat Insights', desc: 'Natural language interface returning customized building reports on demand.' },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-project-card-dim hover:bg-[var(--project-card-bg)] hover:border-white/10 transition-colors group">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent/80 group-hover:text-accent shrink-0 mt-0.5"><path d="M8 5v14l11-7z" /></svg>
                      <div>
                        <h4 className="text-project-heading font-bold text-base mb-1.5">{feature.title}</h4>
                        <p className="text-project-body opacity-80 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="my-contributions" className="scroll-mt-32 bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-10 mb-12 shadow-2xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-blue-500/50 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-accent rounded-full inline-block"></span>
              My Contributions
            </h2>
            <div className="space-y-6">
              <div className="bg-project-card-dim border border-white/5 rounded-2xl p-6 hover:bg-[var(--project-card-bg)] transition-colors duration-300">
                <h3 className="text-xl font-bold text-project-heading mb-3 flex items-center gap-2"><span className="text-accent">Project Leadership & Management</span></h3>
                <p className="text-project-body leading-relaxed text-sm lg:text-base">
                  As the primary Project Manager, I coordinated across the entire development team establishing core feature roadmaps and ensuring milestones were met smoothly. By designing the overarching MVC architecture and facilitating cross-discipline discussions, I ensured the simulated IoT hardware integrations perfectly aligned with our dual-frontend deployment goals.
                </p>
              </div>

              <div className="bg-project-card-dim border border-white/5 rounded-2xl p-6 hover:bg-[var(--project-card-bg)] transition-colors duration-300">
                <h3 className="text-xl font-bold text-project-heading mb-3 flex items-center gap-2"><span className="text-accent">Frontend Web Application (React)</span></h3>
                <p className="text-project-body leading-relaxed text-sm lg:text-base">
                  I spearheaded the development of the responsive React web administration panel using Material UI. This included constructing the primary dashboard interfaces, mapping simulated sensor data onto actionable status monitors, and finalizing state management to integrate the LLM chat feature directly into the admin experience.
                </p>
              </div>

              <div className="bg-project-card-dim border border-white/5 rounded-2xl p-6 hover:bg-[var(--project-card-bg)] transition-colors duration-300">
                <h3 className="text-xl font-bold text-project-heading mb-3 flex items-center gap-2"><span className="text-accent">Backend & API Systems (Django)</span></h3>
                <p className="text-project-body leading-relaxed text-sm lg:text-base">
                  On the server-side, I architected the Django REST API from the ground up to handle high-volume status logic. I modeled complex PostgreSQL relationships for user authentication and equipment tracking, established the data pipeline merging ESP32 IoT feeds, and authored foundational endpoints serving the LLM analytics to the front-facing dashboards.
                </p>
              </div>
            </div>
          </section>
        </ProjectContent>
      </div>
    </div>
  );
}
