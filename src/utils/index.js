function shorterTime(str) {
  const letterT = str.indexOf('T');
  return str.substring(0, letterT);
}

export { shorterTime };
