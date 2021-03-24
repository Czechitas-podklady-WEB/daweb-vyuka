'use strict';

const localTime = () => {
  const date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

const Offence = (props) => {
  return `
    <div class="offence">
      <span class="hours">
        ${String(props.hours).padStart(2, '0')}
      </span>
      :
      <span class="minutes">
        ${String(props.minutes).padStart(2, '0')}
      </span>
      :
      <span class="seconds">
        ${String(props.seconds).padStart(2, '0')}
      </span>
    </h1>
  `;
};

const offences = [
  { hours: 9, minutes: 12, seconds: 33 },
  { hours: 9, minutes: 12, seconds: 42 },
  { hours: 9, minutes: 15, seconds: 1 },
];
