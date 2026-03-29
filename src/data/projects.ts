import orbitLogo from '../assets/Orbit/Logo-Name.png';
import orbitIcon from '../assets/Orbit/ORBIT.png';
import aboutSS from '../assets/Orbit/ABOUT_SS.png';
import dashboardSS from '../assets/Orbit/DASHBOARD_SS.png';
import llmSS from '../assets/Orbit/LLM_SS.png';
import loginSS from '../assets/Orbit/LOGIN_SS.png';
import usageSS from '../assets/Orbit/USAGE_SS.png';
import watchoutAppIcon from '../assets/Watch Out/Watchout Icon.png';
import watchoutLogoImg from '../assets/Watch Out/WatchOut Logo.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  thumbnail?: string | any;
  images?: string[] | any[];
  logo?: string | any;
  icon?: string | any;
  themeClass?: string;
  githubLink?: string;
  liveLink?: string;
  features?: string[];
  type?: 'team' | 'solo';
}

export const projects: Project[] = [
  {
    id: 'orbit',
    title: 'Orbit',
    description: 'Orbit is a smart platform that monitors room security, energy and maintenance requests to automate building operations and make facilities more efficient and comfortable.',
    longDescription: 'Orbit is a smart platform that monitors room security, energy and maintenance requests to automate building operations and make facilities more efficient and comfortable. It uses AI for energy optimization, device diagnostic, and room analysis based on real-time data, letting users monitor everything from a web or mobile app. By simulating IoT devices, Orbit cuts costs, prevents breakdowns, and improves daily life for occupants through simple, secure controls.',
    techStack: ['React', 'PostgreSQL', 'MongoDB', 'Django', 'Flutter'],
    type: 'team',
    thumbnail: loginSS,
    images: [loginSS, dashboardSS, aboutSS, llmSS, usageSS],
    logo: orbitLogo,
    icon: orbitIcon,
    themeClass: 'theme-orbit',
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    features: [
      'User authentication and profiles',
      'Product search and filtering',
      'Shopping cart with quantity management',
      'Secure checkout with Stripe',
      'Order history and tracking',
      'Admin dashboard for inventory management',
    ],
  },
  {
    id: 'watchout',
    title: 'Watch Out!',
    description: 'A fun, back-to-basics pixelated platformer game about reaching the highest stage you can depending on your skill level. Inspired by retro classics, Watch Out! brings back the charm of old-school platforming with a modern touch.',
    techStack: ['Python', 'Pygame', 'Platformer', 'Retro'],
    type: 'team',
    thumbnail: watchoutLogoImg,
    images: [watchoutAppIcon, watchoutLogoImg],
    logo: watchoutLogoImg,
    icon: watchoutAppIcon,
    themeClass: 'theme-watchout',
    githubLink: 'https://github.com/JTPOdev/WatchOut.git',
  },
  {
    id: 'student-information-system',
    title: 'Student Information System',
    description: 'Real-time weather application with forecasts and interactive maps.',
    longDescription: 'Weather application that provides current conditions, 5-day forecasts, and interactive weather maps. Integrates with multiple weather APIs and includes location detection.',
    techStack: ['React', 'OpenWeatherMap API', 'Chart.js', 'CSS Modules'],
    type: 'team',
    thumbnail: '/images/projects/weather.jpg',
    githubLink: 'https://github.com/yourusername/weather-dashboard',
    liveLink: 'https://weather-demo.com',
    features: [
      'Current weather conditions',
      '5-day weather forecast',
      'Interactive weather maps',
      'Location detection',
      'Search by city name',
      'Temperature unit conversion',
    ],
  },
];