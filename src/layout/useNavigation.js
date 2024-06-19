import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  return handleNavigate;
};