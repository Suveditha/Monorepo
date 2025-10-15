'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { baseUrl, getPathname, routes } from '@workspace/routes';
import { buttonVariants } from '@workspace/ui/components/buttonHome';
import { Logo } from '@workspace/ui/components/logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@workspace/ui/components/navigation-menu';
import { ThemeToggle } from '@workspace/ui/components/theme-toggle';
import { cn } from '@workspace/ui/lib/utils';

import { ExternalLink } from '~/components/fragments/external-link';
import { MENU_LINKS } from '~/components/marketing-links';
import { MobileMenu } from '~/components/mobile-menu';

/* ------------------------------------------------------------------
   Hook: Track visible sections in viewport
------------------------------------------------------------------ */
function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = React.useState<string | null>(null);

  React.useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        } else {
          setActive(null);
        }
      },
      {
        // earlier activation so the highlight changes before the section is
        // fully centered; tweak if you have a tall header
        rootMargin: '0px 0px -60% 0px',
        threshold: [0.2, 0.4, 0.6, 0.8]
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  // Sync highlight immediately when user jumps via hash links
  React.useEffect(() => {
    const updateFromHash = () => {
      const id = window.location.hash.replace('#', '');
      if (id && sectionIds.includes(id)) setActive(id);
    };
    updateFromHash(); // on first mount
    window.addEventListener('hashchange', updateFromHash);
    return () => window.removeEventListener('hashchange', updateFromHash);
  }, [sectionIds]);

  return active;
}

/* ------------------------------------------------------------------
   Navbar Component
------------------------------------------------------------------ */
export function Navbar(): React.JSX.Element {
  const pathname = usePathname();

  const activeSection = useActiveSection([
    'hero',
    'how-it-works',
    'features',
    'pricing',
    'testimonials',
    'contact'
  ]);

  return (
    <section className="sticky inset-x-0 top-0 z-40 bg-background py-4 shadow-[0px_3px_10px_0px_rgba(0,0,0,0.05)]">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          {/* Left: Logo & Menu */}
          <div className="flex items-center gap-x-9">
            <Link
              href={routes.marketing.Index}
              className="flex items-center gap-2"
            >
              <Logo />
            </Link>

            <NavigationMenu
              style={{ ['--radius']: '1rem' } as React.CSSProperties}
            >
              <NavigationMenuList>
                {MENU_LINKS.map((item, index) => {
                  if (item.items) {
                    // Dropdown items
                    return (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuTrigger className="rounded-xl text-[15px] font-normal data-[state=open]:bg-videomule-light-green">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="w-96 list-none p-2">
                            {item.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    target={
                                      subItem.external ? '_blank' : undefined
                                    }
                                    rel={
                                      subItem.external
                                        ? 'noopener noreferrer'
                                        : undefined
                                    }
                                    className="group flex select-none flex-row items-center gap-4 rounded-md p-3 transition-colors hover:bg-videomule-light-green hover:text-videomule-black"
                                  >
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background text-muted-foreground transition-colors group-hover:text-foreground">
                                      {subItem.icon}
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium">
                                        {subItem.title}
                                        {subItem.external && (
                                          <ExternalLink className="-mt-2 ml-1 size-2 inline text-muted-foreground" />
                                        )}
                                      </div>
                                      <p className="text-sm leading-snug text-muted-foreground">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  // Normal links (some may be section links)
                  const isSectionLink =
                    item.href.includes('#') &&
                    item.href.startsWith(routes.marketing.Index);

                  const isPageRoute = !isSectionLink; // <— key fix

                  // ✅ Only treat non-section page routes as active via pathname.
                  // ✅ Section links become active only when their section is in view.
                  const isActive =
                    !item.external &&
                    ((isPageRoute &&
                      pathname.startsWith(
                        getPathname(item.href, baseUrl.Marketing)
                      )) ||
                      (isSectionLink &&
                        activeSection &&
                        item.href.endsWith(`#${activeSection}`)));

                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        asChild
                        // Use a real data attribute so Tailwind's data-[] selectors work
                        data-active={isActive ? 'true' : undefined}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'rounded-xl text-[15px] font-normal',
                          // styles apply when data-active="true" is present
                          'data-[active=true]:bg-videomule-light-green data-[active=true]:text-videomule-black'
                        )}
                      >
                        <Link
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={
                            item.external ? 'noopener noreferrer' : undefined
                          }
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle className="rounded-xl border-none shadow-none" />
            <Link
              href={routes.dashboard.auth.SignIn}
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              Sign in
            </Link>
            <Link
              href={routes.dashboard.auth.SignUp}
              className={cn(buttonVariants({ variant: 'default' }))}
            >
              Start for free
            </Link>
          </div>
        </nav>

        {/* Mobile */}
        <MobileMenu className="lg:hidden" />
      </div>
    </section>
  );
}
