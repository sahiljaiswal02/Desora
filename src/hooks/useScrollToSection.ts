import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Call this hook once inside your HomePage component.
 * It reads `location.state.scrollTo` (set by Navigation when coming from
 * another route) and scrolls to that section after the page has painted.
 */
export function useScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;

    if (!scrollTo) return;

    // Clear the state so a back-navigation doesn't re-trigger the scroll
    navigate("/", { replace: true, state: {} });

    const id = scrollTo.replace("#", "");
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        // Small extra delay so lazy/animated sections have finished rendering
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      } else if (attempts < 20) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };

    // Start trying after the first paint
    requestAnimationFrame(tryScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps — intentionally run once on mount
}
