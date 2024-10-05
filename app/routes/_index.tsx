import type { MetaFunction } from '@remix-run/node';
import { Send } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

const resources = [
  // {
  //   href: 'mailto:contact@morfeo.finance',
  //   text: 'Invest',
  //   icon: <Handshake />,
  // },
  {
    href: 'mailto:contact@morfeo.finance',
    text: 'Contact us',
    icon: <Send />,
  },
];

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center text-center">
          <h1 className="xs:text-2xl text-xl">Welcome to</h1>
          <h1 className="xs:text-8xl text-4xl font-bold">
            <span className="text-primary">M</span>orfeo.finance
          </h1>
          <TypeAnimation
            sequence={[
              'Your marketplace for digital assets',
              2000,
              'Your marketplace for finding investors on-chain',
              2000,
              'Your marketplace for expanding your business',
              2000,
              'Your marketplace for diversifying your portfolio',
              2000,
            ]}
            wrapper="h2"
            className="type xs:text-2xl text-xl pt-2"
            cursor={false}
            speed={50}
            deletionSpeed={88}
            repeat={Infinity}
          />
        </header>

        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed p-6 dark:border-gray-700">
          <p className="leading-6 text-gray-700 dark:text-gray-200">
            What&apos;s next?
          </p>
          <ul>
            {resources.map(({ href, text, icon }) => (
              <li key={href}>
                <a
                  className="group flex items-center gap-3 self-stretch p-3 leading-normal text-primary hover:underline "
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
