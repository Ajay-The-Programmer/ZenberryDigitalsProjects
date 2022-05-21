/** @format */

import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertPopContact({ confirmDelete, setConfirmDelete, productId, products, setProducts }) {
  const handleClose = () => {
    setConfirmDelete(false);
  };
  const handleYes = () => {
    let filterData = products.filter((el) => {
      if (el.productId != productId) {
        return el;
      }
    });
    console.log("filterdata", filterData);
    localStorage.setItem("products", JSON.stringify(filterData));
    setProducts(filterData);

    //var filterContacts = rows.filter((item) => item.contactId !== delID);
    //setRows(filterContacts);
    setConfirmDelete(false);
  };
  const handleNo = () => {
    setConfirmDelete(false);
  };
  return (
    <div>
      <Dialog open={confirmDelete} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>Are you sure to delete</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleYes} color='primary' autoFocus>
            Yes
          </Button>
          <Button onClick={handleNo} color='primary' autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
