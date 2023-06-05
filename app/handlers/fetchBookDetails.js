const fetchBookDetails = async (bookId) => {
  try {
    const formData = new FormData();
    formData.append("bookId", bookId);

    const response = await fetch(
      "http://192.168.11.102:80/api/bookDetails.php",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching book details:", error);
    return null;
  }
};

export default fetchBookDetails;
