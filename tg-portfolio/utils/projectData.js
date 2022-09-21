import React from 'react';
import musicApp from '../assets/Music-App.png';
import nastyAutos from '../assets/Nasty-Autos.png';
import filmpire from '../assets/filmpire.png';
import smartbrain from '../assets/smartbrain.png';

const project = [
  {
    id: 'project-0',
    name: 'Nasty Autos',
    description: 'Luxury Car Marketplace. Browse, search, buy and sell some of the finest automobiles.',
    image: nastyAutos,
    link: '',
    badge: ['React', 'Next.js', 'Tailwind CSS', 'Sanity.io'],
    new: true,
  },
  {
    id: 'project-1',
    name: 'Music App',
    description: 'A music app that allows users to search for songs, artists, and albums. Users can also create playlists and add songs to them.',
    image: musicApp,
    link: '',
    badge: ['React', 'Redux', 'Tailwind CSS'],
    new: true,
  },
  {
    id: 'project-2',
    name: 'Filmpire',
    description: 'A movie app that allows users to search for movies, actors, and directors. Users can also create a watchlist and add movies to it.',
    image: filmpire,
    link: '',
    badge: ['React', 'Redux', 'Material UI'],
    new: false,
  },
  {
    id: 'project-3',
    name: 'Smart Brain',
    description: 'A face recognition app that allows users to register and sign in. Users can then paste a link to an image and the app will detect any faces in the image.',
    image: smartbrain,
    link: 'https://smartbrain-tg.herokuapp.com',
    badge: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Clarifai API'],
    new: false,
  },

];

export default project;
