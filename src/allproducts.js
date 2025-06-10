const allProducts = [
  {
    id: 1,
    title: "Candlelight Dinner",
    type: "event",
    image: "/Assets/all_candlelight_dinnner.webp",
    price: 1999,
    category: "Candlelight",
    // ...other fields
  },
  {
    id: 2,
    title: "Dussehra",
    type: "festival",
    image: "/Assets/navaratri.webp",
    price: 1999,
    category: "Festival",
    // ...other fields
  },
  {
    id: 3,
    title: "Dussehra",
    type: "festival",
    image: "/Assets/navaratri.webp",
    price: 1999,
    category: "Festival",
    // ...other fields
  },

//   ========  BIRTHDAY ===============
   {
    "title": "Birthday Deco 1",
    "description": "Birthday Baloon ring Decoration",
    "price": 16999,
    "rating": 4.5,
    "image": "https://www.partyone.in/suploads/2024/Jun/26/38857/1719365590IMG_E7413.webp"
  },
  {
    "title": "Birthday Deco 2",
    "description": "Aeroplane Theame Birthday Decoration",
    "price": 8999,
    "rating": 4,
    "image": "https://www.partyone.in/suploads/2025/Feb/22/39337/1740209948image-53.webp"
  },
  {
    "title": "Birthday Deco 3",
    "description": "Amazing fozen theame Birthday Decoration",
    "price": 5300,
    "rating": 4.2,
    "image": "https://www.partyone.in/suploads/2024/Jul/02/38905/1719917140IMG_8201.webp"
  },
  {
    "title": "Birthday Deco 4",
    "description": "chess theame bday decor",
    "price": 9999,
    "rating": 4.2,
    "image": "https://www.partyone.in/suploads/2024/Mar/26/38747/1711449530Chess_Decor2.webp"
  },
  {
    "title": "Birthday Deco 5",
    "description": "Teddy Birthday Decoration.",
    "price": 14999,
    "rating": 4.6,
    "image": "https://www.partyone.in/suploads/2024/Jul/01/38893/1719805441IMG_E7724.webp"
  },
  {
    "title": "Birthday Deco 6",
    "description": "Pink swan theame birthday decoration",
    "price": 2700,
    "rating": 4.6,
    "image": "https://www.partyone.in/suploads/2024/Sep/16/38763/1726462051WhatsApp-Image-2024-06-04-at-3.47.webp"
  },
  {
    "title": "Birthday Deco 7",
    "description": "Beautiful Flamingo Birthday ring Decoration",
    "price": 8999,
    "rating": 5,
    "image": "https://www.partyone.in/suploads/2024/Sep/18/38996/1726639397WhatsApp-Image-2024-07-24-at-5.29.webp"
  },
  {
    "title": "Birthday Deco 8",
    "description": "Black and white Birthday decor",
    "price": 7900,
    "rating": 4.9,
    "image": "https://www.partyone.in/suploads/2024/Mar/26/38749/1711449601Black_Decor.webp"
  },
  {
    "title": "Birthday Deco 9",
    "description": "Baby shark birthday theame",
    "price": 5900,
    "rating": 4.7,
    "image": "https://www.partyone.in/suploads/2024/Jul/01/38892/1719802092IMG_E7693.webp"
  },
  {
    "title": "Birthday Deco 10",
    "description": "FootBall Birthday Decoration",
    "price": 6600,
    "rating": 4.1,
    "image": "https://www.partyone.in/suploads/2024/Mar/27/38777/1711540787FootBall_Theme1.webp"
  },
  {
    "title": "Birthday Deco 11",
    "description": "Green colourtheame Birthday Decor",
    "price": 6999,
    "rating": 4,
    "image": "https://www.partyone.in/suploads/2024/Mar/19/38706/1710846106birthdaydecor_green%20Theme2.webp"
  },
  {
    "title": "Birthday Deco 12",
    "description": "Spiderman birthday theame decor",
    "price": 8000,
    "rating": 4.8,
    "image": "https://www.partyone.in/suploads/2024/Mar/21/38724/1711015238half%20-arch_spiderman.webp"
  },
  {
    "title": "Birthday Deco 13",
    "description": "Cocomelon Birthday Decoration",
    "price": 22999,
    "rating": 4.6,
    "image": "https://www.partyone.in/suploads/2024/Jul/01/38894/1719805927IMG_E7805.webp"
  },
  {
    "title": "Birthday Deco 14",
    "description": "Cocomelon decoration theame",
    "price": 6499,
    "rating": 5,
    "image": "https://www.partyone.in/suploads/2024/Jun/26/38859/1719366823IMG_E4677.webp"
  },
  {
    "title": "Birthday Deco 15",
    "description": "Cocomelon Birthday Decor",
    "price": 5400,
    "rating": 4.3,
    "image": "https://www.partyone.in/suploads/2024/Jul/23/38924/1721707326HIP00705.webp"
  },
  {
    "title": "Birthday Deco 16",
    "description": "baby house minnie decoration theame",
    "price": 16999,
    "rating": 5,
    "image": "https://www.partyone.in/suploads/2024/Jun/30/38887/1719755210IMG_E7513.webp"
  },
  {
    "title": "Birthday Deco 17",
    "description": "candy theame baloon arch decoration",
    "price": 2500,
    "rating": 4.5,
    "image": "https://www.partyone.in/suploads/2024/Jul/01/38893/1719805441IMG_E7724.webp"
  },
  {
    "title": "Birthday Deco 18",
    "description": "Hulk theame Birthday decoration",
    "price": 5400,
    "rating": 4.3,
    "image": "https://www.partyone.in/suploads/2024/Jul/04/38938/1720077553IMG_3986.webp"
  },
 {
    "title": "Birthday Deco 19",
    "description": "Amazing fozen theame Birthday Decoration",
    "price": 5300,
    "rating": 4.2,
    "image": "https://www.partyone.in/suploads/2024/Jul/02/38905/1719917140IMG_8201.webp"
  },
  {
    "title": "Birthday Deco 20",
    "description": "Spiderman birthday theame decor",
    "price": 8000,
    "rating": 4.8,
    "image": "https://www.partyone.in/suploads/2024/Mar/21/38724/1711015238half%20-arch_spiderman.webp"
  },

// ========   DECORATIONS   ==============
  {
    title: "Baby shower Deco 1",
    image: "https://www.partyone.in/suploads/2025/Mar/07/39371/1741338944image-8-1.webp",
    description: "Parent to be baby shower Balloon Decoration",
    price: 7699,
    rating: 4.5
  },
  {
    title: "Baby shower Deco 2",
    image: "https://www.partyone.in/suploads/2024/Jun/25/38846/1719301766IMG_E6888.webp",
    description: "Baby elephanat theame decoration",
    price: 8999,
    rating: 4
  },
  {
    title: "Baby shower Deco 3",
    image: "https://www.partyone.in/suploads/2025/Mar/07/39372/1741339371image-7-1.webp",
    description: "Dreamy pastel theame baby decoration",
    price: 5300,
    rating: 4.2
  },
  {
    title: "Baby shower Deco 4",
    image: "https://www.partyone.in/suploads/2025/Mar/07/39367/1741330554images1000x563.webp",
    description: "Foot print baby theame decoration",
    price: 6999,
    rating: 4.2
  },
  {
    title: "Baby theame Deco 5",
    image: "https://www.partyone.in/suploads/2025/Mar/07/39370/1741338522image-9-1-1.webp",
    description: "Mother to be baby decoration",
    price: 14999,
    rating: 4.6
  },
  {
    title: "Baby showe Deco 6",
    image: "https://www.partyone.in/suploads/2024/Jul/02/38902/1719914462IMG_E8070.webp",
    description: "Neon light baby shower decoration",
    price: 6699,
    rating: 4.6
  },
  {
    title: "welcome baby Deco",
    image: "https://www.partyone.in/suploads/2025/Mar/14/39406/1741933590image-80.webp",
    description: "Beautiful Flamingo Birthday ring Decoration",
    price: 1999,
    rating: 5
  },
  {
    title: "Welcome baby Deco",
    image: "https://www.partyone.in/suploads/2024/Jul/23/38860/1721709080IMG_E5722.webp",
    description: "Cute baby girl welcome",
    price: 2600,
    rating: 4.9
  },
  {
    title: "Welcome baby Deco",
    image: "https://www.partyone.in/suploads/2025/Mar/17/39418/1742192223image-79.webp",
    description: "Welcome baby butterfly Theame Deco",
    price: 5900,
    rating: 4.7
  },
  {
    title: "Anniversary Deco",
    image: "https://www.partyone.in/suploads/2024/Mar/26/38761/171145021625th_Anniversary.webp",
    description: "25th Aniversary Gold and Pastel baloon Decoration",
    price: 12499,
    rating: 4.1
  },
  {
    title: "Aniversary Deco",
    image: "https://www.partyone.in/suploads/2025/Feb/22/39336/1740208361image-46.webp",
    description: "Elagent floral Aniversary deco",
    price: 7399,
    rating: 4
  },
  {
    title: "Aniversary Deco",
    image: "https://www.partyone.in/suploads/2023/Dec/11/38300/1702269376Product_Aniversary.webp",
    description: "Golden theame Aniversary Deco",
    price: 9999,
    rating: 4.8
  },
  {
    title: "Bride Tobe Deco",
    image: "https://www.partyone.in/suploads/2025/Feb/06/39307/1738845610image-129_Nero-AI_Photo-1.webp",
    description: "Bride to be cabana Terrace Decoration",
    price: 17999,
    rating: 4.6
  },
  {
    title: "Bride Tobe Deco",
    image: "https://www.partyone.in/suploads/2023/Nov/23/38318/1700722864Product_lets%20party.webp",
    description: "Lets party bachelorette Decoration",
    price: 9999,
    rating: 5
  },
  {
    title: "Bride tobe Deco",
    image: "https://www.partyone.in/suploads/2024/Jul/04/38946/1720087023IMG_4207-Oh-baby.webp",
    description: "Shimmery silver bride tobe",
    price: 3900,
    rating: 4.3
  },
  {
    title: "Bride Tobe Deco",
    image: "https://www.partyone.in/suploads/2024/Jun/29/38878/1719667528IMG_5405.webp",
    description: "Black groom tobe decoration with frills",
    price: 2399,
    rating: 5
  },
  {
    title: "Valeintines deco",
    image: "https://www.partyone.in/suploads/2024/Jun/29/38877/1719666385IMG_4988.webp",
    description: "i love u red foil boloon",
    price: 1700,
    rating: 4.5
  },

// ================= CANDLE LIGHT DINNER ==================

{
    title: "Candlelight Dinner",
    image: "/Assets/all_candlelight_dinnner.webp",
    price: 1999,
    rating: 4,
  },
  {
    title: "Indoor Candlelight Dinner",
    image: "/Assets/Indoor Pool.webp",
    price: 3999,
    rating: 3,
  },
  {
    title: "Luxury Candlelight Dinner",
    image: "/Assets/Luxury Candle light Dinner.webp",
    price: 5999,
    rating: 4,
  },
  {
    title: "Cabana Candlelight Dinner",
    image: "/Assets/Cabana Candle light Dinner.webp",
    price: 7999,
    rating: 4,
  },
  {
    title: "Poolside Dinners",
    image: "/Assets/poolside_dinners.webp",
    price: 1999,
    rating: 4,
  },
  {
    title: "Indoor Pool Side Dinner",
    image: "/Assets/Indoor Pool Side_.jpg",
    price: 3999,
    rating: 4,
  },
  {
    title: "Open Air Pool Side Cabana Candlelight Dinner",
    image: "/Assets/Open Air Cabana Candlelight Dinner .webp",
    price: 5999,
    rating: 4,
  },
  {
    title: "Poolside Bliss Candlelight Dinner",
    image: "/Assets/Poolside Bliss Candlelight Dinner.jpg",
    price: 7999,
    rating: 4,
  },
  {
    title: "Restaurant Dinners",
    image: "/Assets/restaurant_dinners.webp",
    price: 1999,
    rating: 4,
  },
  {
    title: "Buffet Dinners",
    image: "/Assets/Buffet Dinner.jpg",
    price: 3999,
    rating: 4,
  },
  {
    title: "Family Style Dinner",
    image: "/Assets/Family Style Dinner.webp",
    price: 5999,
    rating: 4,
  },
  {
    title: "Roof Top Dinner",
    image: "/Assets/Roof Top.jpg",
    price: 7999,
    rating: 4,
  },


//   =========== PTC =============
 {
    title: "Couple Movie Experiences",
    image: "/Assets/couple_movie_experiences.webp",
    price: 1999,
    rating: 4,
  },
  {
    title: "Couple Romantic Show with Celebration",
    image: "/Assets/Couple Romantic Show with Celebration.png",
    price: 3999,
    rating: 4,
  },
  {
    title: "Private Theatre Megha Show Birthday",
    image: "/Assets/Private Theatre Megha Show Birthday.png",
    price: 5999,
    rating: 4,
  },
  {
    title: "Surprise Celebration and Super Show",
    image: "/Assets/Surprise Celebration and Super Show.jpeg",
    price: 7999,
    rating: 4,
  },
  {
    title: "Friends and Family Show",
    image: "/Assets/friends_and_family_shows.webp",
    price: 1999,
    rating: 4,
  },
  {
    title: "Personalized Video Shows",
    image: "/Assets/Personalized Video Shows.jpg",
    price: 3999,
    rating: 4,
  },
  {
    title: "Live-Streamed or Recorded Shows",
    image: "/Assets/Live-Streamed or Recorded Shows.jpg",
    price: 5999,
    rating: 4,
  },
  {
    title: "Special Entertainment Screenings",
    image: "/Assets/Special Entertainment Screenings.jpg",
    price: 7999,
    rating: 4,
  },

// ========== FESTIVAL DECOR =============
 {
    title: "Dussehra",
    image: "/Assets/navaratri.webp",
    price: 1999,
    rating: 4,
  },
  {
    title: "Halloween",
    image: "/Assets/halloween.webp",
    price: 1999,
    rating: 4,
  },
  {
    title: "Christmas",
    image: "/Assets/christmas.webp",
    price: 1999,
    rating: 4,
  },
  {
    title: "New Year",
    image: "/Assets/new-year.webp",
    price: 1999,
    rating: 4,
  },
  {
    title: "Republic Day",
    image: "/Assets/RD1.webp",
    price: 1999,
    rating: 4,
  },
  {
    title: "Diwali",
    image: "/Assets/diwali.webp",
    price: 1999,
    rating: 4,
  },
  {
    title: "Independence Day",
    image: "/Assets/ID1.webp",
    price: 1999,
    rating: 4,
  },
  {
    title: "Ganesh Chathurthi",
    image: "/Assets/RD1.webp",
    price: 1999,
    rating: 4,
  },

//   ============= CORPORATE PLANNER =================

 {
    image: "themed-decorations-and-setups.webp",
    title: "Themed Decorations and Setups",
    price: 4999,
    rating: 4
  },
  {
    image: "employee-engagment-events.webp",
    title: "Team Building Activities",
    price: 4999,
    rating: 4
  },
  {
    image: "company-anniverseries.webp",
    title: "Company Anniversary",
    price: 4999,
    rating: 4
  },
  {
    image: "office-openings.webp",
    title: "Office Openings",
    price: 4999,
    rating: 4
  },
  {
    image: "photobooth-setups.webp",
    title: "Photobooth Setups",
    price: 4999,
    rating: 4
  },
  {
    image: "exhibition-booth-design.webp",
    title: "Exhibition Booth Design & Services",
    price: 4999,
    rating: 4
  },
  {
    image: "corporate-recognition-and-award-ceremony-events.webp",
    title: "Recognition & Award Ceremony",
    price: 4999,
    rating: 4
  },
  {
    image: "corporate-professional-photography-and-videography.webp",
    title: "Photography & Videography",
    price: 4999,
    rating: 4
  },
  {
    image: "showroom-inauguration.webp",
    title: "Showroom Inauguration",
    price: 4999,
    rating: 4
  },
  {
    image: "stage-lights-sounds-and-DJ.webp",
    title: "Stage, Lights, Sounds, and DJ",
    price: 4999,
    rating: 4
  },
  {
    image: "virtual-reality-games.webp",
    title: "Virtual Reality Games",
    price: 4999,
    rating: 4
  },
  {
    image: "product-launches.webp",
    title: "Product Launches",
    price: 4999,
    rating: 4
  },

//   =================== OCCASIONS ---------------------
      {
        title: "House Warming",
        image: "https://www.partyone.in/suploads/2025/Feb/27/39341/1740648279image-29-1-1.webp",
        description: "Celebrate the joy of a new beginning with our thoughtfully designed house warming events.",
        details: [
          {
              title: "1BHK House Warming Flower Decoration",
              image: "https://www.partyone.in/suploads/2025/Feb/07/39309/1738910195image-246.webp",
              price: 8000,
              originalPrice: 10999
            },
            {
              title: "2 BHK Griha Pravesh Decoration",
              image: "https://www.partyone.in/suploads/2025/Feb/07/39311/1738919820image-245.webp",
              price: 12000,
              originalPrice: 16999
            },
            {
              
              title: "Authentic Marigold Banana Leaves Backdrop Decor",
              image: "https://www.partyone.in/suploads/2024/Dec/11/39142/1733899099image-85_Nero-AI_Photo.webp",
              price: 11000,
              originalPrice: 15000
            }, {
              title: "3BHK Griha Pravesh Marigold Flower Decoration",
              image: "https://www.partyone.in/suploads/2025/Feb/07/39314/1738925466image-12-Recovered.webp",
              price: 25000,
              originalPrice: 19999
            },
            {
              title: "Premium 1BHK Gruhapravesam Decoration",
              image: "https://www.partyone.in/suploads/2025/Feb/10/39325/1739191752image-22-1.webp",
              price: 14000,
              originalPrice: 22999
            },
            {
              title: "Best Housewarming Party Photography in Hyderabad",
              image: "https://www.partyone.in/suploads/2018/Jun/14/28896/1528972968hhhhhhhhhhhhhwww.webp",
              price: 15000,
              originalPrice: 24999
            },
            {
              title: "House Warming Party Invitations in Hyderabad",
              image: "https://www.partyone.in/suploads/2018/Jun/27/29631/1530097326h689.webp",
              price: 12,
              // originalPrice: 10999
            },
            {
              title: "House Warming Party Invitations in Hyderabad",
              image: "https://www.partyone.in/suploads/2018/Jun/27/29631/1530097326h6787.webp",
              price: 12,
              // originalPrice: 16999
            },
            {
              title: "2BHK Budget Friendly Griha Pravesh Flower Decor",
              image: "https://www.partyone.in/suploads/2025/Feb/07/39315/1738931753image-15_Nero-AI_Photo.webp",
              price: 4000,
              originalPrice: 6499
  
            },
            {
              
              title: "Griha Pravesh Pooja Backdrop Decoration",
              image: "https://www.partyone.in/suploads/2025/Feb/27/39340/1740647605image-27-1.webp",
              price: 11000,
              originalPrice: 16999
            },
            {
              title: "House Warming Entrance Chapra Decoration",
              image: "https://www.partyone.in/suploads/2025/Feb/27/39341/1740648279image-29-1-1.webp",
              price: 10000,
              originalPrice: 12500
            },
            {
              title: "Satyanarayana Swamy Vratham Griha Pravesh Flower D",
              image: "https://www.partyone.in/suploads/2025/Feb/27/39339/1740647096image-26-1.webp",
              price:12000,
              originalPrice:15000
            }
        ]
      },
  
  // ----------------TITLE2---------------------
      {
        title: "Baby Shower",
        image: "https://www.partyone.in/suploads/2025/Mar/06/39361/1741254554b2109cc2-ff1d-44c6-9358-cd6480d3ef39.webp",
        description: "Welcome the little one with adorable baby shower themes.",
        details: [
          {
              title: "Artifical Flower Baby Shower Decoration",
              image: "https://www.partyone.in/suploads/2025/Mar/07/39365/1741325247image-14-1_Nero_AI_Image_Upscaler_Photo.webp",
              price: 8000,
              originalPrice: 10000
            },
            {
              title: "Baby Elephant Theme Decoration",
              image: "https://www.partyone.in/suploads/2025/Mar/06/39361/1741254554b2109cc2-ff1d-44c6-9358-cd6480d3ef39.webp",
              price: 12500,
              originalPrice: 14000
            },
            {
              title: "Baby Shower Delight Savvy Decoration",
              image: "https://www.partyone.in/suploads/2024/Sep/12/38826/1726120264IMG_E4732.webp",
              price: 5000,
              originalPrice: 6000
            }, {
              title: "Budget Friendly Natural Flower Seemantham Decor",
              image: "https://www.partyone.in/suploads/2025/Mar/14/39391/1741943299image-2-1_Nero_AI_Image_Upscaler_Photo.webp",
              price: 8500,
              originalPrice: 9500
            },
            {
              title: "Best Baby Shower Photo Shoot ",
              image: "https://www.partyone.in/suploads/2018/Jun/14/28899/1528973269bs.webp",
              price: 10000,
              // originalPrice: 16999
            },
            {
              title: "Baby Shower Invitation Card",
              image: "https://www.partyone.in/suploads/2018/Jun/27/29638/1530097827h87.webp",
              price: 12,
              // originalPrice: 6499
            }, 
            {
              title: "Baby Shower Invitation Card",
              image: "https://www.partyone.in/suploads/2018/Jun/27/29638/1530097827b56576.webp",
              price: 12,
              // originalPrice: 6499
            },
            {
              title: "Best Maternity Photography ",
              image: "https://www.partyone.in/suploads/2018/Jun/14/28898/1528973237mmmmmmmm.webp",
              price: 11000,
              // originalPrice: 16999
            },
            {
              title: "Elegant Gerbera And Rose Ring Flower Decor",
              image: "https://www.partyone.in/suploads/2024/Sep/27/39036/17274285931O6A5195.webp",
              price: 18000,
              originalPrice: 20000
            },
             {
              title: "Foot Print Baby Shower Balloon Decoration",
              image: "https://www.partyone.in/suploads/2025/Mar/07/39367/1741330554images1000x563.webp",
              price: 6000,
              originalPrice: 8000
            },
            {
              title: "Oh Baby Neon Light Baby Shower Decoration",
              image: "https://www.partyone.in/suploads/2024/Jul/02/38902/1719914462IMG_E8070.webp",
              price: 6500,
              originalPrice: 8500
            },
            {
              title: "Baby Shower Backdrop Flower Decoration",
              image: "https://www.partyone.in/suploads/2025/Mar/11/39388/1741677827image-17.webp",
              price: 10000,
              originalPrice: 14000
            }
        ]
      },
  
      // ------------- TITLE 3 ----------------
      {
        title: "Name Ceremony",
        image: "https://www.partyone.in/suploads/2025/Mar/10/39381/1741596811image-22-2.webp",
        description: "Mark the beautiful milestone of your child's name ceremony with a memorable celebration.",
        details: [
          {
              title: "Baby Girl Naming Ceremony Balloon Decor",
              image: "https://www.partyone.in/suploads/2025/Mar/08/39375/1741419110image-25-1.webp",
              price: 3000,
              originalPrice: 4000
            },
            {
              title: "Classy Cradle Ceremony Balloon Decoration",
              image: "https://www.partyone.in/suploads/2025/Mar/11/39387/1741673370polish-20211205-135844717-1000x1000_Nero_AI_Image_Upscaler_Photo.webp",
              price: 6500,
              originalPrice: 7500
            },
            {
              title: "Baby Boy Cradle Ceremony Balloon Decor",
              image: "https://www.partyone.in/suploads/2025/Mar/08/39376/1741419838image-24-1.webp",
              price: 2000,
              originalPrice: 3500
            }, {
              title: "Elegant Gerbera And Rose Ring Flower Decor",
              image: "https://www.partyone.in/suploads/2024/Sep/27/39036/17274285931O6A5195.webp",
              price: 20000,
              originalPrice: 22000
            },
            {
              title: "Naming Ceremony,Cradle Ceremony Photography",
              image: "https://www.partyone.in/suploads/2018/Jun/14/28897/1528973193nnnnnnnnnnnn.webp",
              price: 5000,
              originalPrice: 8000
            },
            {
              title: "Guess My Name Cradle Flower Decor",
              image: "https://www.partyone.in/suploads/2025/Mar/12/39394/1741757362424713899_738663994634575_4090638919894865616_n_1080-Recovered.webp",
              price: 14000,
              originalPrice: 15000
            }, {
              title: "Krishna Theme Naming Ceremony Balloon Decor",
              image: "https://www.partyone.in/suploads/2025/Mar/11/39386/1741672090White-and-Blue-Balloon-Decoration-for-Naming-Ceremony-scaled-1.webp",
              price: 8000,
              originalPrice: 10000
            },
            {
              title: "Name Reveal Pink Backdrop Ring Decor",
              image: "https://www.partyone.in/suploads/2025/Mar/10/39381/1741596811image-22-2.webp",
              price: 5000,
              originalPrice: 6000
            },
            {
              title: "Naming Ceremony Fresh Flower Decoration",
              image: "https://www.partyone.in/suploads/2025/Mar/12/39393/1741756787464909908_571694795318308_6156864140752420733_n_1080-1.webp",
              price: 12000,
              originalPrice: 14000
            }, {
              title: "Naming Ceremony Ring Balloon Decoration",
              image: "https://www.partyone.in/suploads/2025/Mar/10/39378/1741588771image-21-1.webp",
              price: 3500,
              originalPrice: 5000
            },
            {
              title: "Pooja Backdrop Cradle Ceremony Decoration",
              image: "https://www.partyone.in/suploads/2025/Mar/10/39380/1741593033468997907_1304605800539711_9040199010833550683_n_1080.webp",
              price: 12000,
              originalPrice: 16000
            },
            {
              title: "Guess My Name Naming Ceremony Flower Decor",
              image: "https://www.partyone.in/suploads/2024/Dec/21/39157/1734779053image-146.webp",
              price: 14000,
              originalPrice: 16000
            }
        ]
      },
  
      // ------------------ TITLE 4------------------
      {
        title: "Surprises",
        image: "https://www.partyone.in/suploads/2024/Jun/25/38856/1719320437IMG_E7333.webp",
        description: "We specialize in creating unforgettable surprise events.",
        details: [
          {
              title: "Car Boot Pop Up Surprise Decor",
              image: "https://www.partyone.in/suploads/2024/Oct/01/39013/1727785080WhatsApp-Image-2024-08-28-at-10.02.webp",
              price: 1700,
              originalPrice: 2000
            },
            {
              title: "Lovely Canopy and Love Box Surprise Decoration",
              image: "https://www.partyone.in/suploads/2024/Jun/25/38856/1719320437IMG_E7333.webp",
              price: 5500,
              originalPrice: 6500
            },
            {
              title: "Moonlit Moments Anniversary Surprise Decor",
              image: "https://www.partyone.in/suploads/2024/Aug/22/38969/17243062305-Upload.webp",
              price: 8000,
              originalPrice: 11000
            }, {
              title: "Red Hearts Marry Me Car Boot Decor",
              image: "https://www.partyone.in/suploads/2024/Oct/01/39019/1727785500Marry-Me-Car-Boot-Decoration-By-Loviesta-001-enhanced.webp",
              price: 1850,
              originalPrice: 2000
            },
            {
              title: "Best Guitar Surprise Party Planner",
              image: "https://www.partyone.in/suploads/2024/Sep/23/34321/1727082215Ziryab-Buist-Guitarist-in-Dubai-01%20(Custom)%20-%20Copy.webp",
              price: 4000,
              // originalPrice: 
            },
            {
              title: "Customized Personal Radio Show ",
              image: "https://www.partyone.in/suploads/2025/Mar/21/39424/1742549696portait-of-two-happy-radio-hosts-young-man-and-wo-2025-03-14-01-53-28-utc.webp",
              price: 1800,
              originalPrice: 2000
            }, {
              title: "Better Together Valentines Cabana Decoration",
              image: "https://www.partyone.in/suploads/2025/Jan/27/39273/1737979645WhatsApp-Image-2025-01-22-at-42136-PM-1.webp",
              price: 11000,
              originalPrice: 13000
            },
            {
              title: "Photo Balloon Decor with Rose Petal Path",
              image: "https://www.partyone.in/suploads/2025/Jan/27/39272/1737979336image-238.webp",
              price: 10000,
              originalPrice: 11000
            },
            {
              title: "Dreamy Marry Me Terrace Proposal Decoration",
              image: "https://www.partyone.in/suploads/2025/Jan/27/39271/1737979065image-233-1.webp",
              price: 11000,
              originalPrice: 13000
            }, {
              title: "Car Boot Joy Party Decor",
              image: "https://www.partyone.in/suploads/2024/Oct/01/39012/1727785203car%20boot.webp",
              price: 1500,
              originalPrice: 1700
            },
            {
              title: "Valentines Day Canopy Terrace Decoration",
              image: "https://www.partyone.in/suploads/2025/Jan/28/39275/1738064251image-240.webp",
              price: 4000,
              originalPrice: 5000
            },
            {
              title: "Surprise for Husband Car Boot Decor",
              image: "https://www.partyone.in/suploads/2024/Oct/01/39018/1727782949Anniversary-Car-Boot-Decor-450x450.webp",
              price: 2000,
              originalPrice: 2300
            }
        ]
      },

    //   ========== RECENT BOOKINGS ==============

    
        {
          title: "Polka Bluish Purple Birthday Decor",
          image: "https://www.partyone.in/suploads/2024/Jun/30/38882/1719744216IMG_4592.webp",
          date: "April 2025",
          location: "Hyderabad",
          price: 4000,
        },
        {
            title: "Archery Game for Party",
            image: "https://www.partyone.in/suploads/2025/Apr/07/39195/1744000166image-5_Nero_AI_Image_Upscaler_Photo_display.webp",
            date: "May 2025",
            location: "Delhi",
            price: 3000,
          },
        {
          title: "Moonlit Moments Surprise Terrace Decor",
          image: "https://www.partyone.in/suploads/2024/Aug/22/38968/17243059994-Upload_display.webp",
          date: "May 2025",
          location: "Hyderabad",
          price: 8500,
        },
        {
          title: "Castle Theme Kids Bouncing Castle",
          image: "https://www.partyone.in/suploads/2025/Jan/08/39179/1736333696image29_display.webp",
          date: "March 2025",
          location: "Banglore",
          price: 6000,
        },
        {
          title: "Photography",
          image: "https://www.partyone.in/suploads/2016/Apr/22/12290/1461321349dslr-camera-photography-nikon-d3000-dslr-professional-camera-photography---pasig---cameras_display.webp",
          date: "May 2025",
          location: "Bangalore", 
          price: 5000,
        },
        {
          title: "Tattoo Artist",
          image: "https://www.partyone.in/suploads/2023/Jun/27/3857/1687849419tattoo_display.webp",
          date: "Feb 2025",
          location: "Pune",
          price: 7000,
    
        },
        {
          title: "Magician",
          image: "https://www.partyone.in/suploads/2024/Nov/26/3376/1732605173Magic-Showmp4_snapshot_0523-1_display.webp",
          date: "May 2025",
          location: "Bangalore",
          price: 9000,
        },
        {
          title: "Adult Birthday Party Champagne Decor",
          image: "https://www.partyone.in/suploads/2024/Aug/23/38995/172441278531-Upload.webp",
          date: "April 2025",
          location: "Hyderabad",
          price: 7000,
        },
        {
          title: "White & Gold Opulent Anniversary Decoration",
          image: "https://www.partyone.in/suploads/2024/Jun/22/38820/1719040504IMG_4464_display.webp",
          date: "April 2025",
          location: "Hyderabad",
          price: 3000,
        },
        {
          title: "Hire U Shaped Bride To Be Balloon Decor at Home ",
          image: "https://www.partyone.in/suploads/2025/Feb/05/39300/1738753910image-177_Nero-AI_Photo.webp",
          date: "May 2025",
          location: "Delhi",
          price: 7000,
        },
        {
          title: "Rainbow Wonderscape Theme Decoration",
          image: "https://www.partyone.in/suploads/2023/Jul/20/38118/1689852510rainbow_display.webp",
          date: "April 2025",
          location: "Hyderabad",
          price: 9000,
        },
        {
          title: "Jungle Safari Theme Decor for Birth Days",
          image: "https://www.partyone.in/get-review-image?file_name=BRYGJUSJMM/1747468105o8HUlIZN.jpg",
          date: "May 2025",
          location: "Hyderabad",
          price: 7000,
        }

    ];
    
export default allProducts;
