export const truncateText = (text, wordLimit = 30) => {
  if (!text) return "";

  const words = text.split(/\s+/);
  if (words.length <= wordLimit) {
    return text;
  }

  return words.slice(0, wordLimit).join(" ") + "...";
};

export const displayHumanDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  // Format the date as a human-readable string
  const options = {
    weekday: "long", // Day of the week (e.g., Monday)
    year: "numeric", // Year in full (e.g., 2024)
    month: "long", // Month in full (e.g., December)
    day: "numeric", // Day of the month (e.g., 12)
    hour: "2-digit", // Hour in 2-digit format (e.g., 01)
    minute: "2-digit", // Minute in 2-digit format (e.g., 05)
    second: "2-digit", // Second in 2-digit format (e.g., 30)
  };

  return date.toLocaleString("en-US", options); // You can change 'en-US' to your preferred locale
};

import { AiOutlineFundProjectionScreen, AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineSportsSoccer, MdOutlineBusinessCenter } from "react-icons/md";
import { BiNews } from "react-icons/bi";

export const categorys = [
  {
    name: "Sport",
    description: "Explore the latest in sports.",
    href: "/category/Sport",
    icon: MdOutlineSportsSoccer,
  },
  {
    name: "Tech",
    description: "Discover trending technology.",
    href: "/category/Tech",
    icon: AiOutlineFundProjectionScreen,
  },
  {
    name: "News",
    description: "Stay updated with breaking news.",
    href: "/category/News",
    icon: BiNews,
  },
  {
    name: "Business",
    description: "Insights for growing businesses.",
    href: "/category/Business",
    icon: MdOutlineBusinessCenter,
  },
  {
    name: "General",
    description: "Browse a variety of topics.",
    href: "/category/General",
    icon: AiOutlineGlobal,
  },
];
