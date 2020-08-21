import { createRef } from 'react';

const state = {
  sections: 8,
  pages: 9,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "LYNX Shooter Game",
      image: "/project-1.jpg",
      aspect: 1.51,
      text: "A space shooter game built with Phaser 3 framework."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Tiltzin",
      image: "/project-2.png",
      aspect: 1.5,
      text:
        "A full-stack application built with React in the front end and a Rails API for the back end."
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Gamma Gallery",
      image: "/project-3.png",
      aspect: 1.5037,
      text:
        "A front end gallery application built with React, it fetch Land Rover photos from an external API."
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Facebook Clone",
      image: "/project-4.png",
      aspect: 1.5,
      text:
        "A clone of the popular social media, this is a full stack application built with Ruby on Rails."
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Dodoist",
      image: "/project-5.png",
      aspect: 1.55,
      text:
        "A Todo list app built in JavaScript."
    }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  top: createRef()
}

export default state
