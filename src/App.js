/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Material Kit 2 React routes
import routes from "routes";
import footerRoutes from "footer.routes";
import FloatingIcons from "components/FloatingIcons/FloatingIcons";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "components/LanguageSwitcher/LanguageSwitcher";

export default function App() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
console.log(pathname);
  useEffect(() => {
    const lang = i18n.language; // Get the current language
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr'; // Apply RTL or LTR based on language
  }, [i18n.language]);
  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageSwitcher  sx={{
         position: 'fixed',  // Makes the button fixed on the screen
         top: 10,            // Distance from the top
         left: 10,           // Distance from the left
         zIndex: 1000,       // Ensures the button is above other elements
         backgroundColor: 'white', // Optional: makes the button background visible
         boxShadow: 1,       // Optional: adds subtle shadow to the button
         padding: '5px',     // Optional: adds padding for better appearance
      }} />
      <FloatingIcons/>
      <DefaultNavbar routes={routes} sticky />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
      </Routes>
      <DefaultFooter content={footerRoutes} />
    </ThemeProvider>
  );
}
