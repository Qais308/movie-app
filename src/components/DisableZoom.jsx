import { useEffect } from "react";

export default function useDisableZoom() {
  useEffect(() => {
    const preventZoom = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    const preventGesture = (e) => {
      e.preventDefault();
    };

    // Disable Ctrl+Scroll / Pinch on trackpads
    document.addEventListener("wheel", preventZoom, { passive: false });
    document.addEventListener("keydown", preventZoom, { passive: false });

    // Disable pinch gestures on mobile
    document.addEventListener("gesturestart", preventGesture);
    document.addEventListener("gesturechange", preventGesture);
    document.addEventListener("gestureend", preventGesture);

    return () => {
      document.removeEventListener("wheel", preventZoom);
      document.removeEventListener("keydown", preventZoom);
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
      document.removeEventListener("gestureend", preventGesture);
    };
  }, []);
}
