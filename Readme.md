# react-idle-detector

[![npm version](https://badge.fury.io/js/react-idle-detector.svg)](https://www.npmjs.com/package/react-idle-detector)

Small sized react component for detect idle (no activity) time on your components.
<br>
This component calls callback function each time, when user has no activity on your component/components collection.
<br>
It can be useful to show some notifications, or call some other methods to draw user's attention

## Demo

[![Edit jovial-meitner-9xbou](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/jovial-meitner-9xbou?fontsize=14&hidenavigation=1&theme=dark)

## Installing

using npm

```
npm i react-idle-detector
```

using yarn

```
yarn add react-idle-detector
```

## Usage

```js
import IdleDetector from 'react-idle-detector';

const noActivityHandler = () => {
  console.log('no activity');
};

<IdleDetector
  events={['mousemove']} // Array of listen events
  onNoActivity={noActivityHandler} // callback on no activity
  idleTime={60000} // no activity time, ms
>
  {/* watching component/components */}
  <Layout />
</IdleDetector>;
```

## API

| Name         | Type     | Default        | Description                    |
| ------------ | -------- | -------------- | ------------------------------ |
| events       | array    | ['mousemove']  | Array of user's events         |
| onNoActivity | function | ()=> undefined | Callback, calls on no activity |
| idleTime     | number   | 60000          | Idle time in milliseconds      |
