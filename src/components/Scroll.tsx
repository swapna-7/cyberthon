import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll: React.FC = () => {
  // Extracts pathname property from the location object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component does not need to render anything
};

export default Scroll;
