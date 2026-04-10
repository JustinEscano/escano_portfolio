import type { Metadata } from 'next';
import Image from 'next/image';
import sisLogo from '../../../assets/SIS/logo.png';
import sisDashboardSS from '../../../assets/SIS/SIS_DASHBOARD_SS.png';
import sisLoginSS from '../../../assets/SIS/SIS_LOGIN_SS.png';
import sisStatsSS from '../../../assets/SIS/SIS_STATS_SS.png';
import sisSubjectsSS from '../../../assets/SIS/SIS_SUBJECTS_SS.png';
import ProjectHero from '../../../components/project/ProjectHero';
import ProjectNav from '../../../components/project/ProjectNav';
import ProjectContent from '../../../components/project/ProjectContent';
import ScreenshotCarousel from '../../../components/project/ScreenshotCarousel';
import { ProjectNavbarTheme, ProjectDetailsNavbarTheme } from '../../../contexts/NavbarThemeContext';

export const metadata: Metadata = {
  title: 'Student Information System | Justin Escano',
  description: 'A comprehensive web-based Student Information System for managing student records, enrollment, subjects, and academic statistics.',
};

const slides = [
  {
    image: sisLoginSS,
    title: 'Login & Authentication',
    description: 'Secure role-based login system for administrators, faculty, and students with individual access privileges.',
  },
  {
    image: sisDashboardSS,
    title: 'Admin Dashboard',
    description: 'Centralized overview of enrolled students, subject loads, GWA summaries, and system-wide academic statistics.',
  },
  {
    image: sisSubjectsSS,
    title: 'Subject Management',
    description: 'Full CRUD interface for managing course offerings, subject loads per student, and credit unit tracking.',
  },
  {
    image: sisStatsSS,
    title: 'Academic Statistics',
    description: 'Visual analytics for GWA distributions, per-subject performance, and enrollment trends across academic terms.',
  },
];

