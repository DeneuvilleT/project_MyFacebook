export const creaDomElem = (elem, attribut, value) => {
   if (typeof attribut === 'undefined' && typeof value === 'undefined') {
      const elementDom = document.createElement(elem);
      return elementDom;
   };

   const elementDom = document.createElement(elem);
   elementDom.setAttribute(attribut, value);
   return elementDom;
};
