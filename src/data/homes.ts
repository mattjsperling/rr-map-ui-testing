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
    imageUrl: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b06?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=600&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556912990-d9e0b7a4ec67?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1465101178521-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460411804119-9a4f655147ba?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1457666134378-6b77915bd5d8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1464254786740-b98b72b3d774?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1464254786740-b98b72b3d774?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519121783345-3bbdfbe6a041?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519121783345-3bbdfbe6a041?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1460411804119-9a4f655147ba?auto=format&fit=crop&w=600&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1531973968078-9bb02785f314?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1531973968078-9bb02785f314?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519121783345-3bbdfbe6a041?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b06?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1520215792330-76526442b845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1520215792330-76526442b845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1494526585095-5517f248e7ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1494526585095-5517f248e7ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1520215792330-76526442b845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1599420186946-7b6ca84ef957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1572120360610-d971b9ed5db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1599420186946-7b6ca84ef957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1599420186946-7b6ca84ef957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1572120360610-d971b9ed5db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1572120360610-d971b9ed5db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1572120360610-d971b9ed5db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1599420186946-7b6ca84ef957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1564019670739-55988ea34917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1564019670739-55988ea34917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1556912173-ca9373b7a9c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    images: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1556912173-ca9373b7a9c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1564019670739-55988ea34917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    ],
    price: 1100000,
    beds: 4,
    baths: 2.5,
    sqft: 2400,
    address: "789 Lake Washington Blvd E, Seattle, WA 98112",
    lat: 47.619486,
    lng: -122.290392,
    agent: "Amanda Robinson · Windermere Real Estate",
    type: "house"
  }
]
