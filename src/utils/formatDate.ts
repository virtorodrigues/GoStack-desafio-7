const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('pt-br').format(value);

export default formatDate;
