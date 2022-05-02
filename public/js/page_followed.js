import { creaDomElem } from "./utilities.js";

// Via Fetch Méthode Local

const displayRequestFetch = (data, goTo) => {
   
   const ul = creaDomElem('ul');
   
   data.forEach(element => {

      const timeStamp = new Date(element.timestamp*1000)

      const li = creaDomElem('li');
      li.textContent = `${element.title}`;

      const span = creaDomElem('span', 'class', 'date');
      span.textContent = `
      le : ${ timeStamp.getDate().toLocaleString('fr') } / ${timeStamp.getMonth().toLocaleString('fr')} / ${ timeStamp.getFullYear().toLocaleString('fr') }`;

      data.forEach(() => {
         ul.append(li, span);
      });
      
      goTo.append(ul);
   });
};



const recupData = async () => {
   await fetch(`json/follow_page.json`)
      .then(res => {
         return res.json()
      })
      .then(results => {
         displayRequestFetch(results.pages_followed_v2, followPage);
      });
};



document.addEventListener('DOMContentLoaded', () => {
   recupData();
});


