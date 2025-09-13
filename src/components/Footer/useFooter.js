import { companyInfo } from '../../constants/HeaderData';

export const useFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerCompanyInfo = {
    ...companyInfo,
    description: 'Your trusted partner in recruitment excellence. Connecting top talent with leading companies across industries through innovative solutions and personalized service.'
  };

  const quickLinks = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'About Us', path: '/about' },
    { id: 3, label: 'Services', path: '/services' },
    { id: 4, label: 'Policies', path: '/policies' },
    { id: 5, label: 'Contact', path: '/contact' }
  ];

  const services = [
    { id: 1, name: 'Traditional Recruitment' },
    { id: 2, name: 'Executive Search' },
    { id: 3, name: 'Temporary Staffing' },
    { id: 4, name: 'Digital Marketplace' },
    { id: 5, name: 'HR Consulting' }
  ];

  const contactInfo = {
    address: '123 Business Avenue, New York, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'info@careerlink.com'
  };

  const socialLinks = [
    { 
      id: 1, 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/careerlink', 
      icon: '💼' 
    },
    { 
      id: 2, 
      name: 'Twitter', 
      url: 'https://twitter.com/careerlink', 
      icon: '🐦' 
    },
    { 
      id: 3, 
      name: 'Facebook', 
      url: 'https://facebook.com/careerlink', 
      icon: '📘' 
    },
    { 
      id: 4, 
      name: 'Instagram', 
      url: 'https://instagram.com/careerlink', 
      icon: '📷' 
    }
  ];

  return {
    companyInfo: footerCompanyInfo,
    quickLinks,
    services,
    contactInfo,
    socialLinks,
    currentYear
  };
};