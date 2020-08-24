import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import InfoIcon from "@material-ui/icons/Info";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AddIcon from "@material-ui/icons/Add";
import ForumsIcon from "@material-ui/icons/Forum";
import PersonIcon from "@material-ui/icons/Person";

export const ROUTES_ARRAY = [
  { link: "/", title: "Home", icon: HomeIcon },
  { link: "/about", title: "About", icon: InfoIcon },
  { link: "/contact-us", title: "Contact Us", icon: PhoneIcon },
  { link: "/forums", title: "Forums", icon: ForumsIcon },
  { link: "/sign-in", title: "Sign In", icon: SupervisorAccountIcon },
  { link: "/sign-up", title: "Sign Up", icon: AddIcon },
];

export const AUTH_ROUTES_ARRAY = [
  { link: "/", title: "Home", icon: HomeIcon },
  { link: "/about", title: "About", icon: InfoIcon },
  { link: "/contact-us", title: "Contact Us", icon: PhoneIcon },
  { link: "/forums", title: "Forums", icon: ForumsIcon },
  { link: "/profiles/:id", title: "Your Profile", icon: PersonIcon },
];

export const TITLE_ARRAY = [
  { link: "/", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/contact-us", title: "Contact Us" },
  { link: "/forums", title: "Forums" },
  { link: "/sign-in", title: "Sign In" },
  { link: "/sign-up", title: "Sign Up" },
  { link: "/forums/categories", title: "Show Category" },
  { link: "/profiles", title: "Your Profile" },
  { link: "/forums/categories/topics", title: "Show Topic" },
];
