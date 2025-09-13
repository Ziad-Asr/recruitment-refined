import { useNavigate } from 'react-router-dom';

export const useNotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return {
    goHome
  };
};