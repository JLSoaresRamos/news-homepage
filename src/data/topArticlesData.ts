import { ITopArticle } from "../components/Top";

import retro from '/assets/images/image-retro-pcs.jpg';
import laptop from '/assets/images/image-top-laptops.jpg';
import game from '/assets/images/image-gaming-growth.jpg';

const topArticlesData: ITopArticle[] = [
    {
      title: 'Reviving Retro PCs',
      description: 'What happens when old PCs are given modern upgrades?',
      img: retro, // Substitua com a URL real da imagem
    },
    {
      title: 'Top 10 Laptops of 2022',
      description: 'Our best picks for various needs and budgets.',
      img: laptop, // Substitua com a URL real da imagem
    },
    {
      title: 'The Growth of Gaming',
      description: 'How the pandemic has sparked fresh opportunities.',
      img: game, // Substitua com a URL real da imagem
    },
];


export default topArticlesData;
  