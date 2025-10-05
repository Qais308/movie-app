

// export const preloadImages = (urls) => {
//   return Promise.all(
//     urls.map((url) => {
//       return new Promise((resolve) => {
//         const img = new Image();
//         img.src = url;
//         img.onload = resolve;
//         img.onerror = resolve; 
//       });
//     })
//   );
// };

// src/utils/preloadImages.js
export const preloadImages = (urls) => {
  return Promise.all(
    urls.map((url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = resolve; // resolve anyway if error to avoid blocking
      });
    })
  );
};
