import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Faishal';

export const lastName = 'Manzar';

export const description =
  'Code, code, code, ...';

export const links: Array<{ platform: Platform; link: string }> = [
  { platform: Platform.GitHub, link: 'https://github.com/faishal882' },
  {
    platform: Platform.Linkedin,
    link: 'www.linkedin.com/in/faishal-manzar'
  },
  {
    platform: Platform.Twitter,
    link: 'https://twitter.com/faishalmanzar'
  },
  {
    platform: Platform.Email,
    link: 'fasishalmanzar@gmail.com'
  },
  {
    platform: Platform.Youtube,
    link: 'https://www.youtube.com'
  },
];

export const skills = getSkills('c', 'c++', 'js', 'django', 'reactjs', 'python', 'postgres');
