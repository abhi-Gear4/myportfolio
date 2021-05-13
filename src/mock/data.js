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
  name: 'Abhishek Nagaraj',
  subtitle: 'CSE Graduate @ UTA + Software + Web Developer',
  cta: 'Explore me',
};

// ABOUT DATA
export const aboutData = {
  img: 'pic.jpg',
  paragraphOne: 'I am passionate about building awesome softwares.I have built websites and simple games!!, supported Enterprise software projects.You can view some of my Academic projects in my portfolio down below.',
  paragraphTwo: 'I Love problem Solving challenges and brainstorming riddles. Here is what i enjoy doing when my Thinking mode goes to an idle state',
  paragraphThree: 'Watch anime & movies,Listen to music,play baord/console games,join a outdoor sport team,go camping and the list goes on....!!!',
 // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cruz.jpg',
    title: 'Cruise Reservation System (Java Servlets)',
    info: 'Responsible for building a java servlet application for reservation of events and shows on cruise ship,',
    info2: ' Adopted MVC Architecture for this Monolithic application View – JSTL, JavaScript validation for user’s and events, Model – Java Bean classes for all the Objects, Controller – MYSQL JDBC connection for dynamic interaction with the database. Tested the full functionality of the application with Selenium Automation.',
   // url: '',
    repo: 'https://github.com/abhi-Gear4', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'price.jpg',
    title: 'E-commerce Price Tracker (Python, Selenium)',
    info: 'Performed web data Analysis on Amazon site using selenium web-driver to track real time prices of gaming consoles. Generates reports on all the available products details in the form of JSON Object.',
    info2: 'Follow up feature -- we can receive text response to the registered mobile if the prices fall under a certain range using twilio-API requests.',
    //url: '',
    repo: 'https://github.com/abhi-Gear4/ecomm-pricetracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bigdata.jpg',
    title: 'Hadoop Map-Reduce, Spark, Pig and Hive (Twitter Data Analysis)',
    info: 'Performed Big data Analysis on twitter data sets over comet distributed systems using combiner and in-mapper class, thereby reducing overhead at the shuffling phase. Performed the same aggregation Analysis using Spark through RDD, hence improving the efficiency by reducing the read-write operation on HDFS',
    info2: 'Performed Analysis to fetch the top 30 most followed users in twitter using Spark graph-x page ranking Algorithm.',
   // url: '',
    repo: 'https://github.com/abhi-Gear4', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'clientserver.jpg',
    title: 'Multi Chat App (Java Socket programming, JMS ApacheMq)',
    info: 'Developed a real time chat system by implementing server and multiple clients using java web sockets. Features functionalities like unicast, broadcast and multicast communication among three concurrent clients with GUI interface using java Swing.',
    info2: 'Improvised to receive messages when clients are offline as well by the use of java messaging service Apache-MQ message queue.',
   // url: '',
    repo: 'https://github.com/abhi-Gear4/Distributed-System-Lab1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid.jpg',
    title: 'Covid-19 Tracker App (React JS)',
    info: 'Built a responsive covid-19 cases tracker using HTML, CSS, React JS and Disease.sh API for real-time data fetches. Implemented Global Coronavirus Map which depicts the infected and causality cases country wise.',
    info2: '',
   // url: '',
    repo: 'https://github.com/abhi-Gear4', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'quiz.jpg',
    title: 'Online-Quiz-app PHP',
    info: 'Built a web app that allows students to take mock quizzes from diverse list of topics. Admin can Add new topics, questions , modify existing answer keys and alter time duration for each topic',
    info2: '',
   // url: '',
    repo: 'https://github.com/abhi-Gear4/Online-Quiz-Web-App-PHP', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Seeking Software Developer roles: Full-time/Intern ',
  btn: '',
  email: 'abhishek.nagaraj@mavs.uta.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
     // url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abhishnagara/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/abhi-Gear4',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
