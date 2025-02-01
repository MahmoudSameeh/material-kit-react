import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import MKButton from 'components/MKButton';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
const LanguageSwitcher = (props) => {
  const { i18n } = useTranslation();

  // Function to change the language
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Get current language (either 'en' or 'ar')
  const currentLanguage = i18n.language;

  return (
      <IconButton sx={{paddingTop:'0px', ...props.sx}}
        onClick={() => handleLanguageChange(currentLanguage === 'en' ? 'ar' : 'en')}
      >
         <LanguageIcon fontSize="inherit" />
      </IconButton>
  );
};

export default LanguageSwitcher;
