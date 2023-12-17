import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

type Props = {};

const BudgetPage = (props: Props) => {
  return (
    <div className="block mx-auto">
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label="Amount"
      />
    </div>
  );
};

export default BudgetPage;
