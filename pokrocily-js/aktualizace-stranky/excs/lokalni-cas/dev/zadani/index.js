const localTime = () => {
  const date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

const Time = (props) => {
  return `
    <h1>
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

const timeElm = document.querySelector('#time');
timeElm.innerHTML = Time(localTime());
