const Filter = ({ onTitleFilterChange, onRatingFilterChange }) => {
    return (
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by title"
          onChange={onTitleFilterChange}
        />
        <input
          type="number"
          placeholder="Filter by rating"
          onChange={onRatingFilterChange}
        />
      </div>
    );
  };
  
  export default Filter;