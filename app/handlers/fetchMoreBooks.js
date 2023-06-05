const fetchMoreBooks = async () => {
    try {
      const response = await fetch(
        "https://7629-197-210-77-5.ngrok-free.app/api/fetchMoreBooks.php"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recommended books:", error);
      return [];
    }
  };
  
  export default fetchMoreBooks;
  