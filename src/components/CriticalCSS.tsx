// Critical CSS component to inline essential styles and prevent render blocking
export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical above-the-fold styles - minimal to prevent render blocking */
          /* Only essential layout and positioning - let Tailwind handle styling */
          
          /* Ensure hero section is visible immediately */
          #home {
            min-height: 100vh;
            display: flex;
            align-items: center;
          }
          
          /* Ensure header is positioned correctly */
          header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
          }
          
          /* Hide below-fold content initially */
          .below-fold {
            visibility: hidden;
          }
          
          /* Prevent layout shift */
          body {
            min-height: 100vh;
          }
        `,
      }}
    />
  )
}