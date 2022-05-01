import creaDomElem from './utilities.js';


async function myFunc() {
   const promise = new Promise((resolve, reject) => {
      resolve(
         JSON.parse(test)
      )
   });
   const result = await promise;
   display(result.event_responses_v2.events_declined, first);
   display(result.event_responses_v2.events_joined, second);
   console.log(result);
}



const display = (elem, goTo) => {
   
   const ul = creaDomElem('ul');

   for (let i = 0; i < elem.length; i++) {
      const li = creaDomElem('li');
      li.textContent = elem[i].name;
      for (let i = 0; i < elem.length; i++) {
         ul.append(li);
      };
      goTo.append(ul)
   };
}


document.addEventListener('DOMContentLoaded', () => {
   myFunc()
})