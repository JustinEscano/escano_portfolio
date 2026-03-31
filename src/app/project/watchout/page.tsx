import type { Metadata } from 'next';
import Image from 'next/image';
import watchoutIcon from '../../../assets/Watch Out/WatchOut Logo.png';
import watchoutAppIcon from '../../../assets/Watch Out/Watchout Icon.png';
import watchoutTitleSS from '../../../assets/Watch Out/WATCH_TITLE_SS.png';
import watchoutGameplaySS from '../../../assets/Watch Out/WATCH_GAMEPLAY_SS.png';
import ProjectHero from '../../../components/project/ProjectHero';
import ProjectNav from '../../../components/project/ProjectNav';
import ProjectContent from '../../../components/project/ProjectContent';
import ScreenshotCarousel from '../../../components/project/ScreenshotCarousel';
import { ProjectNavbarTheme, ProjectDetailsNavbarTheme } from '../../../contexts/NavbarThemeContext';

export const metadata: Metadata = {
  title: 'Watch Out! | Justin Escano',
  description: 'A pixelated platforming adventure — survive, jump, and reach the highest stage!',
};

const slides = [
  {
    image: watchoutTitleSS,
    title: 'Title Screen',
    description: 'Retro-inspired main menu with arcade aesthetics and chiptune music that sets the nostalgic mood before gameplay begins.',
  },
  {
    image: watchoutGameplaySS,
    title: 'Gameplay',
    description: 'Navigate platforms, dodge obstacles, collect flags, and survive as long as possible to climb through progressively harder stages.',
  },
];

