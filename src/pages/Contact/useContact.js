import { 
  contactHero, 
  contactInfo, 
  officeLocations, 
  contactMethods, 
  faqs 
} from '../../constants/ContactPageData';

export const useContact = () => {
  return {
    contactHero,
    contactInfo,
    officeLocations,
    contactMethods,
    faqs
  };
};