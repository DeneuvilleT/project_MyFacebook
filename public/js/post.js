import { creaDomElem } from "./utilities.js";


const displayRequestFetch = (data, goTo) => {

   const ul = creaDomElem('ul', 'id', "page");
   let countPages = 0;

   const dataSplit = []
   for (let i = 0; i < data.length / 100; i++) {
      dataSplit.push(data.slice(i, i + 100));
   };

   dataSplit.forEach((array, index) => {

      const div = creaDomElem('div', 'id', `${index}`);
      array.forEach((elem) => {
         if (elem.data[0]) {

            const timeStamp = new Date(elem.timestamp * 1000);

            const span = creaDomElem('span', 'class', 'date');
            span.textContent = `
            ${timeStamp.getDate().toLocaleString('fr')} / ${timeStamp.getMonth().toLocaleString('fr')} / ${timeStamp.getFullYear().toLocaleString('fr')}`;
            
            
            const p = creaDomElem('p');
            const hr = creaDomElem('hr');
            p.textContent = elem.data[0].post;

            div.append(p, span, hr);
         };
      });

      publi.append(div);

      const a = creaDomElem('a', 'href', `#${index}`);
      const li = creaDomElem('li');
      li.textContent = countPages++;

      a.append(li);
      ul.append(a);
   });

   goTo.append(ul);
};


const recupPost = async () => {
   await fetch(`json/jsonviewer.json`)
      .then(res => {
         return res.json()
      })
      .then(results => {
         displayRequestFetch(results, post);
      });
};


document.addEventListener('DOMContentLoaded', () => {
   recupPost();
});
