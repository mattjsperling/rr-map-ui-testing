export interface Home {
  id: string;
  imageUrl: string;
  images?: string[];
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  lat: number;
  lng: number;
  agent: string;
  isHot?: boolean;
  isForeclosure?: boolean;
  type?: string;
  sold?: boolean;
  forRent?: boolean;
}

export const homes: Home[] = [
  {
    id: "1",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/6d00fc81de657ed1a5e3f59414f4ae834f36a2ea"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/6d00fc81de657ed1a5e3f59414f4ae834f36a2ea",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/6d00fc81de657ed1a5e3f59414f4ae834f36a2ea",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/6d00fc81de657ed1a5e3f59414f4ae834f36a2ea",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/6d00fc81de657ed1a5e3f59414f4ae834f36a2ea",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
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
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/6d00fc81de657ed1a5e3f59414f4ae834f36a2ea",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/6d00fc81de657ed1a5e3f59414f4ae834f36a2ea",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
    ],
    price: 1350000,
    beds: 4,
    baths: 3,
    sqft: 3000,
    address: "321 Lakeside Ave S, Seattle, WA 98144",
    lat: 47.594250,
    lng: -122.285350,
    agent: "Daniel Clark · Sotheby's International Realty",
    isForeclosure: true
  },
  {
    id: "16",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a"
    ],
    price: 890000,
    beds: 3,
    baths: 2,
    sqft: 1950,
    address: "555 NW 85th St, Seattle, WA 98117",
    lat: 47.690860,
    lng: -122.362070,
    agent: "Susan Anderson · Berkshire Hathaway"
  },
  {
    id: "17",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
    ],
    price: 1200000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    address: "234 36th Ave E, Seattle, WA 98112",
    lat: 47.620300,
    lng: -122.287600,
    agent: "Amanda White · Redfin",
    isHot: true
  },
  {
    id: "18",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
    ],
    price: 699000,
    beds: 3,
    baths: 1.5,
    sqft: 1500,
    address: "789 N 50th St, Seattle, WA 98103",
    lat: 47.665700,
    lng: -122.338990,
    agent: "Jason Thompson · Windermere Real Estate"
  },
  {
    id: "19",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a"
    ],
    price: 995000,
    beds: 3,
    baths: 2.5,
    sqft: 2250,
    address: "123 E Galer St, Seattle, WA 98102",
    lat: 47.632850,
    lng: -122.321150,
    agent: "Emily Davis · Compass Real Estate"
  },
  {
    id: "20",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
    images: [
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a",
      "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7"
    ],
    price: 575000,
    beds: 2,
    baths: 1,
    sqft: 1000,
    address: "456 N 46th St, Seattle, WA 98103",
    lat: 47.662100,
    lng: -122.347300,
    agent: "Kevin Nelson · John L. Scott"
  }
];
