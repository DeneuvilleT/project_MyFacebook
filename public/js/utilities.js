export const creaDomElem = (elem, attribut, value) => {
   if (typeof attribut === 'undefined' && typeof value === 'undefined') {
      const elementDom = document.createElement(elem);
      return elementDom;
   };

   const elementDom = document.createElement(elem);
   elementDom.setAttribute(attribut, value);
   return elementDom;
};


export const display = (elem, goTo) => {

   const ul = creaDomElem('ul');

   for (let i = 0; i < elem.length; i++) {
      const li = creaDomElem('li');
      li.textContent = elem[i].name;
      for (let i = 0; i < elem.length; i++) {
         ul.append(li);
      };
      goTo.append(ul);
   };
};
