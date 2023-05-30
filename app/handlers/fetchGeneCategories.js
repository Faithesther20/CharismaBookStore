const fetchGeneCategories = async () => {
    try {
      const response = await fetch(
        "http://192.168.245.28:80/api/fetchGeneCategory.php"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching gene categories:", error);
      return [];
    }
  };
  
  export default fetchGeneCategories;
  