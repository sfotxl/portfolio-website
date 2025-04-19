import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Kalani Man',
  title: "Aloha, world! I'm Kalani",
  description:
    "I'm a Full Stack Developer with over four years of experience building enterprise web and mobile applications using React, TypeScript, GraphQL, and more. I recently completed my Computer Science degree at Western Governors University, where I worked extensively with Java, Python, SQL, and C++.",
  resumeLink:
    'https://docs.google.com/document/d/1mfCYfhC1stysR3AqpswHcakWL7wVKwoi/edit?usp=drive_link&ouid=103370533214088304900&rtpof=true&sd=true',
};

export const openSource = {
  githubUserName: 'sfotxl',
};

export const contact = {};

export const socialLinks = {
  instagram: 'https://www.instagram.com/sfotxl',
  github: 'https://github.com/sfotxl',
  linkedin: 'https://www.linkedin.com/in/iahtxl/',
};

export const skillsSection = {
  title: 'Skills & Proficiencies',
  subTitle: 'Full stack developer eager to explore every stack',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
          'Building responsive, mobile-first Single-Page-Apps (SPA) with React.js',
          'Building responsive static websites using Bootstrap, CSS, and Sass',
          'Building RESTful APIs in Node.js & Express.js',
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'Sass',
          fontAwesomeClassname: 'vscode-icons:file-type-sass',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: `React`,
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: `React Native`,
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Next',
          fontAwesomeClassname: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Node',
          fontAwesomeClassname: 'fa-brands:node',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassname: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassname: 'logos:yarn',
        },
        {
          skillName: 'jQuery',
          fontAwesomeClassname: 'logos:jquery',
        },
        {
          skillName: 'Expo',
          fontAwesomeClassname: 'vscode-icons:file-type-light-expo',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassname: 'vscode-icons:file-type-sentry',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        'Experience working on multiple cloud platforms',
        'Hosting and maintaining websites on virtual machine instances',
        'Integrating NoSQL databases',
      ],
      softwareSkills: [
        // ? Check README To get icon details
        // {
        //   skillName: 'AWS',
        //   fontAwesomeClassname: 'logos:aws',
        // },
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'logos:heroku-icon',
        },
        {
          skillName: 'Github',
          fontAwesomeClassname: 'akar-icons:github-fill',
        },
        {
          skillName: 'Netlify',
          fontAwesomeClassname: 'logos:netlify',
        },
      ],
    },
  ],
};

export const educationInfo = [
  {
    schoolName: 'Western Governors University',
    subHeader: 'Bachelor of Science, Computer Science',
    desc: 'Coursework included Computer Architecture, Data Structures & Algorithms I & II, Machine Learning, AI, and Database Management, focused on Python, Java, C++, and SQL.',
    descBullets: [
      'Programmed a self-adjusting algorithm to predict airline passenger numbers with Python, pandas, and scikit-learn, with Matplotlib for visualizations to improve business decision-making.',
      'Designed and coded a Python-based package delivery optimization to streamline performance and ensure business efficiency.',
      'Coded a localized website for an international hotel using Angular, Spring Boot, and Docker.'
    ],
  },
  {
    schoolName: 'Nucamp Coding Bootcamp',
    subHeader: 'Full Stack Web + Mobile Development Bootcamp',
    duration: 'January 2022 - August 2022',
    desc: 'Built multiple React web-based apps, an Android app using React Native, a Bootstrap site, and led a successful group project from wireframing to deployment',
    grade: 'Graduated with Honors',
    descBullets: [
      'Natives in Tech scholarship, designed to increase the representation of Native American Web and Mobile Developers in the tech industry.',
    ],
  },
];

export const experience = [
  {
    role: 'Software Developer',
    company: 'Reynolds & Reynolds',
    companylogo: '/img/reynoldslogo.jpg',
    date: 'September 2022 - present',
    desc: 'At The Reynolds and Reynolds Company, my focus is on crafting user-centric software that meets the rigorous demands of our international client base.',
    descBullets: [
      'Spearhead the development of modular, reusable components for enterprise-level web, mobile, and desktop applications using React, React Native, TypeScript, and Sass/CSS to convert Figma designs into code.',
      `"Owned" a critical third-party integration by negotiating directly with upper management at the head of the third party to hire staff to develop bridge solution necessary for our integration with their software, saving my company an estimated 14 weeks of development time.`,
      `Go-to developer for mentoring and onboarding front-end developers in version control, frameworks, and company coding standards.`,
      `Consistently recruited for high-profile company projects that convert legacy products into modern solutions on tight deadlines.`,
    ]
  },
];

export const projects = [
  {
    name: "Dragon's Lair Smoked Fine Goods",
    desc: 'Informational mobile-first responsive website built with Bootstrap that showcases products for a small business in North Houston.',
    github: 'https://github.com/sfotxl/dragonslair',
    link: 'https://dragonslair.netlify.app/',
  },
  {
    name: "Reactified Dragon's Lair",
    desc: "A Reactified version of the Dragon's Lair website.",
    github: 'https://github.com/sfotxl/dragonslairreactapp',
    link: 'https://dragonslairfinegoods.netlify.app',
  },
  {
    name: 'Itinerary App',
    desc: 'An interactive itinerary app I built for a summer trip to Europe',
    github: 'https://github.com/sfotxl/itineraryapp',
    link: 'https://hamburg.netlify.app',
  },
  {
    name: 'Wide Body Tracker',
    desc: 'A React Native app for tracking wide body aircraft in Houston, San Francisco, and Los Angeles',
    github: 'https://github.com/sfotxl/wide-body-tracker',
  },
];

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Kalani Man',
  description: 'A passionate Full Stack Web and Mobile Developer',
  author: 'Kalani Man',
  image: 'https://avatars.githubusercontent.com/u/31608969?s=400&u=ce1b469702664f6c5b9ef66107161e9d6c158352&v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Kalani Man',
    'sfotxl',
    '@kalaniman',
    '@kalani_man',
    'Developer Portfolio',
    'Kalani Portfolio ',
    'Kalani Man Portfolio',
  ],
};
