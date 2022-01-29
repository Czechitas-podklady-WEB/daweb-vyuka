const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.textContent = body + ' ' + goodbye(name);
};
