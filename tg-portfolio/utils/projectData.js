
import musicApp from '../assets/Music-App.png';
import nastyAutos from '../assets/Nasty-Autos.png';
import filmpire from '../assets/filmpire.png';
import smartbrain from '../assets/smartbrain.png';
import properProperties from '../assets/proper-properties.png';
import ecommerce from '../assets/ecommerce.png';

const project = [
  {
    id: 'project-0',
    name: 'Nasty Autos',
    description: 'Luxury Car Marketplace. Browse, search, buy and sell some of the finest automobiles.',
    image: nastyAutos,
    viewProject: 'https://github.com/JavaScript-Mastery-PRO/project2_team1_repository',
    sourceCode: 'https://github.com/JavaScript-Mastery-PRO/project2_team1_repository',
    badge: ['React', 'Next.js', 'Tailwind CSS', 'Sanity.io'],
    new: true,
  },
  {
    id: 'project-1',
    name: 'Music App',
    description: 'A music app that allows users to search for songs, artists, and albums. Users can also create playlists and add songs to them.',
    image: musicApp,
    viewProject: 'https://github.com/JavaScript-Mastery-PRO/project1_team2_repository',
    sourceCode: 'https://github.com/JavaScript-Mastery-PRO/project1_team2_repository',
    badge: ['React', 'Redux', 'Tailwind CSS'],
    new: true,
  },
  {
    id: 'project-2',
    name: 'Filmpire',
    description: 'A movie app that allows users to search for movies, actors, and directors. Users can also create a watchlist and add movies to it.',
    image: filmpire,
    viewProject: 'https://github.com/t-creates/filmpire_travis',
    sourceCode: 'https://github.com/t-creates/filmpire_travis',
    badge: ['React', 'Redux', 'Material UI'],
    new: false,
  },
  {
    id: 'project-3',
    name: 'Smart Brain',
    description: 'A face recognition app that allows users to register and sign in. Users can then paste a link to an image and the app will detect any faces in the image.',
    image: smartbrain,
    viewProject: 'https://smartbrain-tg.herokuapp.com',
    sourceCode: 'https://github.com/t-creates',
    badge: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Clarifai API'],
    new: false,
  },
  {
    id: 'project-4',
    name: 'Proper Properties',
    description: 'A real estate app that allows you to view and search for properties. Pick your choice to rent or buy!',
    image: properProperties,
    viewProject: 'https://tg-realestate.vercel.app',
    sourceCode: 'https://github.com/t-creates/tg-realestate',
    badge: ['React', 'Next.js', 'Chakra UI', 'Tachyons'],
    new: false,
  },
  {
    id: 'project-5',
    name: 'Ecommerce',
    description: 'An ecommerce app that allows users to browse, search, and buy products. The backend is developed with Sanity.io making it the perfect template for any Ecommerce business.',
    image: ecommerce,
    viewProject: 'https://github.com/t-creates/ecommerce',
    sourceCode: 'https://github.com/t-creates/ecommerce',
    badge: ['React', 'Sanity.io', 'Stripe API'],
    new: false,
  },

];

export default project;
