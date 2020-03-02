import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { addEventListeners, removeEventListeners } from './utils';

import { PropsTypes } from './types';

const IdleDetector = (props: PropsTypes) => {
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
  idleTime: 60000,
};

IdleDetector.propTypes = {
  events: PropTypes.array.isRequired,
  onNoActivity: PropTypes.func.isRequired,
  timerId: PropTypes.number,
};

export default IdleDetector;
