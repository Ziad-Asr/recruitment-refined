import { useState } from 'react';
import { policiesHero, policies, contactInfo } from '../../constants/PoliciesPageData';

export const usePolicies = () => {
  const [activePolicy, setActivePolicy] = useState(policies[0]?.id || 'privacy');

  return {
    policiesHero,
    policies,
    contactInfo,
    activePolicy,
    setActivePolicy
  };
};