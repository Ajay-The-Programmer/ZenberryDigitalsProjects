/** @format */

import React, { useEffect } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";

function DateCreator({ expiryDate, setExpiryDate }) {
  /* Here you can extend the date as you wish from the current date */
  let date = new Date();
  let increasedDate = date.setDate(date.getDate() + 7);
  /* ********************************************************** */

  useEffect(() => {
    if (expiryDate === undefined) {
      setExpiryDate(new Date(increasedDate));
    }
  }, []);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        id='date'
        fullWidth
        label='Expected Start'
        inputVariant='outlined'
        value={expiryDate}
        onChange={(newvalue) => setExpiryDate(newvalue)}
        disablePast
        format='dd/MM/yyyy'
        renderInput={(params) => <TextField {...params} />}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

export default DateCreator;
