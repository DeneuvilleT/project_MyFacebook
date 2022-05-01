export const creaDomElem = (elem, attribut, value) => {
   if (typeof attribut === 'undefined' && typeof value === 'undefined') {
      const elementDom = document.createElement(elem);
      return elementDom;
   };

   const elementDom = document.createElement(elem);
   elementDom.setAttribute(attribut, value);
   return elementDom;
};


export const displayRequest = (data, goTo) => {

   const ul = creaDomElem('ul');

   data.forEach(element => {
      const liName = creaDomElem('li');
      liName.textContent = `${element.name}`;

      data.forEach(() => {
         ul.append(liName);
      });

      goTo.append(ul);
   });
};
