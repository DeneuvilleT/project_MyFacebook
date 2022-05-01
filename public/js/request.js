import { request_fb } from '../json/json.js';
import { displayRequest } from './utilities.js';

// Via Promise Async

const myFunc = async () => {
   const promise = new Promise((resolve, reject) => {
      resolve(
         JSON.parse(request_fb)
      )
   });
   const result = await promise;
   displayRequest(result.event_responses_v2.events_declined, first);
   displayRequest(result.event_responses_v2.events_joined, second);
};

document.addEventListener('DOMContentLoaded', () => {
   myFunc()
});