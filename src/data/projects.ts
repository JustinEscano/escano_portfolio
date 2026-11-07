import orbitLogo from '../assets/Orbit/Logo-Name.png';
import orbitIcon from '../assets/Orbit/ORBIT.png';
import aboutSS from '../assets/Orbit/ABOUT_SS.png';
import dashboardSS from '../assets/Orbit/DASHBOARD_SS.png';
import llmSS from '../assets/Orbit/LLM_SS.png';
import loginSS from '../assets/Orbit/LOGIN_SS.png';
import usageSS from '../assets/Orbit/USAGE_SS.png';
import watchoutAppIcon from '../assets/Watch Out/Watchout Icon.png';
import watchoutLogoImg from '../assets/Watch Out/WatchOut Logo.png';
import watchoutTitleSS from '../assets/Watch Out/WATCH_TITLE_SS.png';
import watchoutGameplaySS from '../assets/Watch Out/WATCH_GAMEPLAY_SS.png';
import sisLogo from '../assets/SIS/logo.png';
import sisDashboardSS from '../assets/SIS/SIS_DASHBOARD_SS.png';
import sisLoginSS from '../assets/SIS/SIS_LOGIN_SS.png';
import sisStatsSS from '../assets/SIS/SIS_STATS_SS.png';
import sisSubjectsSS from '../assets/SIS/SIS_SUBJECTS_SS.png';
import finshieldAdminSS from '../assets/Finshield/Admin Dashboard.png';
import finshieldSuperadminSS from '../assets/Finshield/Superadmin Dashboard.png';
import finshieldInvoiceSS from '../assets/Finshield/Invoice Creation.png';
import finshieldReportsSS from '../assets/Finshield/Business Owner Reports.png';

import type { StaticImageData } from 'next/image';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  thumbnail?: string | StaticImageData;
  images?: (string | StaticImageData)[];
  logo?: string | StaticImageData;
  icon?: string | StaticImageData;
  themeClass?: string;
  githubLink?: string;
  liveLink?: string;
  features?: string[];
  type?: 'team' | 'solo';
  showAccentTags?: boolean;
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
    githubLink: 'https://github.com/JustinEscano',
    features: [
      'Simulated Real-Time Dashboard',
      'Room & Equipment Management',
      'Maintenance Request System',
      'Energy Usage Analytics',
      'Predictive Maintenance',
      'LLM Chat Insights',
    ],
  },
  {
    id: 'watchout',
    title: 'Watch Out!',
    description: 'A fun, back-to-basics pixelated platformer game about reaching the highest stage you can depending on your skill level. Inspired by retro classics, Watch Out! brings back the charm of old-school platforming with a modern touch.',
    techStack: ['Python', 'Pygame', 'Platformer', 'Retro'],
    type: 'team',
    thumbnail: watchoutTitleSS,
    images: [watchoutTitleSS, watchoutGameplaySS],
    logo: watchoutLogoImg,
    icon: watchoutAppIcon,
    themeClass: 'theme-watchout',
    showAccentTags: true,
    githubLink: 'https://github.com/JTPOdev/WatchOut.git',
  },
  {
    id: 'student-information-system',
    title: 'Student Information System',
    description: 'A comprehensive web-based Student Information System for managing student records, enrollment, subjects, grades, and academic statistics in one unified platform.',
    longDescription: 'A full-featured Student Information System designed to streamline academic administration. Handles student records, subject enrollment, grade management, and real-time academic statistics through an intuitive dashboard.',
    techStack: ['React', 'Django', 'PostgreSQL'],
    type: 'team',
    thumbnail: sisDashboardSS,
    images: [sisLoginSS, sisDashboardSS, sisSubjectsSS, sisStatsSS],
    logo: sisLogo,
    themeClass: 'theme-sis',
    showAccentTags: true,
    githubLink: 'https://github.com/JustinEscano',
    features: [
      'Student record management',
      'Subject enrollment tracking',
      'Grade and GWA computation',
      'Academic statistics dashboard',
      'Role-based access control',
    ],
  },
  {
    id: 'finshield',
    title: 'FinShield',
    description: 'An enterprise invoice management and blockchain verification system that anchors document hashes on Polygon and leverages Redis/BullMQ outbox processing and visual diff analysis.',
    longDescription: 'FinShield is an invoice management and blockchain protection verification system designed to prevent fraud, ensure document integrity, and streamline operational billing. Featuring a layered service-oriented architecture, FinShield combines Next.js, Express.js, PostgreSQL/Prisma, Redis & BullMQ outbox workers, private S3 storage, Polygon blockchain anchoring, and Python document-difference analysis.',
    techStack: ['Next.js', 'Express.js', 'PostgreSQL', 'Polygon', 'Redis', 'Python'],
    type: 'team',
    thumbnail: finshieldAdminSS,
    images: [finshieldAdminSS, finshieldSuperadminSS, finshieldInvoiceSS, finshieldReportsSS],
    themeClass: 'theme-finshield',
    showAccentTags: true,
    githubLink: 'https://github.com/JustinEscano',
    features: [
      'Polygon blockchain cryptographic anchoring',
      'Asynchronous BullMQ worker queues',
      'Private S3-compatible encrypted vault',
      'FastAPI & PyMuPDF visual diff analysis',
      'Multi-tenant role-based access control',
      'BIR-compliant invoice and refund approval',
    ],
  },
];