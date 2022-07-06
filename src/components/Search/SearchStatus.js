import { MenuItem, InputLabel, FormControl, Select } from "@mui/material";
import { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";

const StyledMenuItem = styled(MenuItem)({
  "&.MuiMenuItem-root": {
    backgroundColor: "#191C25",
    "&:hover": {
      backgroundColor: "#191C25",
    },
  },
});

const SearchStatus = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const params = useParams();
  const paramRef = useRef(params.name);
  const navigate = useNavigate();

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <FormControl size="small" className="form">
      <InputLabel
        sx={{
          color: "white",
        }}
      >
        Status
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
        onClick={() => {
          setOpen(!open);
        }}
        open={open}
        MenuProps={{ MenuListProps: { disablePadding: true } }}
        label="Status"
      >
        <StyledMenuItem
          value={"None"}
          dense={true}
          onClick={() => {
            navigate(`/${paramRef.current}/${params.page}`);
          }}
        >
          None
        </StyledMenuItem>
        <StyledMenuItem
          value={"Ongoing"}
          dense={true}
          onClick={() => {
            navigate(
              `/${paramRef.current}&status%5B%5D=ongoing/${params.page}`
            );
          }}
        >
          Ongoing
        </StyledMenuItem>
        <StyledMenuItem
          value={"Completed"}
          dense={true}
          onClick={() =>
            navigate(
              `/${paramRef.current}&status%5B%5D=completed/${params.page}/`
            )
          }
        >
          Completed
        </StyledMenuItem>
      </Select>
    </FormControl>
  );
};

export default SearchStatus;
