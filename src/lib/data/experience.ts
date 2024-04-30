import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
  {
    slug: 'open-sourcer',
    company: 'Self-employed',
    description: 'Contributing to awesome tools build for developers.',
    contract: ContractType.SelfEmployed,
    type: 'Software Development',
    location: 'Home',
    period: { from: new Date(2023, 0, 5) },
    skills: getSkills('python', 'js', 'ts', 'reactjs', 'django'),
    name: 'Open Source Developer',
    color: 'red',
    links: [],
    logo: Assets.Unknown,
    shortDescription: 'Contributing to awesome organisations.'
  },
  {
    slug: 'software-freelance',
    company: 'Self-employed',
    description: 'Working with great clients.',
    contract: ContractType.Freelance,
    type: 'Software Development',
    location: 'Home',
    period: { from: new Date(2020, 0, 1), to: new Date(2022, 0, 1) },
    skills: getSkills('python', 'django', 'ts', 'sass', 'css', 'html', 'js', 'reactjs'),
    name: 'Freelancer',
    color: 'blue',
    links: [],
    logo: Assets.Fiverr,
    shortDescription: 'Working with awesome clients.'
  },
];

export const title = 'Experience';
