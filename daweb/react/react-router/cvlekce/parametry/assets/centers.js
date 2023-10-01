const centers = [
  {
    id: 'hernicka-narodni',
    name: 'Hernička v Národní',
    address: 'Národní 28, 110 00 Praha 1',
    capacity: 20,
    open: {
      mon: '8:00 - 18:00',
      tue: '8:00 - 18:00',
      wed: '8:00 - 18:00',
      thu: '8:00 - 18:00',
      fri: '8:00 - 18:00',
      sat: '9:00 - 12:00',
      sun: null,
    },
    info: 'Nachází se v těsné blízkosti historického centra Prahy a má skvělou polohu pro rodiny které chtějí prozkoumat město a zároveň se postarat o své malé děti. Koutek má příjemné prostředí, kde se děti mohou hrát a učit se novým věcem. K dispozici jsou také kreativní workshopy, kde děti mohou tvořit a vyrábět své vlastní hračky.',
  },
  {
    id: 'vodickuv-koutek',
    name: 'Vodičkův koutek',
    address: 'Vodičkova 39, 110 00 Praha 1',
    capacity: 15,
    open: {
      mon: '9:00 - 17:00',
      tue: '9:00 - 17:00',
      wed: '9:00 - 17:00',
      thu: '9:00 - 17:00',
      fri: '9:00 - 17:00',
      sat: null,
      sun: null,
    },
    info: 'Tento koutek je ideálním místem pro rodiče, kteří se chtějí zastavit na nákup v centru Prahy, ale mají s sebou děti. Koutek nabízí profesionální péči o děti, takže se mohou rodiče soustředit na své nákupy a mít klid v duši, že jsou jejich děti v bezpečí a dobře se baví.',
  },
  {
    id: 'vaclavak',
    name: 'Koutek Václavák',
    address: 'Václavské nám. 816/49, 110 00 Praha 1',
    capacity: 30,
    open: {
      mon: '7:30 - 18:00',
      tue: '7:30 - 18:00',
      wed: '7:30 - 18:00',
      thu: '7:30 - 18:00',
      fri: '7:30 - 18:00',
      sat: null,
      sun: null,
    },
    info: 'Tento koutek je jedním z největších v Praze a nabízí širokou škálu aktivit pro děti, jako jsou kreativní workshopy, hudební lekce a taneční kurzy. Koutek má také velkou zahradu, kde se děti mohou hrát na čerstvém vzduchu a užít si slunečné dny. Pro rodiče je k dispozici relaxační zóna, kde se mohou odpočinout a relaxovat.',
  },
];

export const getAllCenters = () => {
  return centers;
};

export const getCenterById = (id) => {
  return centers.find((center) => center.id === id);
};
