import { Home } from "./types";

export const homes: Home[] = [
  {
    id: "1",
    imageUrl: "https://ssl.cdn-redfin.com/photo/27/islphoto/342/genIslnoResize.325026342_0.jpg", // exterior
    images: [
      "/lovable-uploads/3b20155a-aae9-4c7c-819c-b25590a54abf.png", // New provided image 1
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80", // exterior (modern home)
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80", // living room
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80", // kitchen
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", // bedroom
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b06?auto=format&fit=crop&w=800&q=80" // bath
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
    imageUrl: "https://images.unsplash.com/photo-1464254786740-b98b72b3d774?auto=format&fit=crop&w=800&q=80", // exterior
    images: [
      "/lovable-uploads/1427df1f-6dce-4f76-8c92-cfe25e7f939e.png", // New provided image 2
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80", // living
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // kitchen
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80", // bedroom
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80" // bath
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
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // exterior
    images: [
      "/lovable-uploads/5e8344c2-859e-4325-a48f-02b43696470c.png", // New provided image 3
      "https://images.unsplash.com/photo-1457666134378-6b77915bd5d8?auto=format&fit=crop&w=800&q=80", // living
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", // kitchen
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80", // bedroom
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=800&q=80" // bath
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
    imageUrl: "https://images.unsplash.com/photo-1564019670739-55988ea34917?auto=format&fit=crop&w=800&q=80", // exterior
    images: [
      "/lovable-uploads/906b6785-8982-462d-8e1f-addf995488a8.png", // New provided image 4
      "https://images.unsplash.com/photo-1556912173-ca9373b7a9c4?auto=format&fit=crop&w=800&q=80", // living
      "https://images.unsplash.com/photo-1519121783345-3bbdfbe6a041?auto=format&fit=crop&w=800&q=80", // kitchen
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80", // bedroom
      "https://images.unsplash.com/photo-1572120360610-d971b9ed5db2?auto=format&fit=crop&w=800&q=80" // bath
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
    imageUrl: "https://images.unsplash.com/photo-1572120360610-d971b9ed5db2?auto=format&fit=crop&w=800&q=80", // exterior
    images: [
      "/lovable-uploads/5fa08358-7b48-4304-9c6b-d3b607cf2941.png", // New provided image 5
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", // living
      "https://images.unsplash.com/photo-1599420186946-7b6ca84ef957?auto=format&fit=crop&w=800&q=80", // kitchen
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", // bedroom
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=800&q=80" // bath
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
    imageUrl: "https://images.unsplash.com/photo-1549187774-b4e9b0445b06?auto=format&fit=crop&w=800&q=80", // exterior
    images: [
      "/lovable-uploads/85628831-fc31-42ca-bf95-3be5b5ce8f15.png", // New provided image 6
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80", // living
      "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=800&q=80", // kitchen
      "https://images.unsplash.com/photo-1531973968078-9bb02785f314?auto=format&fit=crop&w=800&q=80", // bedroom
      "https://images.unsplash.com/photo-1556912990-d9e0b7a4ec67?auto=format&fit=crop&w=800&q=80" // bath
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
    imageUrl: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=800&q=80", // exterior
    images: [
      "/lovable-uploads/ecabd67e-12ae-4b89-8ca3-71315bc4f182.png", // New provided image 7
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=800&q=80", // living
      "https://images.unsplash.com/photo-1494526585095-5517f248e7ca?auto=format&fit=crop&w=800&q=80", // kitchen
      "https://images.unsplash.com/photo-1519121783345-3bbdfbe6a041?auto=format&fit=crop&w=800&q=80", // bedroom
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" // bath
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
    imageUrl: "https://images.unsplash.com/photo-1519121783345-3bbdfbe6a041?auto=format&fit=crop&w=800&q=80", // exterior
    images: [
      "/lovable-uploads/59166ad6-f58f-49c3-bd1d-ebb2f897e6eb.png", // New provided image 8
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80", // living
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80", // kitchen
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", // bedroom
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80" // bath
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
    imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80", // exterior
    images: [
      "/lovable-uploads/e8659015-9db2-4988-9bc6-a81dbe774f75.png", // New provided image 9
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80", // living
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=600&q=80", // kitchen
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80", // bedroom
      "https://images.unsplash.com/photo-1460411804119-9a4f655147ba?auto=format&fit=crop&w=600&q=80" // bath
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
    imageUrl: "https://images.unsplash.com/photo-1531973968078-9bb02785f314?auto=format&fit=crop&w=600&q=80", // exterior
    images: [
      "/lovable-uploads/0d0500c3-3c8b-4071-aeb5-02aac3b7b333.png", // New provided image 10
      "https://images.unsplash.com/photo-1519121783345-3bbdfbe6a041?auto=format&fit=crop&w=600&q=80", // living
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b06?auto=format&fit=crop&w=600&q=80", // kitchen
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=600&q=80", // bedroom
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" // bath
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
      "/lovable-uploads/81b74edc-27b5-4551-9b70-48db70c68760.png", // New provided image 11
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // living
      "https://images.unsplash.com/photo-1494526585095-5517f248e7ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // kitchen
      "https://images.unsplash.com/photo-1520215792330-76526442b845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // bedroom
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" // bath
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
      "/lovable-uploads/e2fc1fcb-fa82-4297-9631-966e7c39e0c2.png", // New provided image 12
      "https://images.unsplash.com/photo-1494526585095-5517f248e7ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // living
      "https://images.unsplash.com/photo-1520215792330-76526442b845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // kitchen
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // bedroom
      "https://images.unsplash.com/photo-1494526585095-5517f248e7ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" // bath
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
      "/lovable-uploads/8dc031cc-aa7c-412b-bb42-9937c8a52333.png", // New provided image 13
      "https://images.unsplash.com/photo-1599420186946-7b6ca84ef957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // living
      "https://images.unsplash.com/photo-1572120360610-d971b9ed5db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // kitchen
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // bedroom
      "https://images.unsplash.com/photo-1599420186946-7b6ca84ef957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" // bath
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
      "/lovable-uploads/ee673b21-34d5-49d1-a7ee-0e0c53b76436.png", // New provided image 14
      "https://images.unsplash.com/photo-1572120360610-d971b9ed5db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // living
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // kitchen
      "https://images.unsplash.com/photo-1599420186946-7b6ca84ef957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", // bedroom
      "https://images.unsplash.com/photo-1572120360610-d971b9ed5db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" // bath
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
      "/lovable-uploads/66ae71e9-da56-4fb5-b3d0-05d0324d4b4b.png", // New provided image 15
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1599420186946-7b6ca84ef957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdl
