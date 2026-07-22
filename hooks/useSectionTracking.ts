import { useEffect } from 'react';
import { track } from '../utils/analytics';

/**
 * Fires a `section_viewed` analytics event the first time each section scrolls
 * into view, once per page load. On a one-page site this is the signal for
 * "how far down do visitors actually get".
 */
export function useSectionTracking(sectionIds: string[]): void {
  useEffect(() => {
    const seen = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && !seen.has(id)) {
            seen.add(id);
            track('section_viewed', { section: id });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);
}
