const formatValue = (value: number): string => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const formatDate = (date: Date): string => {
  return Intl.DateTimeFormat('pt-BR').format(new Date(date));
};

export default formatValue;
