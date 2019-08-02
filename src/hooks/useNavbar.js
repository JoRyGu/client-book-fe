import {useState, useEffect} from 'react';

const useNavbar = (breakpoints) => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkWindowIsMobile = () => window.innerWidth < breakpoints.md;

    setIsMobile(checkWindowIsMobile());
    const windowListener = () => setIsMobile(checkWindowIsMobile());
    window.addEventListener('resize', windowListener);

    return () => window.removeEventListener('resize', windowListener);
  }, [breakpoints]);

  return isMobile;
};

export default useNavbar;
