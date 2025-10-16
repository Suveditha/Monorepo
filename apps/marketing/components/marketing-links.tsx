import * as React from 'react';
import {
  BookIcon,
  BookOpenIcon,
  Bot,
  BoxIcon,
  CircuitBoardIcon,
  CodeIcon,
  CuboidIcon,
  FileBarChartIcon,
  FileText,
  FolderSync,
  LayoutIcon,
  Mic,
  MicVocal,
  PlayIcon,
  SendHorizonalIcon,
  User,
  UserPen,
  Volume2
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
    title: 'Product',
    items: [
      {
        title: 'Script writing',
        description: 'Short description here',
        icon: <FileText className="size-5 shrink-0" />,
        href: `${routes.marketing.Index}#script-writing`,
        external: false
      },
      {
        title: 'AI Voice Over',
        description: 'AI Voice Over',
        icon: <MicVocal className="size-5 shrink-0" />,
        href: `${routes.marketing.Index}#ai-voice-over`,
        external: false
      },
      {
        title: 'Auto Sync',
        description: 'Short description here',
        icon: <FolderSync className="size-5 shrink-0" />,
        href: `${routes.marketing.Index}#auto-sync`,
        external: false
      },
      {
        title: 'Edit yourself',
        description: 'Short description here',
        icon: <UserPen className="size-5 shrink-0" />,
        href: `${routes.marketing.Index}#features`,
        external: false
      },
      {
        title: 'Use your own voice (Coming Soon)',
        description: 'Short description here',
        icon: <Volume2 className="size-5 shrink-0" />,
        href: '#',
        external: false
      },
      {
        title: 'AI Avatar (Coming Soon)',
        description: 'Short description here',
        icon: <Bot className="size-5 shrink-0" />,
        href: '#',
        external: false
      }
    ]
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Contact',
        description: 'Reach out for assistance',
        icon: <SendHorizonalIcon className="size-5 shrink-0" />,
        href: routes.marketing.Contact,
        external: false
      },
      // {
      //   title: 'Roadmap',
      //   description: 'See what is coming next',
      //   icon: <LayoutIcon className="size-5 shrink-0" />,
      //   href: routes.marketing.Roadmap,
      //   external: true
      // },
      {
        title: 'Docs',
        description: 'Learn how to use our platform',
        icon: <BookOpenIcon className="size-5 shrink-0" />,
        href: routes.marketing.Docs,
        external: false
      }
      // {
      //   title: 'API Reference',
      //   description: 'Build integrations with our API',
      //   icon: <CodeIcon className="size-5 shrink-0" />,
      //   href: baseUrl.PublicApi,
      //   external: true
      // }
    ]
  },
  {
    title: 'Pricing',
    href: `${routes.marketing.Index}#pricing`,
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
      {
        name: 'Script writing',
        href: `${routes.marketing.Index}#script-writing`,
        external: false
      },
      {
        name: 'AI Voice Over',
        href: `${routes.marketing.Index}#ai-voice-over`,
        external: false
      },
      {
        name: 'Auto Sync',
        href: `${routes.marketing.Index}#auto-sync`,
        external: false
      },
      {
        name: 'Edit yourself',
        href: `${routes.marketing.Index}#features`,
        external: false
      }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Contact', href: routes.marketing.Contact, external: false },
      //{ name: 'Roadmap', href: routes.marketing.Roadmap, external: true },
      { name: 'Docs', href: routes.marketing.Docs, external: false }
      //{ name: 'API Reference', href: baseUrl.PublicApi, external: true }
    ]
  },
  {
    title: 'About',
    links: [
      {
        name: 'Pricing',
        href: `${routes.marketing.Index}#pricing`,
        external: false
      },
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
