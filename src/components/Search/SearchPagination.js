import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import "./Search.css";

const SearchPagination = ({ mangas, setOffset }) => {
  let results;
  function handleResults() {
    if (mangas.data.total > 9999) {
      results = 9990;
    } else {
      results = mangas.data.total;
    }
  }
  mangas && handleResults();

  return (
    <>
      {mangas && (
        <Pagination
          hideNextButton={true}
          hidePrevButton={true}
          className="pagination-cont"
          onChange={(e) => setOffset(parseInt(e.target.textContent) * 12)}
          count={Math.floor(results / 12)}
          variant={"outlined"}
          shape={"rounded"}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                "&.MuiPaginationItem-root": {
                  color: "white",
                },
                "&.Mui-selected": {
                  backgroundColor: "#1B2430",
                },
              }}
            />
          )}
        />
      )}
    </>
  );
};

export default SearchPagination;
