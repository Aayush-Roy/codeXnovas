import strawImage from '../assets/vanilla.png';
import chocoImage from '../assets/choco.png';
import greenImage from '../assets/green.png';
import velvetImage from '../assets/velvet.png'; // assuming this is strawberry

export const cones = [
  {
  id: 1,
  name: "Vanilla Dream",
  flavor: "vanilla",
  mainImage: velvetImage,
  thumbnailImage: velvetImage,
  bgColor: "#2bbdbc", 
  gradientText: "from-[#2bbdbc] via-[#2bbdbc] to-white", // teal dominates
  glowColor: "from-[#2bbdbc] via-white to-[#2bbdbc]",     // strong teal glow with a touch of white
  description: "Classic vanilla ice cream with a smooth, creamy texture that melts perfectly on your tongue"
}

,

  {
    id: 2,
    name: "Strawberry Bliss",
    flavor: "strawberry",
    mainImage: strawImage,
    thumbnailImage: strawImage,
    bgColor: "from-pink-300 via-rose-300 to-red-300",
    gradientText: "from-pink-600 via-rose-600 to-red-600",
    glowColor: "from-pink-500 to-rose-500",
    description: "Fresh strawberry ice cream bursting with natural fruit flavors and real strawberry pieces"
  },
  {
    id: 3,
    name: "Chocolate Delight",
    flavor: "chocolate",
    mainImage: chocoImage,
    thumbnailImage: chocoImage,
    bgColor: "from-yellow-300 via-amber-400 to-orange-400",
    gradientText: "from-yellow-700 via-amber-700 to-orange-700",
    glowColor: "from-yellow-600 to-orange-600",
    description: "Rich and indulgent chocolate ice cream made with premium cocoa for the ultimate treat"
  },
  {
    id: 4,
    name: "Mint Fresh",
    flavor: "mint",
    mainImage: greenImage,
    thumbnailImage: greenImage,
    bgColor: "from-green-300 via-emerald-300 to-teal-300",
    gradientText: "from-green-600 via-emerald-600 to-teal-600",
    glowColor: "from-green-500 to-emerald-500",
    description: "Refreshing mint ice cream with a cool, invigorating taste that awakens your senses"
  }
];
