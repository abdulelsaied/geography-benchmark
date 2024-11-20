export const preloadImages = () => {
    const images = import.meta.glob('../flag-images/*.webp');
  
    Object.values(images).forEach(async (importImage) => {
      const imageSrc = await importImage() as { default: string }; 
      console.log(`Preloading image: ${imageSrc.default}`)
      const img = new Image();
      img.src = imageSrc.default; 
    });
  };