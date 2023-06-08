import headerTitle from "./header";
const fetchGeneCategories = async () => {
    try {
      const response = await fetch(
        `${headerTitle}/api/fetchGeneCategory.php`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching gene categories:", error);
      return [];
    }
  };
  
  export default fetchGeneCategories;
  