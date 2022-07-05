import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const SearchPagination = ({ mangas, title }) => {
  //can't go over 10,000
  let results;
  function handleResults() {
    if (mangas.data.total > 9999) {
      results = 9990;
    } else {
      results = mangas.data.total;
    }
  }
  mangas && handleResults();

  const navigate = useNavigate();

  return (
    <>
      {mangas && (
        <Pagination
          hideNextButton={true}
          hidePrevButton={true}
          page={parseInt(title.page)}
          className="pagination-cont"
          onChange={(e) => {
            navigate(`/${title.name}/${e.target.textContent}`);
          }}
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
