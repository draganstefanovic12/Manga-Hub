import SearchStatus from "./SearchStatus";
import SearchTags from "./SearchTags";

const SearchAdvanced = ({ setUrlTitle }) => {
  return (
    <>
      <SearchStatus />
      <SearchTags setUrlTitle={setUrlTitle} />
    </>
  );
};

export default SearchAdvanced;
