import headerTitle from "./header";
const fetchMoreBooks = async () => {
    try {
      const response = await fetch(
        `${headerTitle}/api/fetchMoreBooks.php`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recommended books:", error);
      return [];
    }
  };
  
  export default fetchMoreBooks;
  