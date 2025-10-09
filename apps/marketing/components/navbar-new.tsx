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
import { MobileMenu } from '~/components/mobile-menu';
import { MENU_LINKS } from '~/components/nav-links';

/* ------------------------------------------
   Hook: Detect which section is currently visible
------------------------------------------ */
function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust sensitivity (0.6 = 60% visible)
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

/* ------------------------------------------
   Navbar Component
------------------------------------------ */
export function Navbar(): React.JSX.Element {
  const pathname = usePathname();

  // List your homepage section IDs here
  const activeSection = useActiveSection([
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
          {/* Left side */}
          <div className="flex items-center gap-x-9">
            {/* Logo */}
            <Link
              href={routes.marketing.Index}
              className="flex items-center gap-2"
            >
              <Logo />
            </Link>

            {/* Navigation Menu */}
            <div className="flex items-center">
              <NavigationMenu
                style={
                  {
                    ['--radius']: '1rem'
                  } as React.CSSProperties
                }
              >
                <NavigationMenuList>
                  {MENU_LINKS.map((item, index) => {
                    if (!item.href) return null;

                    // Determine if link should be active
                    const isActive =
                      !item.external &&
                      // Path-based active (for normal pages)
                      (pathname.startsWith(
                        getPathname(item.href, baseUrl.Marketing)
                      ) ||
                        // Section-based active (for in-page anchors)
                        (item.href.includes('#') &&
                          activeSection &&
                          item.href.endsWith(`#${activeSection}`)));

                    return (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          asChild
                          active={!!isActive} // ✅ FIXED
                          className={cn(
                            navigationMenuTriggerStyle(),
                            'rounded-xl text-[15px] font-normal data-[active=true]:bg-videomule-light-green data-[active=true]:text-videomule-black'
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
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle className="rounded-xl border-none shadow-none" />

            <Link
              href={routes.dashboard.auth.SignIn}
              className={cn(
                buttonVariants({
                  variant: 'outline'
                })
              )}
            >
              Sign in
            </Link>

            <Link
              href={routes.dashboard.auth.SignUp}
              className={cn(
                buttonVariants({
                  variant: 'default'
                })
              )}
            >
              Start for free
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu className="lg:hidden" />
      </div>
    </section>
  );
}
