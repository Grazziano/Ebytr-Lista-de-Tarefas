const baseURL = 'http://localhost:3001/';

const setupAPIClient = async () => {
  const api = await fetch(`${baseURL}task`);
  const result = await api.json();
  return result;
};

export default setupAPIClient;
