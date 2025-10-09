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
      { name: 'Feature 1', href: '#', external: false },
      { name: 'Feature 2', href: '#', external: false },
      { name: 'Feature 3', href: '#', external: false },
      { name: 'Feature 4', href: '#', external: false },
      { name: 'Feature 5', href: '#', external: false }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Contact', href: routes.marketing.Contact, external: false },
      { name: 'Roadmap', href: routes.marketing.Roadmap, external: true },
      { name: 'Docs', href: routes.marketing.Docs, external: false },
      { name: 'API Reference', href: baseUrl.PublicApi, external: true }
    ]
  },
  {
    title: 'About',
    links: [
      { name: 'Story', href: routes.marketing.Story, external: false },
      { name: 'Blog', href: routes.marketing.Blog, external: false },
      { name: 'Careers', href: routes.marketing.Careers, external: false }
    ]
  },
  {
    title: 'Legal',
    links: [
      {
        name: 'Terms of Use',
        href: routes.marketing.TermsOfUse,
        external: false
      },
      {
        name: 'Privacy Policy',
        href: routes.marketing.PrivacyPolicy,
        external: false
      },
      {
        name: 'Cookie Policy',
        href: routes.marketing.CookiePolicy,
        external: false
      }
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
