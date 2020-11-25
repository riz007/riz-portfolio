import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    logo: 'project.jpg',
    company: 'Manatal Co. Ltd. (2019 - Current)',
    position: 'Software Developer',
    info: '',
    projects: 'Applicant Tracking System, WordPress website',
  },
  {
    id: nanoid(),
    logo: 'project.jpg',
    company: 'Pocket Playlab (2018- 2019)',
    position: 'Software Engineer',
    info: 'Playlab is a leading game developer & publisher that\'s grown from six passionate gamers to a team of 100+ gaming fanatics striving to create the best games.',
    projects: 'Online auction website, Email Notification System, WordPress based brand websites, Fixed auction website',
  },
  {
    id: nanoid(),
    logo: 'project.jpg',
    company: 'XYZprinting (2016 - 2018)',
    position: 'Software Engineer',
    info: 'Founded in 2013, XYZprinting is dedicated to bringing cost-effective 3D printing to consumers and businesses around the world. ',
    projects: '3D Gallery application, XYZprinting E-Store, STEAM, XYZprinting main website',
  },
];

// SKILLS DATA

export const skillsData = [
  {
    id: nanoid(),
    logo: 'html.png',
    skill: 'HTML',
  },
  {
    id: nanoid(),
    logo: 'css.png',
    skill: 'CSS',
  },
  {
    id: nanoid(),
    logo: 'javascript.png',
    skill: 'JavaScript',
  },
  {
    id: nanoid(),
    logo: 'vue.png',
    skill: 'Vue',
  },
  {
    id: nanoid(),
    logo: 'node.png',
    skill: 'Node.js',
  },
  {
    id: nanoid(),
    logo: 'java.png',
    skill: 'Java',
  },
  {
    id: nanoid(),
    logo: 'sql.png',
    skill: 'SQL',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rizwanulrudra@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/rizwanulrudra',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rizishere/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/riz007',
    },
  ],
};
