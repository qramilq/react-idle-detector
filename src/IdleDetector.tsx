import React, { useEffect, useRef } from 'react';
import { addEventListeners, removeEventListeners } from './utils';

import { PropTypes } from './types';

const IdleDetector = (props: PropTypes) => {
  const { onNoActivity, idleTime, events, ...restProps } = props;
  const elemRef = useRef(null);

  useEffect(() => {
    const element = elemRef.current;
    let timerId: number;

    const resetTimer = () => {
      clearTimeout(timerId);
      timerId = setTimeout(onNoActivity, idleTime);
    };

    const idleTimer = () => {
      resetTimer();
      addEventListeners(element, events, resetTimer);
    };
    idleTimer();

    return () => {
      removeEventListeners(element, events, resetTimer);
    };
  }, [onNoActivity, idleTime, events]);

  return <div {...restProps} ref={elemRef} />;
};

IdleDetector.defaultProps = {
  events: ['mousemove'],
  onNoActivity: () => undefined,
  timerId: 60000,
};

export default IdleDetector;
