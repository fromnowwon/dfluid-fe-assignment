export enum Region {
  Europe = 'Europe',
  Asia = 'Asia',
  Africa = 'Africa',
  America = 'America',
  Oceania = 'Oceania',
}

export interface Heritage {
  id: number;
  region: Region;
  country: string;
  name: string;
  year: number;
  image: string;
  description: string;
  visitInfo: string;
}

export const HERITAGES_DATA: Heritage[] = [
  {
    id: 1,
    region: Region.Europe,
    country: 'Italy',
    name: 'Pica',
    year: 1173,
    image: '/assets/images/heritage_a.jpg',
    description:
      "The Leaning Tower of Pisa, or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral and Pisa Baptistry.",
    visitInfo:
      'Open to visitors year-round. Ticket price: €18. Operating hours: 9:00 AM to 8:00 PM.',
  },
  {
    id: 2,
    region: Region.Europe,
    country: 'Spain',
    name: 'Sagrada Família',
    year: 1882,
    image: '/assets/images/heritage_b.jpg',
    description:
      'The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852–1926), in 2005 his work on Sagrada Família was added to an existing (1984) UNESCO World Heritage Site, "Works of Antoni Gaudí". On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica.',
    visitInfo:
      'Tickets range from €20 to €35. Opening hours: 9:00 AM to 8:00 PM. Advance booking recommended.',
  },
  {
    id: 3,
    region: Region.America,
    country: 'US',
    name: 'Fallingwater',
    year: 1935,
    image: '/assets/images/heritage_c.jpg',
    description:
      "Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart township, in the Laurel Highlands of southwest Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river. The house was designed to serve as a weekend retreat for Liliane and Edgar J. Kaufmann, the owner of Pittsburgh's Kaufmann's Department Store.",
    visitInfo:
      'Ticket prices: $25 for adults. Open daily from 9:00 AM to 5:00 PM.',
  },
  {
    id: 4,
    region: Region.Europe,
    country: 'Russia',
    name: "Saint Basil's Cathedral",
    year: 1555,
    image: '/assets/images/heritage_d.jpg',
    description:
      "The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.",
    visitInfo:
      'The cathedral is open to visitors from 10:00 AM to 7:00 PM. Admission: 500 RUB.',
  },
];
