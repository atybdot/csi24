import {
  PiCalendarDot,
  PiHouseLine,
  PiImage,
  PiInfo,
  PiUsersThree,
} from "react-icons/pi"

const navList = [
  {
    name: "home",
    icon: <PiHouseLine />,
    link: "/",
  },
  {
    name: "Events",
    icon: <PiCalendarDot />,
    link: "/events",
  },
  {
    name: "Gallery",
    icon: <PiImage />,
    link: "/gallery",
  },
  {
    name: "Faculty",
    icon: <PiUsersThree />,
    link: "#faculty",
  },
  {
    name: "About Us",
    icon: <PiInfo />,
    link: "/about-us",
  },
]
export default navList