export default function WatchoutDetail() {
  const watchoutLogo = (
    <div className="flex items-center gap-4">
      <Image src={watchoutAppIcon} alt="Watchout Icon" width={80} height={80} className="drop-shadow-md rounded-2xl" />
      <Image src={watchoutIcon} alt="Watchout Logo" width={120} height={120} className="drop-shadow-md" />
    </div>
  );

  return (
    <div className="min-h-screen theme-watchout">
      <ProjectNavbarTheme scrolledBg="#f8fafc" accent="#eab308" hoverAccent="#f59e0b" />
      <ProjectHero
        title="Watch Out!"
        description="Watch Out! is an exciting pixelated platforming game where you control a character that must jump across platforms, avoid obstacles, and dodge projectiles. The goal is simple — survive as long as you can and reach the highest stage possible. As you progress, difficulty gradually increases, accompanied by visual and environmental changes that reflect each stage's theme. This project serves as both a creative outlet and a tribute to retro games."
        techStack={['Python', 'Pygame', 'Platformer', 'Retro']}
        githubLink="https://github.com/JTPOdev/WatchOut.git"
        logoSlot={watchoutLogo}
        isDark={false}
        bgClass="bg-[var(--project-hero-bg)] border-b border-slate-200"
      />

      <ProjectNav hasFeatures={true} />
      <ProjectDetailsNavbarTheme scrolledBg="#ffffff" accent="#eab308" />

      <div className="bg-project-main" style={{ minHeight: '100vh', marginTop: '-1px', paddingTop: '2rem' }}>
        <ProjectContent className="text-project-body">

          {/* Screenshots Carousel */}
          <section id="key-features" className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-[var(--project-accent)] rounded-full inline-block"></span>
              Screenshots
            </h2>
            <ScreenshotCarousel slides={slides} />
          </section>

          {/* How to Play & Features */}
          <section className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-[var(--project-accent)] rounded-full inline-block"></span>
              How to Play &amp; Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                 <h3 className="text-xl font-bold text-black mb-4 border-b pb-2">How to Play</h3>
                 <ul className="space-y-3 font-medium text-slate-600">
                    <li className="flex gap-2"><span className="text-yellow-500">🕹️</span> Navigate platforms using arrow keys or WASD</li>
                    <li className="flex gap-2"><span className="text-yellow-500">⬆️</span> Jump to avoid the pursuing obstacles</li>
                    <li className="flex gap-2"><span className="text-yellow-500">🚩</span> Collect all flags scattered across each level to win</li>
                    <li className="flex gap-2"><span className="text-yellow-500">🔥</span> Survive through increasingly difficult stages and climb the leaderboard!</li>
                 </ul>
              </div>

              <div className="space-y-4">
                  {[
                    { title: 'Retro Main Menu', desc: 'Arcade-inspired interface with nostalgic background music that sets the mood.' },
                    { title: 'Platforming Action', desc: 'Navigate platforms, dodge obstacles, and collect flags to advance.' },
                    { title: 'Progressive Difficulty', desc: 'Each stage raises the challenge with faster obstacles and tighter jumps.' },
                    { title: 'Dynamic Environments', desc: 'Visual themes change as you advance, creating an immersive experience.' }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-yellow-400 transition-colors group shadow-sm">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5"><path d="M8 5v14l11-7z" /></svg>
                      <div>
                        <h4 className="text-black font-bold text-base mb-1">{feature.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* Team Members */}
          <section id="team-members" className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-[var(--project-accent)] rounded-full inline-block"></span>
              Development Team
            </h2>

            <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-slate-700 text-base sm:text-lg bg-slate-100 p-4 rounded-xl shadow-inner border border-slate-200">
              <p><strong className="text-black">Group Name:</strong> <span className="font-bold text-yellow-600">IT-terns</span></p>
              <div className="hidden sm:block w-px h-5 bg-slate-300"></div>
              <p><strong className="text-black">Section:</strong> <span className="font-bold text-slate-700">UP-FA1-BSIT1-01</span></p>
              <div className="hidden sm:block w-px h-5 bg-slate-300"></div>
              <p><strong className="text-black">Date:</strong> <span className="font-bold text-slate-700">October 2023</span></p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Justin Paul Louise Escaño', role: 'Backend' },
                { name: 'Dirk Stephen Moyano', role: 'Documentations / PPTs' },
                { name: 'Earl Paras', role: 'Documentations / Portfolios' },
                { name: 'Jorose Po', role: 'Assets / Backend / Frontend' },
                { name: 'Ezekiel Norad Vidal', role: 'Backend' },
              ].map((member, i) => (
                <div key={i} className="bg-white border border-slate-200 hover:border-yellow-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg group flex flex-col justify-between">
                  <div className="mb-5">
                    <h3 className="text-black font-bold text-lg leading-tight group-hover:text-yellow-600 transition-colors duration-300">{member.name}</h3>
                    <p className="text-slate-500 text-sm mt-2">{member.role}</p>
                  </div>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="mt-auto block w-full">
                    <button className="w-full flex justify-center items-center gap-2 px-3 py-2 bg-yellow-100 hover:bg-yellow-200 border border-yellow-200 rounded-lg text-sm font-bold text-black transition-all shadow-sm">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                      GitHub Profile
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Details */}
          <section id="technical-details" className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-[var(--project-accent)] rounded-full inline-block"></span>
              Technical Architecture
            </h2>

            <div className="space-y-12 pb-6">
              {/* Technology Stack */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6">Technology Stack</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { name: 'Python 3.10+', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg> },
                    { name: 'Pygame', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7" /></svg> },
                    { name: 'PyInstaller', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg> },
                  ].map((tech) => (
                    <div key={tech.name} className="bg-project-terminal border border-slate-700 rounded-2xl p-4 text-center shadow-lg flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 text-yellow-500">
                         {tech.icon}
                      </div>
                      <span className="text-sm font-bold text-slate-200">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Game Assets File Explorer */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6">Game Assets &amp; File Explorer</h3>
                <div className="w-full bg-project-terminal rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
                  <div className="flex items-center px-4 py-3 border-b border-slate-700 bg-project-terminal-header">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="mx-auto text-xs text-slate-400 font-mono tracking-wider">WatchOut &gt; assets</div>
                  </div>
                  <div className="p-6 font-mono text-sm text-slate-300 overflow-x-auto space-y-1 bg-slate-900">
                    {[
                      { name: 'Images/Logo', desc: 'WatchOut Logo.png, Game Over.png, You Won.png' },
                      { name: 'Images/MainCharacter', desc: 'Jim.png character sprite animations' },
                      { name: 'Images/Enemy', desc: 'Flame enemy and hazard sprites' },
                      { name: 'Images/Blocks', desc: 'Platform tiles and collision blocks' },
                      { name: 'Images/Environment', desc: 'Parallax background layers and sky' },
                      { name: 'Audio', desc: '8-bit chiptune theme music and SFX' }
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

          {/* My Contributions */}
          <section id="my-contributions" className="scroll-mt-32 bg-project-card border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-md backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-slate-300 text-project-heading flex items-center gap-3">
              <span className="w-2 h-8 bg-[var(--project-accent)] rounded-full inline-block"></span>
              My Contributions
            </h2>
            <div className="mb-6 pb-6 border-b border-slate-200">
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                As a key contributor to <strong className="text-black">Watch Out!</strong>, I was responsible for creating the visual identity and core gameplay mechanics of the game. Here's what I brought to the project:
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { title: 'Player Movement', desc: 'Implemented smooth character controls with jump physics and collision detection using pure Pygame math.' },
                { title: 'Level Design & Environment', desc: 'Created map layouts with progressive difficulty, strategic flag placements, and parallax scrolling backgrounds.' },
                { title: 'Frontend & Backend Logic', desc: 'Developed core game logic arrays, menu state management, and the overall game loop.' },
              ].map((contrib, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-yellow-400 transition-colors duration-300 shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-3 flex items-center gap-2"><span className="text-yellow-600">{contrib.title}</span></h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {contrib.desc}
                  </p>
                </div>
               ))}
            </div>
          </section>

        </ProjectContent>
      </div>
    </div>
  );
}
