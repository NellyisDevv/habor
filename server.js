import { createServer, Model } from 'miragejs'

createServer({
  models: {
    products: Model,
  },

  seeds(server) {
    server.create('product', {
      id: '1',
      name: 'Bulldog Mens Skincare and Grooming Body Wash, Peppermint and Eucalyptus, 16.9 Fluid Ounce',
      price: `7.40`,
      description: ` Minty and invigorating, this is the ultimate post-gym body wash. This refreshing treat is not at all drying yet will leave you feeling as clean as a whistle. Pop one of these in your gym bag and keep it in your bathroom after a sweaty commute home from work (we've even tested it on hair in case you've forgotten your shampoo!). `,
      imageUrl: 'https://m.media-amazon.com/images/I/61Zolb7mjNL._SL1500_.jpg',
      type: 'skincare',
    })
    server.create('product', {
      id: '2',
      name: 'Northern Lights Candles Whiskey and Tobacco Spirit Candle',
      price: `8.99`,
      description: ` Northern lights Spirit Jar candles honor craft cocktails and your preferred bottle of wine. This line combines the perfect measure of fragrance with unique color and all natural cork lid. The back of each candle has a snappy snippet for informative spirits related tidbits. `,
      imageUrl:
        'https://m.media-amazon.com/images/I/81FLCJ+utHL._AC_SL1500_.jpg',
      type: 'scents',
    })
    server.create('product', {
      id: '3',
      name: `Fossil Minimalist Men's Watch with Leather or Stainless Steel Band`,
      price: `80.75`,
      description: ` Each of our Fossil mens' watches are built to last and embody the bold, creative spirit of their wearers. Through quality craftsmanship, premium features and a keen attention to detail, our watches are made for the everyday-wearer, the adventurer and everyone in between. `,
      imageUrl:
        'https://m.media-amazon.com/images/I/71ijx2DmebL._AC_UX679_.jpg',
      type: 'wearables',
    })
    server.create('product', {
      id: '4',
      name: 'New York Biology Dead Sea Mud Mask for Face and Body - Spa Quality Pore Reducer for Acne, Blackheads and Oily Skin, Natural Skincare for Women, Men - Tightens Skin for A Healthier Complexion - 8.8 oz',
      price: `11.28`,
      description:
        'Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.',
      imageUrl: 'https://m.media-amazon.com/images/I/71yK4bkSg-L._SL1500_.jpg',
      type: 'skincare',
    })
    server.create('product', {
      id: '5',
      name: `Fossil Townsman Men's Watch with Chronograph Display and Genuine Leather Band`,
      price: `81.22`,
      description:
        'The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.',
      imageUrl:
        'https://m.media-amazon.com/images/I/71b5MtBvL6L._AC_UX679_.jpg',
      type: 'wearables',
    })
    server.create('product', {
      id: '6',
      name: 'Gifts for Dad Fathers Day Birthday Gifts from Daughter Son, Sandalwood Scented Candles for Christmas, Thanksgiving Day, Birthday Gift for Men Him Daddy Step Dad ',
      price: `13.99`,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        'https://m.media-amazon.com/images/I/61m7SQDw7iL._AC_SL1500_.jpg',
      type: 'scents',
    }),
      server.create('product', {
        id: '7',
        name: `Gold Bond Men's Essentials Everyday Moisture Daily Body & Hand Lotion, 14.5 oz., With Vitamin C`,
        price: `13.99`,
        description:
          "Gold Bond Men's Essentials Everyday Moisture Lotion for body and hands is formulated specifically for men with dry skin. It's made with seven moisturizers three vitamins to replenish, hydrate and soften men's skin. This daily moisturizing formula for men also contains vitamin C, an antioxidant that helps protect skin against environmental stressors. What's more, Gold Bond Everyday Moisture Lotion for men is hypoallergenic, dermatologist-tested, fast-absorbing and nongreasy. Stock up on 14.5-ounce bottles of Gold Bond Men's Essentials Everyday Moisture so you always have nourishing hydration on hand when you need it most.",
        imageUrl:
          'https://m.media-amazon.com/images/I/71t8I3qEOrL._SL1500_.jpg',
        type: 'skincare',
      }),
      server.create('product', {
        id: '8',
        name: `Candles for Men, Palo Santo Candle, Patchouli Candles, Soy Scented Candles for Home Scented, Black Candles, Mens Candle for Home, Man Candles, Masculine Candle, Aromatherapy Non Toxic Candles – 9oz`,
        price: `24.95`,
        description:
          'Best Candles for Men: Looking for scented candles for men? Wax & Wit has you covered with the perfect gifts for him. This candle comes with a strong masculine scent and a stylish black design. Perfect gift for mens home decor and bathroom candles! ',
        imageUrl:
          'https://m.media-amazon.com/images/I/61LcryR8ZcL._SL1298_.jpg',
        type: 'scents',
      }),
      server.create('product', {
        id: '9',
        name: `Miabella Solid 18k Gold Over 925 Sterling Silver Italian 3.5mm Diamond Cut Cuban Link Curb Chain Necklace for Women Men, Made in Italy`,
        price: `32.90`,
        description:
          "CLASSIC ITALIAN STYLE - Add a dash of glam to your everyday look with this 18K gold over sterling silver 5mm Mesh bracelet. Simple interlocking links create a flexible movement and shiny finish for a modern and polished look. Domed in form, it is not too chunky, with just the right volume for a cool feminine silhouette. It's the perfect bracelet for daily wear, whether with casual jeans and t-shirt or a dressy attire. ",
        imageUrl:
          'https://m.media-amazon.com/images/I/61q-Rdo0QUL._AC_UX679_.jpg',
        type: 'wearables',
      })
  },

  routes() {
    this.namespace = 'api'
    this.logging = false

    this.get('/products', (schema, request) => {
      // return new Response(400, {}, { error: 'Error fetching data' })
      return schema.products.all()
    })

    this.get('/products/:id', (schema, request) => {
      const id = request.params.id
      return schema.products.find(id)
    })
  },
})
