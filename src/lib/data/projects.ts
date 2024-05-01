import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
  {
    slug: 'version-control-system',
    color: '#5e95e3',
    description:
      `<h4>A version control system similar to git </h4>
      <ul><li>A decentralized version control system </li>
          <li>Other</li>
      </ul>
    `,
    shortDescription:
      'A decentralised version control system!',
    links: [{ to: 'https://github.com/', label: 'GitHub' }],
    logo: Assets.Unknown,
    name: 'Jh-vcs',
    period: {
      from: new Date()
    },
    skills: getSkills('c', 'cpp'),
    type: 'DevOps Tool'
  },
  {
    slug: 'jahan-framework',
    color: '#ff3e00',
    description:
      `<ul><li>Flask-inspired web framework with integrated WSGI server, enabling seamless web app creation.</li>
           <li>Included SQLite integration for efficient data storage and retrieval in the backend.</li>
           <li>ORM functionality for smooth database interactions, enhancing development efficiency.</li>
        </ul>`,
    shortDescription:
      'Flask Inspired light weight webframework with inbuilt WSGI server.',
    links: [{ to: 'https://github.com/', label: 'GitHub' }],
    logo: Assets.Unknown,
    name: 'Jahan Framework',
    period: {
      from: new Date()
    },
    skills: getSkills('python', 'flask', 'html', 'css'),
    type: 'Webframework',
    screenshots: [
    ]
  },
  {
    slug: 'jahan-chat',
    color: '#5e95e3',
    description:
      `<ul><li>simple chat server using Python's built-in WebSocket library for real-time communication, complemented by a Flask GUI.</li>
           <li>Enabled terminal communication, making it versatile and user-friendly for messaging interactions.</li>
        </ul>`,
    shortDescription:
      'A simple Chat server.',
    links: [{ to: 'https://github.com/', label: 'GitHub' }],
    logo: Assets.Unknown,
    name: 'Chat Server',
    period: {
      from: new Date()
    },
    skills: getSkills('python', 'flask', 'html', 'css'),
    type: 'chat server',
    screenshots: [
    ]
  }
];

export const title = 'Projects';
