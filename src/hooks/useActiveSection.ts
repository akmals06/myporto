import { useEffect, useState, useRef, useCallback } from 'react';

export function useActiveSection(ids: readonly string[]) {
  const [activeSection, setActiveSectionState] = useState<string>(ids[0] || 'home');
  const manualLockRef = useRef<number | null>(null);
  const idsKey = ids.join(',');

  const setActiveSection = useCallback((id: string) => {
    setActiveSectionState(id);
    if (manualLockRef.current) {
      window.clearTimeout(manualLockRef.current);
    }
    // Lock auto-detection for 800ms during smooth anchor navigation
    manualLockRef.current = window.setTimeout(() => {
      manualLockRef.current = null;
    }, 800);
  }, []);

  useEffect(() => {
    const sectionList = idsKey.split(',');
    if (!sectionList.length) return;

    const handleScroll = () => {
      if (manualLockRef.current !== null) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // When reached near bottom of page, activate the last section (Contact)
      if (scrollY + windowHeight >= documentHeight - 70) {
        const lastId = sectionList[sectionList.length - 1];
        setActiveSectionState(lastId);
        return;
      }

      // Check each section with sticky header offset (80px)
      const triggerPoint = windowHeight * 0.35;
      let currentActive = sectionList[0];

      for (const id of sectionList) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            currentActive = id;
          }
        }
      }

      setActiveSectionState(currentActive);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (manualLockRef.current) {
        window.clearTimeout(manualLockRef.current);
      }
    };
  }, [idsKey]);

  return { activeSection, setActiveSection };
}
