import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
  {
    degree: 'Bachelor of Technology in Mechanical Engineering',
    description: '',
    location: 'India',
    logo: Assets.University,
    name: '',
    organization: 'Aligarh Muslim University',
    period: { from: new Date(2022, 0, 1), to: new Date(2026, 0, 1) },
    shortDescription: '',
    slug: 'https://amu.ac.in/',
    subjects: []
  },
  {
    degree: '+2 Senior Secondary High School',
    description: '',
    location: 'India',
    logo: Assets.University,
    name: '',
    organization: 'Aligarh Muslim University',
    period: { from: new Date(2019, 0, 1), to: new Date(2021, 0, 1) },
    shortDescription: '',
    slug: 'https://amu.ac.in',
    subjects: []
  }
];

export const title = 'Education';
