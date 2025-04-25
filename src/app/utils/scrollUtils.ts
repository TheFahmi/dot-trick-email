/**
 * Smoothly scrolls to the specified element ID with an offset for the fixed navbar
 * @param elementId - The ID of the element to scroll to (without the # symbol)
 * @param offset - Optional offset from the top (default: 80px for navbar height)
 */
export const scrollToElement = (elementId: string, offset: number = 80): void => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Handles click events for anchor links with hash fragments
 * @param e - The click event
 * @param offset - Optional offset from the top (default: 80px for navbar height)
 */
export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, offset: number = 80): void => {
  e.preventDefault();
  
  const href = e.currentTarget.getAttribute('href');
  if (href && href.startsWith('#')) {
    const elementId = href.substring(1);
    scrollToElement(elementId, offset);
  }
};
