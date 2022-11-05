import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Kalani Man',
  title: "Aloha! I'm Kalani",
  description:
    "I'm a passionate Full Stack web and mobile developer with experience using JavaScript, MongoDB, Express.js, React.js, Node.js, React Native, Bootstrap, HTML5, CSS, and Git. I have a strong operations management background leading teams of over 40.",
  resumeLink:
    'https://drive.google.com/file/d/1mN15UeN3IKmBtEolwupy9qBOasVhjAYE/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'sfotxl',
};

export const contact = {};

export const socialLinks = {
  facebook: 'https://www.facebook.com/kalani.man',
  instagram: 'https://www.instagram.com/sfotxl',
  github: 'https://github.com/sfotxl',
  linkedin: 'https://www.linkedin.com/in/iahtxl/',
};

export const skillsSection = {
  title: 'What I do',
  subTitle: 'FULL STACK DEVELOPER EAGER TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive, mobile-first Single-Page-Apps (SPA) with React.js'
        ),
        emoji(
          '⚡ Building responsive static websites using Bootstrap, CSS, and Sass'
        ),
        emoji('⚡ Building RESTful APIs in Node.js & Express.js'),
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
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances'
        ),
        emoji('⚡ Integrating NoSQL databases'),
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
    schoolName: 'Nucamp Coding Bootcamp',
    subHeader: 'Full Stack Web + Mobile Development Bootcamp',
    duration: 'January 2022 - August 2022',
    desc: 'Built multiple React web-based apps, an Android app using React Native, a Bootstrap site, and led a successful group project from wireframing to deployment',
    grade: 'Graduated with Honors',
    descBullets: [
      'Natives in Tech scholarship, designed to increase the representation of Native American Web and Mobile Developers in the tech industry',
    ],
  },
];

// export const experience = [
//   {
//     role: 'Frontend Developer',
//     company: 'Duseca Software',
//     companylogo: '/img/icons/common/dusecaSoftware.jpg',
//     date: 'Apr 2022 – Jun 2022',
//     desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
//   },
//   {
//     role: 'API Engineer',
//     company: 'Duseca Software',
//     companylogo: '/img/icons/common/dusecaSoftware.jpg',
//     date: 'Jan 2022 – Mar 2022',
//     desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
//     // descBullets: [
//     //   "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
//     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     // ],
//   },
//   {
//     role: 'Full Stack Developer',
//     company: 'Bleed-AI',
//     companylogo: '/img/icons/common/bleedAI.jpg',
//     date: 'Sept 2021 - Oct 2021',
//     desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
//   },
//   {
//     role: 'Backend Developer',
//     company: 'Wapidu',
//     companylogo: '/img/icons/common/wapidu.jpg',
//     date: 'Sept 2021',
//     desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
//   },
// ];

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
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
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
