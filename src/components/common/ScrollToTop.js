import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Only scroll to top if we're NOT on the home page
    if (pathname !== '/' && pathname !== '') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
  return null;
}

export default ScrollToTop;