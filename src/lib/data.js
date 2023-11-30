export const fetchServices = async () => {
  const response = await fetch("http://dm18.ru/api/services");
  const result = await response.json();
  return result;
};

export const fetchService = async (id) => {
  const response = await fetch(`http://dm18.ru/api/services/${id}`);
  const result = await response.json();
  return result;
};
