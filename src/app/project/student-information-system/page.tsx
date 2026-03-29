import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import sisIcon from '../../../assets/SIS/logo.png';
import ProjectHero from '../../../components/project/ProjectHero';
import ProjectNav from '../../../components/project/ProjectNav';
import ProjectContent from '../../../components/project/ProjectContent';
import { ProjectNavbarTheme, ProjectDetailsNavbarTheme } from '../../../contexts/NavbarThemeContext';

export const metadata: Metadata = {
  title: 'Information Assurance Study | Justin Escano',
  description: 'Strengthening Information Assurance and Security through Technical and Corrective Measures.',
};

export default function SISDetail() {
  const sisLogo = (
    <div className="flex items-center gap-3">
      <Image src={sisIcon} alt="SIS Logo" width={52} height={52} className="drop-shadow-md rounded-lg" />
      <div className="flex flex-col">
          <span className="text-sm font-bold tracking-widest text-[#eab308] uppercase">Oakridge International</span>
          <span className="text-3xl font-black tracking-tight text-white">Assurance Study</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen theme-sis bg-[var(--project-bg)]">
      <ProjectNavbarTheme scrolledBg="#800000" accent="#eab308" hoverAccent="#f59e0b" />
      
      <div className="bg-[var(--project-hero-bg)]">
         <ProjectHero
            title="An Information Assurance Study"
            description="Strengthening Information Assurance and Security through Technical and Corrective Measures: A Complementary Case of Oakridge International School, and Beyond. This project explores the vulnerabilities introduced by rapid digital transformation in urban mid-sized institutions and outlines comprehensive technical, administrative, and physical safeguards."
            techStack={['Cybersecurity', 'Risk Assessment', 'Information Assurance']}
            logoSlot={sisLogo}
            isDark={true}
            bgClass="bg-transparent border-b-4 border-[#eab308]"
         />
      </div>

      <ProjectNav hasFeatures={true} />
      <ProjectDetailsNavbarTheme scrolledBg="#ffffff" accent="#eab308" />

      <div className="bg-project-main" style={{ minHeight: '100vh', marginTop: '-1px', paddingTop: '2rem' }}>
        <ProjectContent className="text-project-body">
          
          {/* Introduction & Purpose */}
          <section id="key-features" className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-500 rounded-full inline-block"></span>
              Project Purpose & Introduction
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm transition-all hover:border-yellow-400">
                 <h3 className="text-xl font-bold text-[#800000] mb-4 border-b pb-2">About Oakridge International</h3>
                 <p className="text-project-body leading-relaxed opacity-90 text-sm">
                    Situated inside Dagupan City, Oakridge International School of Young Leaders (OISYL) provides education from kindergarten through junior high school. The shift to online learning during the COVID-19 pandemic forced a high dependency on digital classrooms, records, and documentation. However, this transition left them vulnerable to phishing, data access breaches, and technical failures.
                 </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm transition-all hover:border-yellow-400">
                 <h3 className="text-xl font-bold text-[#800000] mb-4 border-b pb-2">Why This Organization?</h3>
                 <p className="text-project-body leading-relaxed opacity-90 text-sm">
                    Oakridge represents a critical sector of the education system adapting to technological advancements. Through evaluating their administrative and physical safeguards versus their limited technical preventive/detective measures, we created a learning ground to formulate security strategies applicable to many urban mid-sized institutions undergoing digital transformation.
                 </p>
              </div>
            </div>
          </section>

          {/* Identified Risks */}
          <section id="technical-details" className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-500 rounded-full inline-block"></span>
              Identified Risks & Vulnerabilities
            </h2>
            
            <div className="space-y-8 pb-6">
              <div>
                <h3 className="text-xl font-bold text-[#800000] mb-6">Threat Profiles</h3>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-sm border-l-4 border-l-red-500">
                        <h4 className="font-bold text-lg mb-2 text-project-heading">Deliberate Cyber Attacks</h4>
                        <p className="text-sm text-project-body opacity-80">Phishing, brute-force attempts, unauthorized administrative access, and ransomware targeting digital learning platforms and student records.</p>
                    </div>
                    <div className="flex-1 bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-sm border-l-4 border-l-blue-500">
                        <h4 className="font-bold text-lg mb-2 text-project-heading">Acts of God</h4>
                        <p className="text-sm text-project-body opacity-80">Situated in Dagupan, the school is highly vulnerable to typhoons and flooding capable of destroying physical facilities and servers.</p>
                    </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#800000] mb-6">Core Vulnerabilities</h3>
                <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col">
                  <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-950">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="mx-auto text-xs text-slate-400 font-mono tracking-wider">vulnerability_scan.log</div>
                  </div>
                  <div className="p-6 font-mono text-sm text-slate-300 overflow-x-auto space-y-3">
                     <p className="flex gap-4"><span className="text-red-400">WARN</span> <span>Weak or missing firewall and intrusion detection system.</span></p>
                     <p className="flex gap-4"><span className="text-red-400">WARN</span> <span>Limited backup and disaster recovery procedures.</span></p>
                     <p className="flex gap-4"><span className="text-yellow-400">INFO</span> <span>Insufficient IT manpower to handle support and active monitoring.</span></p>
                     <p className="flex gap-4"><span className="text-red-400">WARN</span> <span>No structured incident response plan.</span></p>
                     <p className="flex gap-4"><span className="text-yellow-400">INFO</span> <span>High dependence on third-party apps with unclear data protection.</span></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recommendations */}
          <section id="my-contributions" className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-500 rounded-full inline-block"></span>
              Recommendations & Policies
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {[
                { title: 'Third Party Data Management', target: 'Administrative & Technical (Preventive)', desc: 'Partner strictly with legal entities that verify the security dissemination of the school’s data, particularly for remote grading platforms.' },
                { title: 'AI Technologies Implementation', target: 'Administrative (Preventive)', desc: 'Implement third-party AI detection services to verify student output originality. Proper orientation on ethical AI use is required.' },
                { title: 'Endpoint Computer Security', target: 'Technical (Preventive & Detective)', desc: 'Install enterprise-level security tools like Bit Defender on all campus terminals to prevent unauthorized malicious downloads.' },
                { title: 'Future Technologies (IDS / Scanning)', target: 'Technical (Preventive)', desc: 'Provision Snort for network intrusion detection against suspicious traffic, and Netsparker for vulnerability scanning on web apps.' },
              ].map((contrib, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#800000] transition-colors duration-300 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500 group-hover:bg-[#800000] transition-colors"></div>
                  <h3 className="text-lg font-bold text-project-heading mb-1">{contrib.title}</h3>
                  <span className="text-xs font-bold text-[#800000] mb-4 inline-block">{contrib.target}</span>
                  <p className="text-project-body leading-relaxed text-sm opacity-90">
                    {contrib.desc}
                  </p>
                </div>
               ))}
            </div>

            <div className="bg-[#800000] text-white rounded-2xl p-8 shadow-xl">
               <h3 className="text-2xl font-bold mb-4">Proposed Security Policies</h3>
               <div className="space-y-4">
                 <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <h4 className="font-bold text-yellow-400 mb-2">Password & MFA Policy</h4>
                    <p className="text-sm leading-relaxed opacity-90">Oakridge must enforce accounts to use at least 12 characters combining uppercase, lowercase, numbers, and symbols. Multi-Factor Authentication (MFA) must be strictly implemented for all faculty and administrative accounts.</p>
                 </div>
                 <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <h4 className="font-bold text-yellow-400 mb-2">Continuous Assessment Cycle</h4>
                    <p className="text-sm leading-relaxed opacity-90">Adopt an annual overall review architecture utilizing cybersecurity self-assessment tools, internal peer reviews, and tracking templates to detect evolving vulnerabilities before exploitation.</p>
                 </div>
               </div>
            </div>
          </section>

          {/* Research Team Members */}
          <section id="team-members" className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-500 rounded-full inline-block"></span>
              Research Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Justin Paul Louise C. Escaño', role: 'Project Manager / Team Leader' },
                { name: 'Gemerald De Guzman', role: 'Risk Assessment Specialist' },
                { name: 'Xander Posadas', role: 'Risk Assessment Specialist' },
                { name: 'Matthew Estrada', role: 'Security Controls Researcher' },
                { name: 'James Rosario', role: 'Security Controls Researcher' },
              ].map((member, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <div className="mb-2">
                    <h3 className="text-project-heading font-bold text-lg leading-tight">{member.name}</h3>
                    <p className="text-[#800000] font-medium text-sm mt-2">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </ProjectContent>
      </div>
    </div>
  );
}
