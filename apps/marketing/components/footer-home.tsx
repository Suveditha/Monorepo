'use client';

import * as React from 'react';
import Link from 'next/link';

import { APP_NAME } from '@workspace/common/app';
//import { Button } from '@workspace/ui/components/button';
//import { Input } from '@workspace/ui/components/input';
import { Logo } from '@workspace/ui/components/logo';
import { Separator } from '@workspace/ui/components/separator';
//import { toast } from '@workspace/ui/components/sonner';
import { ThemeSwitcher } from '@workspace/ui/components/theme-switcher';

import { ExternalLink } from '~/components/fragments/external-link';
import { FOOTER_LINKS, SOCIAL_LINKS } from '~/components/nav-links';

export function Footer(): React.JSX.Element {
  return (
    <footer className="px-2 pb-10 pt-20 bg-black">
      <h2 className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-15">
          <div className="max-w-[300px] hidden xl:block">
            <Logo className="text-white" />
            <p className="mt-3 text-muted-foreground">
              AI-powered voiceover tool for screen recordings. Create
              professional videos in minutes.
            </p>
          </div>
          <div className="flex flex-1 flex-wrap justify-between gap-15">
            {FOOTER_LINKS.map((group) => (
              <div
                className="w-[240px]"
                key={group.title}
              >
                <h3 className="font-semibold text-white">{group.title}</h3>
                <ul
                  role="list"
                  className="mt-6 space-y-2"
                >
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        title={link.name}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="relative text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                        {link.external && (
                          <ExternalLink className="absolute right-[-10px] top-[2px] opacity-80" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
