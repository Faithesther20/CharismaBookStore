import headerTitle from "./header";

const fetchRecommendedBooks = async () => {
    try {
      const response = await fetch(
        `${headerTitle}/api/fetchRecBooks.php`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recommended books:", error);
      return [];
    }
  };
  
  export default fetchRecommendedBooks;
  