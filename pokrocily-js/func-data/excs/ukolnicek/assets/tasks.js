const tasks = [
  {
    name: 'Vyprat košile',
    due: {
      time: 3,
      unit: 'day',
    },
    notify: {
      time: 1,
      unit: 'day',
    },
    done: false,
  },
  {
    name: 'Nakoupit na nedělní oběd',
    due: {
      time: 2,
      unit: 'day',
    },
    notify: {
      time: 6,
      unit: 'hour',
    },
    done: false,
  },
  {
    name: 'Zopakovat si funkce vyšších řádů',
    due: {
      time: 8,
      unit: 'hour',
    },
    notify: {
      time: 30,
      unit: 'minute',
    },
    done: true,
  },
  {
    name: 'Dát výpověď v práci',
    due: {
      time: 14,
      unit: 'day',
    },
    notify: {
      time: 4,
      unit: 'day',
    },
    done: false,
  },
  {
    name: 'Jít si zaběhat',
    due: {
      time: 2,
      unit: 'day',
    },
    notify: {
      time: 1,
      unit: 'hour',
    },
    done: true,
  },
];
