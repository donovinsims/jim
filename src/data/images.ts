import type { ResponsiveImage } from '../types.ts';

import hero640 from '../assets/images/hero-640.webp';
import hero1024 from '../assets/images/hero-1024.webp';
import basement640 from '../assets/images/basement-640.webp';
import basement1024 from '../assets/images/basement-1024.webp';
import roof640 from '../assets/images/roof-640.webp';
import roof1024 from '../assets/images/roof-1024.webp';
import family640 from '../assets/images/family-640.webp';
import family1024 from '../assets/images/family-1024.webp';

export const HERO_IMAGE: ResponsiveImage = {
  src: hero1024,
  srcSet: `${hero640} 640w, ${hero1024} 1024w`,
  sizes: '(min-width: 1024px) 40vw, 100vw',
  width: 1024,
  height: 572,
};

export const BASEMENT_IMAGE: ResponsiveImage = {
  src: basement1024,
  srcSet: `${basement640} 640w, ${basement1024} 1024w`,
  sizes: '(min-width: 1024px) 40vw, 100vw',
  width: 1024,
  height: 765,
};

export const ROOF_IMAGE: ResponsiveImage = {
  src: roof1024,
  srcSet: `${roof640} 640w, ${roof1024} 1024w`,
  sizes: '(min-width: 1024px) 40vw, 100vw',
  width: 1024,
  height: 765,
};

export const FAMILY_IMAGE: ResponsiveImage = {
  src: family1024,
  srcSet: `${family640} 640w, ${family1024} 1024w`,
  sizes: '(min-width: 1024px) 40vw, 100vw',
  width: 1024,
  height: 572,
};
