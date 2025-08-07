export interface Project {
  title: string;
  description: string;
  technology: string;
  year: string;
  link: string;
  image: string;
  imageAlt: string;
  backgroundColor?: string;
  status: "completed" | "coming-soon";
}

export const projects: Project[] = [
  {
    title: "whiskyonthe.rocks",
    description: "whiskyonthe.rocks is a whisky blog with a focus on reviews of single malt scotch whisky.",
    technology: "Wordpress",
    year: "2024",
    link: "https://whiskyonthe.rocks",
    image: "/images/whiskyontherocks.png.webp",
    imageAlt: "Screenshot of whiskyonthe.rocks website showing whisky bottle reviews and tasting notes",
    backgroundColor: "#e2d8c8",
    status: "completed"
  },
  {
    title: "Scotch Whisky Map",
    description: "An interactive map of Scottish whisky distilleries with detailed information and locations.",
    technology: "WordPress & Leaflet",
    year: "2024",
    link: "https://whiskyonthe.rocks/learn-about-whisky/scotland-whisky-map/",
    image: "/images/whisky-map-clip.png",
    imageAlt: "Interactive map of Scottish whisky distilleries with pins marking different locations",
    status: "completed"
  }
]