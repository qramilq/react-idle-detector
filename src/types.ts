export type HTMLElementEvent = keyof HTMLElementEventMap;

export type PropTypes = {
  children: React.ReactNode;
  onNoActivity: () => void;
  idleTime: number;
  events: Array<HTMLElementEvent>;
};

export type EventListenersFnType = (
  element: HTMLElement | null,
  events: Array<HTMLElementEvent>,
  fn: () => void
) => void;
