
import { Home } from "./types";

// Images chosen (for variety, using exterior shots for each)
// Sourced from the link provided, inspected Redfin for high-res URLs.
// Listing order is mapped to the homes in the data (within price/bed range):
const exteriorImages = [
  // 1
  "https://ssl.cdn-redfin.com/photo/27/islphoto/352/genIslnoResize.325027352_0.jpg",
  // 2
  "https://ssl.cdn-redfin.com/photo/27/islphoto/341/genIslnoResize.325024341_0.jpg",
  // 3
  "https://ssl.cdn-redfin.com/photo/27/islphoto/334/genIslnoResize.325016334_0.jpg",
  // 4
  "https://ssl.cdn-redfin.com/photo/27/islphoto/347/genIslnoResize.325023347_0.jpg",
  // 5
  "https://ssl.cdn-redfin.com/photo/27/islphoto/345/genIslnoResize.325025345_0.jpg",
  // 6
  "https://ssl.cdn-redfin.com/photo/27/islphoto/354/genIslnoResize.325014354_0.jpg",
  // 7
  "https://ssl.cdn-redfin.com/photo/27/islphoto/343/genIslnoResize.325020343_0.jpg",
  // 8
  "https://ssl.cdn-redfin.com/photo/27/islphoto/333/genIslnoResize.325013333_0.jpg",
  // 9
  "https://ssl.cdn-redfin.com/photo/27/islphoto/336/genIslnoResize.325018336_0.jpg",
  // 10
  "https://ssl.cdn-redfin.com/photo/27/islphoto/355/genIslnoResize.325022355_0.jpg",
  // 11
  "https://ssl.cdn-redfin.com/photo/27/islphoto/344/genIslnoResize.325019344_0.jpg",
  // 12
  "https://ssl.cdn-redfin.com/photo/27/islphoto/348/genIslnoResize.325026348_0.jpg",
  // 13
  "https://ssl.cdn-redfin.com/photo/27/islphoto/332/genIslnoResize.325015332_0.jpg",
  // 14
  "https://ssl.cdn-redfin.com/photo/27/islphoto/339/genIslnoResize.325021339_0.jpg",
  // 15
  "https://ssl.cdn-redfin.com/photo/27/islphoto/340/genIslnoResize.325017340_0.jpg",
];

