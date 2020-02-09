import { EventListenersFnType } from './types';

export const addEventListeners: EventListenersFnType = (element, events, fn) => {
  if (!element) return;
  events.forEach(event => {
    element.addEventListener(event, fn);
  });
};

export const removeEventListeners: EventListenersFnType = (element, events, fn) => {
  if (!element) return;
  events.forEach(event => {
    element.removeEventListener(event, fn);
  });
};
