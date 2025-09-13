import { heroData, statsData, servicesPreview, whyChooseUs } from '../../constants/HomePageData';

export const useHome = () => {
  const pageData = {
    hero: heroData,
    stats: statsData,
    services: servicesPreview,
    whyChoose: whyChooseUs
  };

  return {
    pageData
  };
};