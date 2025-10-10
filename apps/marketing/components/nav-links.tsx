import * as React from 'react';
import {
  BookIcon,
  BookOpenIcon,
  BoxIcon,
  CircuitBoardIcon,
  CodeIcon,
  CuboidIcon,
  FileBarChartIcon,
  LayoutIcon,
  PlayIcon,
  SendHorizonalIcon
} from 'lucide-react';

import { baseUrl, routes } from '@workspace/routes';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon
} from '@workspace/ui/components/brand-icons';

export const MENU_LINKS = [
  {
    title: 'How it Works',
    href: `${routes.marketing.Homepage}#how-it-works`,
    external: false
  },
  {
    title: 'Features',
    href: `${routes.marketing.Homepage}#features`,
    external: false
  },
  {
    title: 'Pricing',
    href: `${routes.marketing.Homepage}#pricing`,
    external: false
  },
  {
    title: 'Blog',
    href: routes.marketing.Blog,
    external: false
  },
  {
    title: 'Story',
    href: routes.marketing.Story,
    external: false
  }
];

export const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#', external: false },
      { name: 'Pricing', href: '#', external: false },
      { name: 'API', href: '#', external: false },
      { name: 'Integrations', href: '#', external: false }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: routes.marketing.Contact, external: false },
      { name: 'Help Center', href: routes.marketing.Roadmap, external: true },
      { name: 'Tutorials', href: routes.marketing.Docs, external: false },
      { name: 'Community', href: baseUrl.PublicApi, external: true }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: routes.marketing.Story, external: false },
      { name: 'Careers', href: routes.marketing.Blog, external: false },
      { name: 'Privacy', href: routes.marketing.Careers, external: false },
      { name: 'Terms', href: routes.marketing.Careers, external: false }
    ]
  }
];

export const SOCIAL_LINKS = [
  {
    name: 'X (formerly Twitter)',
    href: '~/',
    icon: <XIcon className="size-4 shrink-0" />
  },
  {
    name: 'LinkedIn',
    href: '~/',
    icon: <LinkedInIcon className="size-4 shrink-0" />
  },
  {
    name: 'Facebook',
    href: '~/',
    icon: <FacebookIcon className="size-4 shrink-0" />
  },
  {
    name: 'Instagram',
    href: '~/',
    icon: <InstagramIcon className="size-4 shrink-0" />
  },
  {
    name: 'TikTok',
    href: '~/',
    icon: <TikTokIcon className="size-4 shrink-0" />
  }
];

export const DOCS_LINKS = [
  {
    title: 'Getting Started',
    icon: <CuboidIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      {
        title: 'Introduction',
        href: '/docs',
        items: []
      },
      {
        title: 'Dependencies',
        href: '/docs/dependencies',
        items: []
      }
    ]
  },
  {
    title: 'Guides',
    icon: <BookIcon className="size-4 shrink-0 text-muted-foreground" />,
    items: [
      {
        title: 'Using MDX',
        href: '/docs/using-mdx',
        items: []
      }
    ]
  }
];
