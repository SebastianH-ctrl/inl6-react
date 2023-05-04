function SortList({sortType, movies, updateMovies}) {
    
    let text;
    if (sortType === "abc") {
      text = "Sortera alfabetiskt";
    } else if (sortType === "rating") {
      text = "Sortera efter betyg";
    }
  
    function sort(type) {
        if (sortType === "abc") {
            const sortedMovies = [...movies].sort((a, b) => {
                if (a.title < b.title) {
                return -1;
                } else if (a.title > b.title) {
                return 1;
                } else {
                return 0;
                }
            });
            updateMovies(sortedMovies);
            } else if (sortType === "rating") {
            const sortedMovies = [...movies].sort((a, b) => {
                return b.rating - a.rating;
            });
            updateMovies(sortedMovies);
        }
    }
    
    return (
      <>
        <div>
          <button className="sort-btn" onClick={() => sort(sortType)}>
            {text}
          </button>
        </div>
      </>
    );
}

export default SortList;

  
  

