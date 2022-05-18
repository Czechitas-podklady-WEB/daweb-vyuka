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
      <div class="offence__time">
        <span class="hours">
          ${String(props.time.hours).padStart(2, '0')}
        </span>
        :
        <span class="minutes">
          ${String(props.time.minutes).padStart(2, '0')}
        </span>
        :
        <span class="seconds">
          ${String(props.time.seconds).padStart(2, '0')}
        </span>
      </div>
      <div class="offence__plate">SPZ: ${props.plate}</div>
    </div>
  `;
};

const OffencesList = (props) => {
  let result = '<div class="offences-list">';

  for (let i = 0; i < props.offences.length; i += 1) {
    result += Offence(props.offences[i]);
  }

  result += '</div>';
  return result;
};

const data = [];

const offencesElm = document.querySelector('#offences');
offencesElm.innerHTML = OffencesList({ offences: data });

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  const plateInput = document.querySelector('#plate-input');
  const offence = {
    time: localTime(),
    plate: plateInput.value,
  };

  data.push(offence);

  plateInput.value = '';
  plateInput.focus();

  offencesElm.innerHTML = OffencesList({ offences: data });
});
