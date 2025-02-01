// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import Home from "layouts/pages/landing-pages/home";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";

const routes = [
  {
    name: "routes.home", // Localized name
    route: "/pages/landing-pages/home",
    component: <Home />,
  },
  {
    name: "routes.aboutUs", // Localized name
    route: "/pages/landing-pages/about-us",
    component: <AboutUs />,
  },
  {
    name: "routes.contactUs", // Localized name
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
  },
  {
    name: "routes.ourCases", // Localized name
    route: "/pages/landing-pages/author",
    component: <Author />,
  },
];


export default routes;
