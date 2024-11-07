export const parseDate = (dateString: string): Date => {
  const cleanDateString = dateString.replace('T', ' ').split('+')[0];
  return new Date(cleanDateString);
};

export const formatDate = (dateString: string): string => {
  const date = parseDate(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
};
