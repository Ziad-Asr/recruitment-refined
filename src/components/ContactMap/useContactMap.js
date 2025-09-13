import { contactInfo } from '../../constants/ContactPageData';

export const useContactMap = () => {
  const position = [contactInfo.coordinates.lat, contactInfo.coordinates.lng];
  
  const mapConfig = {
    zoom: 15,
    scrollWheelZoom: false
  };

  return {
    position,
    mapConfig
  };
};