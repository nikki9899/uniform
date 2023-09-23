
const baseUrl = "https://uniformonweb.onrender.com/api";

export const getAPI = async (path) => {
    let url = `${baseUrl}/${path}?populate=deep`;
    try {
      const loadData = await fetch(url, { cache: 'no-store' });
  
      if (loadData.ok) {
        let result = await loadData.json();
        return result;
      } else {
         return loadData;
      }
    } catch (error) {
      throw error;
    }
  };
  