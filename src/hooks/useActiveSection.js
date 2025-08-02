import { useEffect, useState } from 'react';

/**
 * useActiveSection
 * Returns the id of the section that is currently in the viewport.
 *
 * @param {string[]} sectionIds - The list of section element ids in the order they appear on the page.
 * @param {number} offset - Optional offset in pixels to trigger the section a bit earlier/later. Default is 100.
 */
export default function useActiveSection(sectionIds = [], offset = 100) {
  const [active, setActive] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length) return;

    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      let current = active;

      sectionIds.forEach((id) => {
        const sectionEl = document.getElementById(id);
        if (!sectionEl) return;

        const top = sectionEl.offsetTop - offset;
        const bottom = top + sectionEl.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          current = id;
        }
      });

      if (current !== active) setActive(current);
    };

    // Initial run in case user reloads mid-page
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset, active]);

  return active;
} 