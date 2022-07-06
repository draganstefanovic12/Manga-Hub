import { MenuItem, InputLabel, FormControl, Select } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SearchAdvanced = () => {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const paramRef = useRef(params.name);
  const navigate = useNavigate();

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
        onClick={() => {
          setOpen(!open);
        }}
        open={open}
        MenuProps={{ MenuListProps: { disablePadding: true } }}
        sx={{
          "&.MuiSelect-select": {
            backgroundColor: "#1B2430",
          },
        }}
        label="Status"
      >
        <MenuItem
          dense={true}
          sx={{
            "&.MuiMenuItem-root": {
              backgroundColor: "#191C25",
            },
          }}
          onClick={(e) => {
            navigate(
              `/${paramRef.current}&status%5B%5D=ongoing/${params.page}`
            );
          }}
        >
          Ongoing
        </MenuItem>
        <MenuItem
          dense={true}
          sx={{
            "&.MuiMenuItem-root": {
              backgroundColor: "#191C25",
            },
          }}
          onClick={() =>
            navigate(
              `/${paramRef.current}&status%5B%5D=completed/${params.page}/`
            )
          }
        >
          Completed
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SearchAdvanced;
