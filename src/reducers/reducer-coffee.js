import { FETCH_COFFEE } from '../actions';

const defaultState = [
  {
    method: 'Chemex',
    description:
      'Famous for its elegant design, Chemex produces and light, balanced, and clean cup of coffee with balanced acidity and fruit forward flavors.',
    coffee: 'Single Origin: Peru, Ethiopia, Guatemala',
    roast: 'light to medium',
    main_icon: 'https://i.ibb.co/D9qqt4r/chemex-icon-white.png',
    bean_icon: 'https://i.ibb.co/f2FNd2F/single-bean-icon-transp.png',
    img_url:
      'https://i.pinimg.com/originals/a9/0b/d5/a90bd55fa1e33dea95b7476b542faf37.png',
    recipe: {
      grind: 'medium-coarse',
      grams_coffee: '32g',
      grams_water: '512g',
      temp_water: '205°F',
      bloom_weight: '65g',
      bloom_time: '45 seconds',
      total_brew_time: '4 minutes, 30 seconds',
    },
    id: 1,
  },

  {
    method: 'AeroPress',
    description:
      'The fastest of these pour-over methods, AeroPress is known for its versatility. Varying immersion time, grind, and plunge can produce a range of results from bright and lively, to round and bold.',
    coffee: 'Blend / Espresso Blend',
    roast: 'medium to dark',
    main_icon: 'https://i.ibb.co/9ZcxDHb/aeropress-icon-white.png',
    bean_icon: 'https://i.ibb.co/f2FNd2F/single-bean-icon-transp.png',
    img_url:
      'https://www.canterburycoffee.com/wp-content/uploads/2018/01/Aeropress-trends-e1515436288798.jpg',
    recipe: {
      grind: 'medium-fine',
      grams_coffee: '18g',
      grams_water: '200g',
      temp_water: '195°F',
      bloom_weight: '100g',
      bloom_time: '15 seconds',
      total_brew_time: '2 minutes, 30 seconds',
    },
    id: 2,
  },

  {
    method: 'Clever Dripper',
    description: `Combining the full immersion of French Press with the paper filtration of pour-over coffee makers, the Clever Dripper produces a fuller-boddied, roastier flavored cup.`,
    coffee: 'Blend / Single Origin: Brazil, Costa Rica',
    roast: 'medium',
    email: 'thebossh@dundermif.com',
    main_icon: 'https://i.ibb.co/NnmGPnY/clever-icon-white2.png',
    bean_icon: 'https://i.ibb.co/f2FNd2F/single-bean-icon-transp.png',
    img_url:
      'https://images.squarespace-cdn.com/content/v1/545fa284e4b098772e50fd00/1604957203461-KBY9UH6E4KJWIX6LNT63/Clever%2BCoffee%2BDripper.jpg',
    recipe: {
      grind: 'medium to medium-coarse',
      grams_coffee: '20g',
      grams_water: '320g',
      temp_water: '210°F',
      bloom_weight: '320g',
      bloom_time: '2 minutes',
      total_brew_time: '3 minutes, 45 seconds',
    },
    id: 3,
  },
];

// eslint-disable-next-line default-param-last
const coffeeReducer = function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_COFFEE:
      return state;
    default:
      return state;
  }
};

export default coffeeReducer;
