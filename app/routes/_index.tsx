import { useEffect, useState } from 'react';
import IndexDesktop from '~/components/desktop/IndexDesktop';
import IndexMobile from '~/components/mobile/IndexMobile';

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <IndexMobile /> : <IndexDesktop />;
};

export default Index;
