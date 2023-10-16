const Time = (props) => {
  return `
    <div class="time">
      <span class="zone">${props.zone}</span>
      :
      <span class="datetime">${props.datetime}</span>
    </div>
  `;
};

const Timezones = (props) => {
  let result = '<label for="zones">Časová zóna:</label>';
  result += '<select id="zones">';

  for (let i = 0; i < props.zones.length; i++) {
    result += `<option value="${props.zones[i]}">${props.zones[i]}</option>`;
  }

  result += '</select>';
  return result;
};

fetch('https://worldtimeapi.org/api/timezone')
  .then((resp) => resp.json())
  .then((data) => {
    const zoneSelectElm = document.querySelector('#zone-select');
    zoneSelectElm.innerHTML = Timezones({ zones: data });
  });

const btnShow = document.querySelector('#btn-show');
btnShow.addEventListener('click', () => {
  const zonesSelect = document.querySelector('#zones');
  const mainElm = document.querySelector('main');

  fetch(`https://worldtimeapi.org/api/timezone/${zonesSelect.value}`)
    .then((resp) => resp.json())
    .then((data) => {
      mainElm.innerHTML = Time({
        zone: zonesSelect.value,
        datetime: data.datetime,
      });
    });
});
