import { FaGithub, FaLink, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

// Define the type for each social media item
interface SocialItem {
  icon: JSX.Element;
  path: string;
}

// Define the type for the styles
interface Styles {
  containerStyle: string;
  iconStyles: string;
}

// Define the social media links array with proper types
const socials: SocialItem[] = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLink />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

// Social component with typed props
const Social: React.FC<Styles> = ({ containerStyle, iconStyles }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
