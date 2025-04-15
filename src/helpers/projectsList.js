import project1 from "../img/projects/project1.jpg";
import project1bg from "../img/projects/project1bg.jpg";

import project2 from "../img/projects/project2.jpg";
import project2bg from "../img/projects/project2bg.jpg";

import project3 from "../img/projects/project3.jpg";
import project3bg from "../img/projects/project3bg.jpg";

import project4 from "../img/projects/project4.jpg";
import project4bg from "../img/projects/project4bg.jpg";

import project5 from "../img/projects/project5.jpg";
import project5bg from "../img/projects/project5bg.jpg";

import project6 from "../img/projects/project6.jpg";
import project6bg from "../img/projects/project6bg.jpg";

const projects = [
  {
    title: "Calculator App",
    skills: "HTML, CSS, JS",
    img: project1,
    imgBig: project1bg,
    gitHubLink: "https://github.com/TBukhaidze/calculator-app",
    link: "https://tbukhaidze.github.io/calculator-app/",
    description:
      "This is the first project I created. Visually, it is an analogue of the iPhone calculator with fully functional built-in operations.",
  },

  {
    title: "Weather App",
    skills: "HTML,CSS,JS, Weather api",
    img: project2,
    imgBig: project2bg,
    gitHubLink: "https://github.com/TBukhaidze/Weather-app",
    link: "https://tbukhaidze.github.io/Weather-app/",
    description:
      "With this project, you can find out the current weather by entering your city in a search box or simply pressing the geolocation button.",
  },

  {
    title: "Marvel Comics",
    skills: "React, Redux, Redux-toolkit, Marvel Api",
    img: project3,
    imgBig: project3bg,
    gitHubLink: "https://github.com/TBukhaidze/marvel-app",
    link: "https://maarveel-aapp.netlify.app/",
    description:
      "This is a multi-page site with many features; on this site, you can find Marvel characters and Marvel comics.",
  },

  {
    title: "E-Store",
    skills: "React, Redux-Toolkit, RTK Query, Axios, fakeapi",
    img: project4,
    imgBig: project4bg,
    gitHubLink: "https://github.com/TBukhaidze/e-store",
    link: "https://soft-marshmallow-b9127d.netlify.app/",
    description:
      "This is a full-fledged e-store website with a lot of functionalities, where you can register, log in, change personal data, filter products, add items to the cart, and many other functions.",
  },

  {
    title: "Portfolio App",
    skills: "Next.js, TypeScript, React, Tailwind",
    img: project5,
    imgBig: project5bg,
    gitHubLink: "https://github.com/TBukhaidze/next-ts-project",
    link: "https://next-ts-project.netlify.app/",
    description:
      "This is a portfolio app that I created after learning next.js and TypeScript.",
  },

  {
    title: "Currency Exchange",
    skills: "Next.js, React Context, Tailwind, Axios, Swiper",
    img: project6,
    imgBig: project6bg,
    gitHubLink: "https://github.com/TBukhaidze/currency-exchange-app",
    link: "https://currex-web.netlify.app/",
    description:
      "A responsive web app that displays real-time exchange rates for currencies, cryptocurrencies and gasoline prices.Leverages multiple APIs to deliver up-to-date financial data in a clean interface.",
  },
];

export { projects };
