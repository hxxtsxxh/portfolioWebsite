export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Trace AI',
    desc: 'Trace AI is a tool that creates 3D meshes of original choreography to detect copied choreography on social media. If a dance is not original, the platform auto-tags the creator to ensure proper accreditation',
    subdesc:
      'Trace AI is categorized into two parts. The Full Stack and the Analysis. Tackling the full stack first, the front end was created with the React framework and CSS. For the backend, both MongoDB and Firebase were used for handling video data and user data.',
    href: 'https://devpost.com/software/trace-ai',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Python',
        path: 'assets/python.png',
      },
      {
        id: 3,
        name: 'TensorFlow',
        path: '/assets/tensorflow.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
    ],
  },

  {
    title: 'CommuRide - A Green Journey',
    desc: 'CommuRide empowers individuals to be either riders or drivers. The application streamlines rider-driver connections, enriching the community\'s shared mobility experience.',
    subdesc:
      'The spark for CommuRide originated from a dual concern: environmental sustainability and community well-being. Observing the challenges of conventional commuting, we envisioned a carpooling platform to minimize carbon footprints and foster connections within neighborhoods.',
    href: 'https://devpost.com/software/commuride',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Firebase',
        path: 'assets/firebase.svg',
      },
      {
        id: 3,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
      {
        id: 4,
        name: 'Google Cloud',
        path: '/assets/googlecloud.svg',
      },
    ],
  },

  {
    title: 'Counterfeit Money Detector',
    desc: 'Counterfeit money causes many problems across the world, such as fraudulent purchases and inflation. Our app tries to counteract this.',
    subdesc:
      'This Android App can take an image and determine whether a banknote in the image is fake or authentic.',
    href: 'https://devpost.com/software/counterfeit-money-detector',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Android Studio',
        path: '/assets/androidstudio.svg',
      },
      {
        id: 2,
        name: 'TensorFlow',
        path: '/assets/tensorflow.svg',
      },
      {
        id: 3,
        name: 'Jupyter Notebook',
        path: '/assets/jupyter.svg',
      },
      {
        id: 4,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    candyCanePosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    santaHatPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'iVue',
    pos: 'Software Engineering Intern',
    duration: 'Dec 2023 - Jun 2024',
    title: "I leveraged Vue.js in order to advanced drone technology to monitor content and control devices globally, resulting in improvement in operational efficiency while ensuring real-time data collection and device management.",
    icon: '/assets/ivue.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'TEDx',
    pos: 'Speaker-- The Evolution of AI and its Role in Society',
    duration: 'Mar 2023',
    title: "I delivered a comprehensive presentation on AI-driven cyber threats, including Deep Fakes, to an audience of over 70 people, raising awareness of identity manipulation risks through auditory and visual means by 60%.",
    icon: '/assets/TEDx-logo.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Solutionz Security, Inc.',
    pos: 'Cybersecurity Intern',
    duration: 'Jan 2023 - May 2023',
    title: "I conducted biweekly meetings to discuss in-depth analyses of Deep Fake technology and strategies to counter digital threats, while developing various AI algorithms. Additionally, I generated an internal website for Solutionz, a sister company, to help organize information for over 100 state grants and their contacts.",
    icon: '/assets/solutionz.png',
    animation: 'salute',
  },
];
