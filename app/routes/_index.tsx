import content from '../data/content.json';
import { json, type LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useEffect, useState } from 'react';
import IndexDesktop from '~/components/desktop/IndexDesktop';
import IndexMobile from '~/components/mobile/IndexMobile';

export const loader: LoaderFunction = async () => {
  return json(content);
};

const Index = () => {
  const data = useLoaderData<typeof content>();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <IndexMobile {...data} /> : <IndexDesktop {...data} />;
};

export default Index;