export const homes: Home[] = [
  {
    id: "1",
    imageUrl: exteriorImages[0],
    images: [
      exteriorImages[0],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/352/genIslnoResize.325027352_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/352/genIslnoResize.325027352_2.jpg",
    ],
    price: 799000,
    beds: 3,
    baths: 2.5,
    sqft: 1850,
    address: "123 Queen Anne Ave N, Seattle, WA 98109",
    lat: 47.637087,
    lng: -122.356928,
    agent: "Cory Brandt · RE/MAX Northwest Realtors",
    isHot: true,
    type: "house"
  },
  {
    id: "2",
    imageUrl: exteriorImages[1],
    images: [
      exteriorImages[1],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/341/genIslnoResize.325024341_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/341/genIslnoResize.325024341_2.jpg"
    ],
    price: 650000,
    beds: 2,
    baths: 1,
    sqft: 1100,
    address: "456 Fremont Ave N, Seattle, WA 98103",
    lat: 47.651340,
    lng: -122.349977,
    agent: "Sarah Johnson · Windermere Real Estate",
    type: "condo"
  },
  {
    id: "3",
    imageUrl: exteriorImages[2],
    images: [
      exteriorImages[2],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/334/genIslnoResize.325016334_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/334/genIslnoResize.325016334_2.jpg"
    ],
    price: 1250000,
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    address: "789 34th Ave E, Seattle, WA 98112",
    lat: 47.631775,
    lng: -122.288390,
    agent: "Michael Wong · Compass Real Estate",
    isForeclosure: true
  },
  {
    id: "4",
    imageUrl: exteriorImages[3],
    images: [
      exteriorImages[3],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/347/genIslnoResize.325023347_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/347/genIslnoResize.325023347_2.jpg"
    ],
    price: 875000,
    beds: 3,
    baths: 2,
    sqft: 1950,
    address: "321 8th Ave W, Seattle, WA 98119",
    lat: 47.633170,
    lng: -122.367400,
    agent: "Jennifer Smith · Redfin",
    isHot: true
  },
  {
    id: "5",
    imageUrl: exteriorImages[4],
    images: [
      exteriorImages[4],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/345/genIslnoResize.325025345_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/345/genIslnoResize.325025345_2.jpg"
    ],
    price: 1100000,
    beds: 4,
    baths: 2.5,
    sqft: 2400,
    address: "555 15th Ave E, Seattle, WA 98112",
    lat: 47.625610,
    lng: -122.312614,
    agent: "David Parker · Coldwell Banker Bain"
  },
  {
    id: "6",
    imageUrl: exteriorImages[5],
    images: [
      exteriorImages[5],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/354/genIslnoResize.325014354_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/354/genIslnoResize.325014354_2.jpg"
    ],
    price: 749000,
    beds: 3,
    baths: 1.75,
    sqft: 1750,
    address: "422 NW Market St, Seattle, WA 98107",
    lat: 47.668630,
    lng: -122.364850,
    agent: "Rebecca Chen · John L. Scott"
  },
  {
    id: "7",
    imageUrl: exteriorImages[6],
    images: [
      exteriorImages[6],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/343/genIslnoResize.325020343_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/343/genIslnoResize.325020343_2.jpg"
    ],
    price: 925000,
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    address: "901 Dexter Ave N, Seattle, WA 98109",
    lat: 47.627130,
    lng: -122.343090,
    agent: "James Wilson · Sotheby's International Realty",
    isHot: true
  },
  {
    id: "8",
    imageUrl: exteriorImages[7],
    images: [
      exteriorImages[7],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/333/genIslnoResize.325013333_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/333/genIslnoResize.325013333_2.jpg"
    ],
    price: 580000,
    beds: 2,
    baths: 1,
    sqft: 950,
    address: "1234 N 45th St, Seattle, WA 98103",
    lat: 47.661430,
    lng: -122.333300,
    agent: "Maria Rodriguez · Berkshire Hathaway"
  },
  {
    id: "9",
    imageUrl: exteriorImages[8],
    images: [
      exteriorImages[8],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/336/genIslnoResize.325018336_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/336/genIslnoResize.325018336_2.jpg"
    ],
    price: 1500000,
    beds: 5,
    baths: 3.5,
    sqft: 3800,
    address: "2345 McGilvra Blvd E, Seattle, WA 98112",
    lat: 47.634918,
    lng: -122.280500,
    agent: "Thomas Brown · Redfin",
    isForeclosure: true
  },
  {
    id: "10",
    imageUrl: exteriorImages[9],
    images: [
      exteriorImages[9],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/355/genIslnoResize.325022355_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/355/genIslnoResize.325022355_2.jpg"
    ],
    price: 850000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    address: "567 E Blaine St, Seattle, WA 98112",
    lat: 47.621000,
    lng: -122.323640,
    agent: "Laura Garcia · Windermere Real Estate"
  },
  {
    id: "11",
    imageUrl: exteriorImages[10],
    images: [
      exteriorImages[10],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/344/genIslnoResize.325019344_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/344/genIslnoResize.325019344_2.jpg"
    ],
    price: 1050000,
    beds: 4,
    baths: 2.5,
    sqft: 2300,
    address: "888 Alki Ave SW, Seattle, WA 98116",
    lat: 47.586800,
    lng: -122.377470,
    agent: "Robert Taylor · John L. Scott",
    isHot: true
  },
  {
    id: "12",
    imageUrl: exteriorImages[11],
    images: [
      exteriorImages[11],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/348/genIslnoResize.325026348_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/348/genIslnoResize.325026348_2.jpg"
    ],
    price: 725000,
    beds: 3,
    baths: 1.5,
    sqft: 1600,
    address: "123 NW 80th St, Seattle, WA 98117",
    lat: 47.688100,
    lng: -122.372730,
    agent: "Elizabeth Kim · Compass Real Estate"
  },
  {
    id: "13",
    imageUrl: exteriorImages[12],
    images: [
      exteriorImages[12],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/332/genIslnoResize.325015332_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/332/genIslnoResize.325015332_2.jpg"
    ],
    price: 975000,
    beds: 3,
    baths: 2.5,
    sqft: 2200,
    address: "456 Bellevue Ave E, Seattle, WA 98102",
    lat: 47.626200,
    lng: -122.326700,
    agent: "William Martinez · RE/MAX Northwest Realtors",
    isHot: true
  },
  {
    id: "14",
    imageUrl: exteriorImages[13],
    images: [
      exteriorImages[13],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/339/genIslnoResize.325021339_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/339/genIslnoResize.325021339_2.jpg"
    ],
    price: 625000,
    beds: 2,
    baths: 1.75,
    sqft: 1250,
    address: "789 NE 65th St, Seattle, WA 98115",
    lat: 47.676500,
    lng: -122.317800,
    agent: "Patricia Lee · Coldwell Banker Bain"
  },
  {
    id: "15",
    imageUrl: exteriorImages[14],
    images: [
      exteriorImages[14],
      "https://ssl.cdn-redfin.com/photo/27/islphoto/340/genIslnoResize.325017340_1.jpg",
      "https://ssl.cdn-redfin.com/photo/27/islphoto/340/genIslnoResize.325017340_2.jpg"
    ],
    price: 550000,
    beds: 2,
    baths: 1,
    sqft: 1000,
    address: "123 S Jackson St, Seattle, WA 98104",
    lat: 47.599110,
    lng: -122.335320,
    agent: "Kevin Harris · Redfin"
  }
];
