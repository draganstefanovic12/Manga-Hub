import { styled } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const StyledMenuItem = styled(MenuItem)({
  "&.MuiMenuItem-root": {
    backgroundColor: "#191C25",
    "&:hover": {
      backgroundColor: "#191C25",
    },
  },
});

const SearchTags = () => {
  const [value, setValue] = useState([]);
  const params = useParams();
  const paramRef = useRef(params.name);
  const navigate = useNavigate();

  const data = useFetch(`https://api.mangadex.org/manga/tag`);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <FormControl size="small" className="form-genre">
      <InputLabel
        sx={{
          color: "white",
        }}
      >
        Genre
      </InputLabel>
      <Select
        sx={{
          "&.MuiOutlinedInput-root": {
            color: "white",
          },
        }}
        value={value}
        onChange={handleChange}
        defaultValue=""
        MenuProps={{ MenuListProps: { disablePadding: true } }}
        label="Genre"
      >
        {data &&
          data.data.data
            .filter((data) => data.attributes.group === "genre")
            .map((data) => (
              <StyledMenuItem
                onClick={() => {
                  navigate(
                    `/${paramRef.current}&includedTags%5B%5D=${data.id}/${params.page}`
                  );
                }}
                className="test"
                value={data.attributes.name.en}
                key={data.id}
              >
                {data.attributes.name.en}
              </StyledMenuItem>
            ))}
      </Select>
    </FormControl>
  );
};

export default SearchTags;
