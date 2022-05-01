import { request_fb } from '../json/json.js';
import { display } from './utilities.js';

// Via Promise Async

const myFunc = async () => {
   const promise = new Promise((resolve, reject) => {
      resolve(
         JSON.parse(request_fb)
      )
   });
   const result = await promise;
   display(result.event_responses_v2.events_declined, first);
   display(result.event_responses_v2.events_joined, second);
   console.log(result);
};

document.addEventListener('DOMContentLoaded', () => {
   myFunc()
});