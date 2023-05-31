const fetchRecommendedBooks = async () => {
    try {
      const response = await fetch(
        "http://192.168.151.102:80/api/fetchRecBooks.php"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recommended books:", error);
      return [];
    }
  };
  
  export default fetchRecommendedBooks;
  