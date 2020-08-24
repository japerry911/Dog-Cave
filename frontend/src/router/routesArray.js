import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import InfoIcon from "@material-ui/icons/Info";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AddIcon from "@material-ui/icons/Add";
import ForumsIcon from "@material-ui/icons/Forum";
import CategoryIcon from "@material-ui/icons/Category";

export const ROUTES_ARRAY = [
  { link: "/", title: "Home", icon: HomeIcon },
  { link: "/about", title: "About", icon: InfoIcon },
  { link: "/contact-us", title: "Contact Us", icon: PhoneIcon },
  { link: "/forums", title: "Forums", icon: ForumsIcon },
  { link: "/sign-in", title: "Sign In", icon: SupervisorAccountIcon },
  { link: "/sign-up", title: "Sign Up", icon: AddIcon },
  { link: "/forums/categories", title: "Show Category", icon: CategoryIcon },
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
