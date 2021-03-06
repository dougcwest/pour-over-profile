import { FETCH_COFFEE, CREATE_RECIPE } from '../actions';

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
      showModal: false,
    },
    needed_items: {
      coffee_maker: 'A Chemex 6 or 8 Cup Pour-Over Glass Coffee Maker',
      coffee_link:
        'https://www.williams-sonoma.com/products/chemex-wood-collar-glass-coffeemaker/?catalogId=79&sku=2964765&cm_ven=PLA&cm_cat=Google&cm_pla=Electrics%20%3E%20Coffee%20Makers&region_id=680400&cm_ite=2964765_14571727863&gclid=CjwKCAiAjoeRBhAJEiwAYY3nDIQuiZ3UDSTSQtOIqjOk3E0a2MDIlvfVl9vi_EOOSggsiUq-l5k_bRoCsxoQAvD_BwE',
      beans_rec:
        'https://counterculturecoffee.com/wp-content/uploads/2020/06/Idido_12oz_bag_2020-e1621010055615-600x600.png',
      beans_link: 'https://counterculturecoffee.com/shop/coffee/idido',
      kettle: 'Any brand of pouring kettle, preferably goosenecked.',
      kettle_link:
        'https://www.amazon.com/Bonavita-BV382510V-Variable-Temperature-Gooseneck/dp/B005YR0F40',
      scale: 'A food scale that can measure in grams',
      scale_link:
        'https://www.amazon.com/Taylor-Precision-Products-1020NFS-Aquatronic/dp/B00YIM4QRE/ref=sr_1_5?keywords=taylor+food+scale&qid=1646401753&sr=8-5',
      filter: 'One Chemex bonded natural filter',
      filter_link:
        'https://www.amazon.com/Chemex-Natural-Coffee-Filters-Square/dp/B017OFOP68',
    },
    instructions: {
      step_1:
        'Weigh out the coffee to 32 grams and gind to medium-coarse. (roughly the size of sea salt)',
      step_1_img: 'https://i.ibb.co/5jbw2Yv/coffe-grounds.png',
      step_2:
        'Unfold the filter and place it in the Chemex, with the triple-folded side against the pour spout.',
      step_2_img: 'https://i.ibb.co/d5RkxVr/chemex-filter.png',
      step_3:
        'Thoroughly rinse the filter with hot water to remove the taste of the paper and pre-heat the Chemex. Discard the water through the spout.',
      step_3_img: 'https://i.ibb.co/0hzCtdz/02-TRD20-Chemex-Wash-Filter2.png',
      step_4:
        'Pour the ground coffee into the filter and gently shake the Chemex, creating an even bed to pour over.',
      step_4_img: 'https://i.ibb.co/ynHmZxB/Chemex-grounds.png',
      step_5:
        'Starting at the center of the bed, slowly and evenly pour 65 grams of water, moving outward in concentric circles. Let the coffee "bloom" for 45 seconds.',
      step_5_img: 'https://i.ibb.co/QQn9ZxF/chemex-bloom.png',
      step_6:
        'Using the same pouring pattern, gently add water until the scale reads 300 grams. Let the water draw down until the slurry sits about an inch above the bottom of the filter.',
      step_6_img: 'https://i.ibb.co/BBmvqd2/chemex-pour.png',
      step_7:
        'Repeat the previous step, this time with a center pour instead of circles. Fill until the scale reads 512 grams.',
      step_7_img: '',
      step_8:
        'Allow the coffee to draw down into the basin. Once the grounds are dry, remove the filter and compost it. Give the Chemex a good swirl to aerate the coffee.',
      step_8_img: 'https://i.ibb.co/XFbtVxX/chemex-full.png',
      step_9:
        'Pre-heat your coffee cup with the remaining hot water in your kettle. Swirl and discard. Pour your delicious coffee and enjoy!',
      step_9_img: 'https://i.ibb.co/ChPc9Fm/drinking-coffee.png',
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
      showModal: false,
    },
    needed_items: {
      coffee_maker: 'An AeroPress Coffee Maker',
      coffee_link:
        'https://www.amazon.com/AeroPress-Coffee-Espresso-Maker-Bitterness/dp/B0047BIWSK',
      beans_rec: 'https://i.ibb.co/0mMS5vZ/onyx-southern-weather.png',
      beans_link: 'https://onyxcoffeelab.com/products/southern-weather',
      kettle: 'Any brand of pouring kettle, preferably goosenecked.',
      kettle_link:
        'https://www.amazon.com/Bonavita-BV382510V-Variable-Temperature-Gooseneck/dp/B005YR0F40',
      scale: 'A food scale that can measure in grams',
      scale_link:
        'https://www.amazon.com/Taylor-Precision-Products-1020NFS-Aquatronic/dp/B00YIM4QRE/ref=sr_1_5?keywords=taylor+food+scale&qid=1646401753&sr=8-5',
      filter: 'One AeroPress Microfilter',
      filter_link:
        'https://www.amazon.com/AeroPress-Replacement-Filter-Pack-Microfilters/dp/B000LTOCSG',
    },
    instructions: {
      step_1:
        'Weigh out the coffee to 18 grams and gind to a medium-fine coarseness.',
      step_1_img: 'https://i.ibb.co/VYq966s/fine-grounds.png',
      step_2:
        'Place the paper microfilter into the removable end cap of the AeroPress. Rest the cap over your cup and rinse the filter with hot water. Swirl and discard the water from the cup.',
      step_2_img: 'https://i.ibb.co/B4L57sn/aerowetfilter.png',
      step_3:
        'Twist the cap onto the bottom of the main AeroPress cylinder, using the provided funnel, pour in the coffee grounds, and shake to create an even bed.',
      step_3_img: 'https://i.ibb.co/3Y06SnB/Aeropress.png',
      step_4:
        'Pour the ground coffee into the filter and gently shake the Chemex, creating an even bed to pour over.',
      step_4_img:
        'https://cdn.shopify.com/s/files/1/0259/2273/2141/files/AeroPress_Brewing_guide-WATER_POUR-1.jpg',
      step_5:
        'Starting at the center of the bed, slowly and evenly pour 65 grams of water, moving outward in concentric circles. Let the coffee "bloom" for 45 seconds.',
      step_5_img: 'https://i.ibb.co/QQn9ZxF/chemex-bloom.png',
      step_6:
        'Using the same pouring pattern, gently add water until the scale reads 300 grams. Let the water draw down until the slurry sits about an inch above the bottom of the filter.',
      step_6_img: 'https://i.ibb.co/BBmvqd2/chemex-pour.png',
      step_7:
        'Repeat the previous step, this time with a center pour instead of circles. Fill until the scale reads 512 grams.',
      step_7_img: '',
      step_8:
        'Allow the coffee to draw down into the basin. Once the grounds are dry, remove the filter and compost it. Give the Chemex a good swirl to aerate the coffee.',
      step_8_img: 'https://i.ibb.co/XFbtVxX/chemex-full.png',
      step_9:
        'Pre-heat your coffee cup with the remaining hot water in your kettle. Swirl and discard. Pour your delicious coffee and enjoy!',
      step_9_img: 'https://i.ibb.co/ChPc9Fm/drinking-coffee.png',
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
      showModal: false,
    },
    needed_items: {
      coffee_maker: 'A Chemex 6 or 8 Cup Pour-Over Glass Coffee Maker',
      coffee_link:
        'https://www.williams-sonoma.com/products/chemex-wood-collar-glass-coffeemaker/?catalogId=79&sku=2964765&cm_ven=PLA&cm_cat=Google&cm_pla=Electrics%20%3E%20Coffee%20Makers&region_id=680400&cm_ite=2964765_14571727863&gclid=CjwKCAiAjoeRBhAJEiwAYY3nDIQuiZ3UDSTSQtOIqjOk3E0a2MDIlvfVl9vi_EOOSggsiUq-l5k_bRoCsxoQAvD_BwE',
      beans_rec:
        'https://counterculturecoffee.com/wp-content/uploads/2020/06/Idido_12oz_bag_2020-e1621010055615-600x600.png',
      beans_link: 'https://counterculturecoffee.com/shop/coffee/idido',
      kettle: 'Any brand of pouring kettle, preferably goosenecked.',
      kettle_link:
        'https://www.amazon.com/Bonavita-BV382510V-Variable-Temperature-Gooseneck/dp/B005YR0F40',
      scale: 'A food scale that can measure in grams',
      scale_link:
        'https://www.amazon.com/Taylor-Precision-Products-1020NFS-Aquatronic/dp/B00YIM4QRE/ref=sr_1_5?keywords=taylor+food+scale&qid=1646401753&sr=8-5',
      filter: 'One Chemex bonded natural filter',
      filter_link:
        'https://www.amazon.com/Chemex-Natural-Coffee-Filters-Square/dp/B017OFOP68',
    },
    instructions: {
      step_1:
        'Weigh out the coffee to 32 grams and gind to medium-coarse. (roughly the size of sea salt)',
      step_1_img: 'https://i.ibb.co/5jbw2Yv/coffe-grounds.png',
      step_2:
        'Unfold the filter and place it in the Chemex, with the triple-folded side against the pour spout.',
      step_2_img: 'https://i.ibb.co/d5RkxVr/chemex-filter.png',
      step_3:
        'Thoroughly rinse the filter with hot water to remove the taste of the paper and pre-heat the Chemex. Discard the water through the spout.',
      step_3_img: 'https://i.ibb.co/0hzCtdz/02-TRD20-Chemex-Wash-Filter2.png',
      step_4:
        'Pour the ground coffee into the filter and gently shake the Chemex, creating an even bed to pour over.',
      step_4_img: 'https://i.ibb.co/ynHmZxB/Chemex-grounds.png',
      step_5:
        'Starting at the center of the bed, slowly and evenly pour 65 grams of water, moving outward in concentric circles. Let the coffee "bloom" for 45 seconds.',
      step_5_img: 'https://i.ibb.co/QQn9ZxF/chemex-bloom.png',
      step_6:
        'Using the same pouring pattern, gently add water until the scale reads 300 grams. Let the water draw down until the slurry sits about an inch above the bottom of the filter.',
      step_6_img: 'https://i.ibb.co/BBmvqd2/chemex-pour.png',
      step_7:
        'Repeat the previous step, this time with a center pour instead of circles. Fill until the scale reads 512 grams.',
      step_7_img: '',
      step_8:
        'Allow the coffee to draw down into the basin. Once the grounds are dry, remove the filter and compost it. Give the Chemex a good swirl to aerate the coffee.',
      step_8_img: 'https://i.ibb.co/XFbtVxX/chemex-full.png',
      step_9:
        'Pre-heat your coffee cup with the remaining hot water in your kettle. Swirl and discard. Pour your delicious coffee and enjoy!',
      step_9_img: 'https://i.ibb.co/ChPc9Fm/drinking-coffee.png',
    },
    id: 3,
  },
];

// eslint-disable-next-line default-param-last
const coffeeReducer = function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_COFFEE:
      return state;
    case CREATE_RECIPE:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default coffeeReducer;
