import { 
  servicesHero, 
  primaryService, 
  secondaryService, 
  serviceComparison 
} from '../../constants/ServicesPageData';

export const useServices = () => {
  return {
    servicesHero,
    primaryService,
    secondaryService,
    serviceComparison
  };
};