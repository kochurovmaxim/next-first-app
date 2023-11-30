export const fetchServices = async () => {
  const response = await fetch("http://localhost:3001/api/services");
  const result = await response.json();
  return result;
};

export const fetchService = async (id) => {
  const response = await fetch(`http://localhost:3001/api/services/${id}`);
  const result = await response.json();
  return result;
};
