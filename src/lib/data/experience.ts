import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
  {
    slug: 'open-sourcer',
    company: 'Self-employed',
    description: 'Contributed to Django and Wagtail and trying to contribute more ...',
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
    description: `<ul> <li>Strengthened the security and optimized the response time of the Enlightenment.AI system by
                    implementing JWT- token authorization and enhancing data filtering in the GraphQL API.</li>
                  <li>Streamlined the hiring web application at UXLIVINGLAB by integrating the Ant design UI in
                    ReactJS, constructing RESTful APIs, and seamlessly integrating them with the frontend.</li>
                  <li>Expanded the global reach of the NextJS application by integrating i18next and enabling
                    translation capabilities for five languages, enhancing its accessibility and user experience</li></ul>`,
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
