import { useEffect } from 'react';
import Lenis from 'lenis';

const HEADER_OFFSET = 0; // html already has scroll-padding-top for the fixed header

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Check for user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lenis = null;
    let rafId;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
      });

      window.__lenis = lenis;

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    // In-page anchors (#contact, #projects, ...): scroll to the target on the
    // first click. Without this the browser's native jump fights Lenis and
    // often only updates the URL hash.
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target.closest && e.target.closest('a[href^="#"]');
      if (!link) return;

      const id = decodeURIComponent(link.getAttribute('href').slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: HEADER_OFFSET });
      } else {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
      window.history.replaceState(null, '', `#${id}`);
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return <>{children}</>;
}