export default function SISDetail() {
  const sisLogoSlot = (
    <div className="flex items-center gap-3">
      <Image src={sisLogo} alt="SIS Logo" width={56} height={56} className="drop-shadow-md rounded-xl" />
      <div className="flex flex-col">
        <span className="text-sm font-bold tracking-widest text-[#eab308] uppercase">Academic Portal</span>
        <span className="text-3xl font-black tracking-tight text-[#eab308]">Student Info System</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen theme-sis">
      <ProjectNavbarTheme scrolledBg="#800000" accent="#eab308" hoverAccent="#facc15" />

      <div className="bg-[var(--project-hero-bg)]">
        <ProjectHero
          title="Student Information System"
          description="A full-featured, web-based Student Information System designed to streamline academic administration. Handles student record management, subject enrollment, grade tracking, and real-time academic statistics through a clean, role-based dashboard. Built to serve students, faculty, and administrators from a single unified platform."
          techStack={['React', 'Node.js', 'MongoDB', 'Docker', 'Tailwind']}
          githubLink="https://github.com/JustinEscano"
          logoSlot={sisLogoSlot}
          isDark={true}
          bgClass="bg-transparent border-b-4 border-[#eab308]"
        />
      </div>

      <ProjectNav hasFeatures={true} />
      <ProjectDetailsNavbarTheme scrolledBg="#ffffff" accent="#800000" />

      <div className="bg-project-main" style={{ minHeight: '100vh', marginTop: '-1px', paddingTop: '2rem' }}>
        <ProjectContent className="text-project-body">

          {/* Screenshots Carousel */}
          <section id="key-features" className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-500 rounded-full inline-block"></span>
              Key Features
            </h2>
            <ScreenshotCarousel slides={slides} />
          </section>

          {/* About the Project */}
          <section className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-500 rounded-full inline-block"></span>
              About the System
            </h2>

            <div className="mb-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-yellow-400 transition-colors">
              <h3 className="text-2xl font-bold text-[#800000] mb-4">Primary Goal</h3>
              <p className="text-slate-600 leading-relaxed text-base">
                The Student Information System is a smart, comprehensive platform designed to manage student records, automate enrollment processes, and track academic performance. Its objective is to streamline school operations, reduce manual workload, and provide a unified, efficient portal for students, faculty, and administrators.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#800000] mb-6 border-b border-slate-200 pb-3">Core Capabilities & Features</h3>
            
            <div className="space-y-6">
              {[
                { 
                  category: '1. Superadmin Capabilities', 
                  items: [
                    { title: 'System Analytics', desc: 'Real-time dashboards displaying metrics on system usage, users, and overall academic performance.' },
                    { title: 'User Management', desc: 'Administrative control to audit, configure, and manage all Teacher and Student accounts.' },
                    { title: 'Subject Configurations', desc: 'Ability to create, delete, and control academic subjects offered by the institution.' },
                    { title: 'System Settings', desc: 'Centralized control over access protocols and role-based registration invite codes.' }
                  ] 
                },
                { 
                  category: '2. Teacher Capabilities', 
                  items: [
                    { title: 'Student Analytics', desc: 'Dive deeply into individual student performance and class-wide academic trends.' },
                    { title: 'Subject Overview', desc: 'Complete overviews of subjects taught and the students enrolled within them.' },
                    { title: 'Grade Management', desc: 'Secure interfaces to log, manage, and update student grades.' },
                    { title: 'Attendance Tracking', desc: 'Tools to record and maintain accurate historical attendance for class sessions.' },
                    { title: 'Notifications', desc: 'An integrated engine for receiving and sending relevant academic updates.' }
                  ] 
                },
                { 
                  category: '3. Student Capabilities', 
                  items: [
                    { title: 'Personal Dashboard', desc: 'A central hub showing daily academic requirements.' },
                    { title: 'Grade Progress', desc: 'Historical and current views of academic grade standings across all subjects.' },
                    { title: 'Attendance Overview', desc: 'Real-time tracking of attendance records and absentee limits.' },
                    { title: 'Course List', desc: 'Overviews of current academic workload and enrolled subjects.' }
                  ] 
                }
              ].map((group, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#800000]/40 transition-colors">
                  <h4 className="text-lg font-bold text-black mb-4">{group.category}</h4>
                  <ul className="space-y-4">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                         <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0"></span>
                         <p className="text-slate-600 text-sm leading-relaxed">
                           <strong className="text-black">{item.title}:</strong> {item.desc}
                         </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Details */}
          <section id="technical-details" className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-500 rounded-full inline-block"></span>
              Technical Architecture
            </h2>

            <div className="space-y-10 pb-6">
              {/* Stack */}
              <div>
                <h3 className="text-xl font-bold text-[#800000] mb-6">Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { name: 'React', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" /></svg> },
                    { name: 'TailwindCSS', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg> },
                    { name: 'Node.js', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg> },
                    { name: 'MongoDB', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg> },
                    { name: 'Docker', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg> }
                  ].map((tech) => (
                    <div key={tech.name} className="bg-slate-900 border border-slate-700 rounded-2xl p-4 text-center shadow-lg flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 text-yellow-500">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-bold text-slate-200">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Folder structure */}
              <div>
                <h3 className="text-xl font-bold text-[#800000] mb-6">System Modules</h3>
                <div className="w-full bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
                  <div className="flex items-center px-4 py-3 border-b border-slate-700 bg-slate-950">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="mx-auto text-xs text-slate-400 font-mono tracking-wider">student_information_system</div>
                  </div>
                  <div className="p-6 font-mono text-sm text-slate-300 overflow-x-auto space-y-1 bg-slate-900">
                    {[
                      { name: 'backend/', desc: 'Node.js/Express server logic, routes, and controllers' },
                      { name: 'models/', desc: 'Mongoose schemas defining Attendance, Grade, Subject, etc.' },
                      { name: 'src/pages/', desc: 'Role-specific React routing (Superadmin, Teacher, Student)' },
                      { name: 'sections/', desc: 'Reusable TailwindCSS-styled functional React components' },
                      { name: 'docker-compose.yml', desc: '1-click deployment autowiring both backend and frontend' },
                      { name: 'Invite.js', desc: 'Strict invite-code middleware restricting rogue registrations' },
                    ].map(folder => (
                      <div key={folder.name} className="flex items-center gap-4 hover:bg-slate-800 p-2 rounded-lg transition-colors">
                        <span className="text-yellow-400 text-xl">📁</span>
                        <div className="flex flex-col">
                          <span className="text-white font-bold">{folder.name}</span>
                          <span className="text-slate-500 text-xs">{folder.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section id="team-members" className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md">
            <h2 className="text-3xl font-bold mb-6 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-500 rounded-full inline-block"></span>
              Development Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Justin Paul Louise C. Escaño', role: 'Project Manager / Team Leader', link: 'https://github.com/JustinEscano' },
                { name: 'Gemerald De Guzman', role: 'UI/UX Designer', link: '#' },
                { name: 'Xander Posadas', role: 'Frontend Developer', link: '#' },
                { name: 'Matthew Estrada', role: 'Backend Developer', link: '#' },
                { name: 'James Rosario', role: 'Backend Developer', link: '#' },
              ].map((member, i) => (
                <div key={i} className="bg-white border border-slate-200 hover:border-[#800000] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
                  <div className="mb-5">
                    <h3 className="text-black font-bold text-lg leading-tight group-hover:text-[#800000] transition-colors duration-300">{member.name}</h3>
                    <p className="text-slate-500 text-sm mt-2">{member.role}</p>
                  </div>
                  <a href={member.link} target="_blank" rel="noopener noreferrer" className="mt-auto block w-full">
                    <button className="w-full flex justify-center items-center gap-2 px-3 py-2 bg-yellow-100 hover:bg-yellow-200 border border-yellow-200 rounded-lg text-sm font-bold text-black transition-all shadow-sm">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      GitHub Profile
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* My Contributions */}
          <section id="my-contributions" className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-500 rounded-full inline-block"></span>
              My Contributions
            </h2>
            <div className="mb-6 pb-6 border-b border-slate-200">
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                As <strong className="text-black">Project Manager and Team Leader</strong>, I oversaw the full development lifecycle of the Student Information System, coordinated the team, and contributed directly to both frontend and backend implementation.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { title: 'Project Management', desc: 'Led sprint planning, assigned tasks, and maintained the project timeline — ensuring every feature was delivered on schedule.' },
                { title: 'Frontend Development', desc: 'Built the React dashboard using TailwindCSS with distinctly separated routing patterns for Superadmin, Teacher, and Student portals.' },
                { title: 'Backend & API Design', desc: 'Architected the Node.js/Express REST API and designed the MongoDB schemas using Mongoose for complex data relationships like Attendance and Grades.' },
                { title: 'Platform Security & DevOps', desc: 'Implemented JWT-backed authentication with a strict invite-code model and configured the 1-click Docker setup for dual-server reloading.' },
              ].map((contrib, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#800000] transition-colors duration-300 shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-3"><span className="text-[#800000]">{contrib.title}</span></h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{contrib.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </ProjectContent>
      </div>
    </div>
  );
}
