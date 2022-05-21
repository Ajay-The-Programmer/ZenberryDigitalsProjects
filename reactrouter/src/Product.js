/** @format */

import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ProgressBar from "../UI/ProgressBar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import { CKEditor } from 'ckeditor4-react';
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Table from "@material-ui/core/Table";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import Checkbox from "@material-ui/core/Checkbox";
// import { getContacts, createContacts, deleteContactByID, updateContactByID } from "./contacts.helpers";
import { Snackbar } from "@material-ui/core";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";

import EmptyEstimatesDialog from "../UI/EmptyEstimatesDialog";
import EditIcon from "@material-ui/icons/Edit";
import SimpleBackdrop from "../UI/SimpleBackdrop";
import AlertPopContact from "./AlertPopContact";
import Alert from "@material-ui/lab/Alert";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  Drawerroot: {
    width: 600,
    padding: 16,
  },
  textField: {
    width: "100%",
  },
  // button: { padding: "7px", paddingLeft: "9px" },
}));

export default function Product() {
  const classes = useStyles();

  const [states, setStates] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    quote_title: "",
  });

  const [image, setImage] = useState();
  const [productName, setProductName] = useState();
  const [details, setDeatails] = useState();
  const [businessType, setBusinessType] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [createdDate, setCreatedDate] = useState();
  // const [address, setAddress] = useState();
  // const [cityOrTown, setCityOrTown] = useState();
  // const [state, setState] = useState();
  // const [postcode, setPostcode] = useState();
  // const [workPhone, setWorkPhone] = useState();
  // const [homePhone, setHomePhone] = useState();
  // const [mobile, setMobile] = useState();
  // const [emailAddress, setEmailAddress] = useState();
  // const [load, setLoad] = useState(true);
  // const [id, setId] = useState();
  // const [delID, setDelId] = useState("");
  // const [confirmDelete, setConfirmDelete] = useState(false);
  // const [openSnackbar, setOpenSnackbar] = React.useState(false);
  // const [delLoading, setDelLoading] = useState(false);
  // const [isBtnDisbl, setIsBtnDisbl] = useState(true);
  // const [wantToCallGet, setWantToCallGet] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  const handleUpdate = (row) => {
    /* this function used for open toggle */
    commonToggle(true);
    setIsBtnDisbl(false);
    /* reset is method of useForm it is used for returning data to form */
    reset(row);
  };
  function commonToggle(open) {
    setState({ ...state, ["right"]: open });
  }
  // function makeObject() {
  //   let obj;
  //   return (obj = {
  //     contactName: contactName,
  //     businessName: businessName,
  //     businessType: businessType,
  //     businessNumber: businessNumber,
  //     registeredForGst: registeredForGst,
  //     address: address,
  //     cityOrTown: cityOrTown,
  //     state: state,
  //     postcode: postcode,
  //     workPhone: workPhone,
  //     homePhone: homePhone,
  //     mobile: mobile,
  //     emailAddress: emailAddress,
  //   });
  // }
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("products"));
    if (items) {
      setProducts(items);
    }
  }, []);
  //////////////  Delete Contacts ////////////////////

  // const handleDeleteIcon = (e, contactId) => {
  //   e.preventDefault();
  //   setConfirmDelete(true);
  //   setDelId(contactId);
  // };

  ///////////  Create & Update Contacts ////////////////////

  // const handleSubmitAndUpdate = (e, name) => {
  //   e.preventDefault();
  //   if (name === "submit") {
  //     setLoad(true);
  //     createContacts(makeObject(), setLoad, setWantToCallGet); //API call For Submit
  //     setWantToCallGet(true);
  //     setLoad(false);
  //     setStates({ ...state, ["right"]: false });
  //   } else if (name === "update") {
  //     setLoad(true);
  //     updateContactByID(id, makeObject(), setLoad, setWantToCallGet); //API call For Update
  //     setWantToCallGet(true);
  //     setLoad(false);
  //     setStates({ ...states, ["right"]: false });
  //   }
  // };

  const toggleDrawer = (anchor, open, name) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setStates({ ...states, [anchor]: open });
  };

  const handleEmptySubmitForm = (e) => {
    localStorage.setItem("products", JSON.stringify(products));
    // let row = {};
    // setIsBtnDisbl(true); //By defualt for showing save button
    // handleUpdate(e, row, true); //I Want to access empty fields
  };

  return (
    <div>
      <React.Fragment key={"right"}>
        {/* {delLoading && <SimpleBackdrop />} */}

        {/* <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
          <div className={classes.Drawerroot}>
            <form onSubmit={handleSubmit(submitContactDetails)}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  {isBtnDisbl ? (
                    <Typography align='center' variant='h5'>
                      New Contact
                    </Typography>
                  ) : (
                    <Typography variant='h5' align='center'>
                      Update Contact
                    </Typography>
                  )}
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name='contactName'
                    control={control}
                    rules={{ required: true }}
                    className='input'
                    render={({ field }) => <TextField {...field} variant='outlined' label='Contact Name' className={classes.textField} />}
                  />
                  {errors.contactName?.type === "required" && "First name is required"}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name='businessName'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => <TextField {...field} label='Business Name' variant='outlined' className={classes.textField} />}
                  />
                  {errors.businessName && "Business name is required"}
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id='labelContactGroup'>Business Type</InputLabel>
                  <Controller
                    name='businessType'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => (
                      <Select {...field} className={classes.textField}>
                        <MenuItem value='Contractors'>Contractors</MenuItem>
                        <MenuItem value='Employee'>Employee</MenuItem>
                        <MenuItem value='Supplier'>Suppliers</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.businessType && "Business Type required"}
                </Grid>

                {/* <Grid item xs={12}>
                  <InputLabel id='labelContactType'>Contact Type</InputLabel>
                  <Select
                    labelId='labelContactType'
                    id='ContactTypeField'
                    required
                    onChange={(e) => setContacType(e.target.value)}
                    value={contacType}
                    className={classes.textField}>
                    <MenuItem value='Commercial Builder'>Commercial Builder</MenuItem>
                    <MenuItem value='Plumber'>Plumber</MenuItem>
                    <MenuItem value='Supplier'>Supplier</MenuItem>
                    <MenuItem value='Tiler'>Tiler</MenuItem>
                  </Select>
                </Grid> */}

        {/* <Grid item xs={6}>
                  <Controller
                    name='businessNumber'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => <TextField {...field} label='Business Number' variant='outlined' className={classes.textField} />}
                  />
                  {errors.businessNumber && "Business Number required"}
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name='registeredForGst'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => (
                      <FormControlLabel control={<Checkbox onChange={field.onChange} checked={field.value} />} label='Registered for GST' />
                    )}
                  />
                  {errors.registeredForGst && " GST required"}
                </Grid> */}
        {/* <Grid item xs={12}>
                  <InputLabel id='labelDefaultAccount'>Default Account</InputLabel>
                  <Select
                    labelId='labelDefaultAccount'
                    id='DefaultAccount'
                    onChange={(e) => setDefaultAccount(e.target.value)}
                    value={defaultAccount}
                    className={classes.textField}>
                    <MenuItem value=''>Please select</MenuItem>
                  </Select>
                </Grid> */}

        {/* <Grid item xs={12}>
                  <Controller
                    name='address'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => <TextField {...field} label='Address' variant='outlined' className={classes.textField} />}
                  />
                  {errors.address && "Address required"}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name='cityOrTown'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => <TextField {...field} label='City / Town' variant='outlined' className={classes.textField} />}
                  />

                  {errors.cityOrTown && "City/Town required"}
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name='state'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => <TextField {...field} label='State' variant='outlined' className={classes.textField} />}
                  />
                  {errors.state && "State required"}
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name='postcode'
                    control={control}
                    rules={{
                      required: false,
                    }}
                    className='input'
                    render={({ field }) => <TextField {...field} label='Postcode' type='number' variant='outlined' className={classes.textField} />}
                  />
                  {errors.postcode && "Postcode required"}
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name='workPhone'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => <TextField {...field} label='Work Phone' variant='outlined' className={classes.textField} />}
                  />
                  {errors.workPhone && "Work Phone required"}
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name='homePhone'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => <TextField {...field} label='Home Phone' variant='outlined' type='number' className={classes.textField} />}
                  />
                  {errors.homePhone && "Home Phone required"}
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name='mobile'
                    control={control}
                    rules={{
                      required: false,
                      minLength: 10,
                      maxLength: 10,
                    }}
                    className='input'
                    render={({ field }) => <TextField {...field} label='Mobile' variant='outlined' type='number' className={classes.textField} />}
                  />
                  {errors.mobile?.type === "required" && "Mobile Number required"}
                  {errors.mobile?.type === "minLength" && "Please enter valid Mobile number"}
                  {errors.mobile?.type === "maxLength" && "Please enter valid Mobile number"}
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name='emailAddress'
                    control={control}
                    rules={{
                      required: true,
                      pattern:
                        /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    }}
                    className='input'
                    render={({ field }) => (
                      <TextField {...field} label='Email' onChange={field.onChange} variant='outlined' className={classes.textField} />
                    )}
                  />
                  {errors.emailAddress?.type === "required" && "Email required"}
                  {errors.emailAddress?.type === "pattern" && "Please enter a valid email"}
                </Grid>
                <Grid item xs={12} align='right'>
                  {isBtnDisbl ? (
                    <Button color='primary' type='submit' variant='contained'>
                      save
                    </Button>
                  ) : (
                    <Button type='button' color='primary' onClick={updtaeContactDetails} variant='contained'>
                      Update
                    </Button>
                  )}
                  <Button type='button' color='secondary' variant='contained' onClick={toggleDrawer("right", false)} style={{ marginLeft: "15px" }}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Drawer> */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            className={classes.button}
            color='primary'
            variant='contained'
            onClick={(e) => handleEmptySubmitForm(e)}
            startIcon={<AddCircleSharpIcon />}>
            Add Product
          </Button>
        </div>
        <div style={{ marginTop: "19px" }}>
          <React.Fragment>
            {products.length === 0 ? ( //if contacts are empty then empty msg is shown
              <EmptyEstimatesDialog
                heading='Empty Product'
                msg="You don't have any contacts here yet.
Click the 'NEW CLIENT' button above to get started, or choose from a template"
              />
            ) : (
              <TableContainer component={Paper}>
                <Table className={classes.table} size='small'>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Image</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Product Name</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Detail</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Price</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Quantity</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Total Price</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Created Date</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Actions</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.image}</TableCell>
                        <TableCell component='th' scope='row'>
                          {row.productName}
                        </TableCell>
                        <TableCell>{row.details}</TableCell>
                        <TableCell>{row.businessType}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell>{row.quantity}</TableCell>
                        <TableCell>{row.totalPrice}</TableCell>
                        <TableCell>{row.createdDate}</TableCell>
                        <TableCell>
                          <ButtonGroup variant='contained'>
                            <Button size='small' color='primary' value={row.contactId} onClick={(e) => handleUpdate(e, row, false)}>
                              <EditIcon value={row.contactId} name='edit' />
                            </Button>
                            <Button size='small' color='secondary' value={row.contactId} onClick={(e) => handleDeleteIcon(e, row.contactId)}>
                              <DeleteIcon value={row.contactId} />
                            </Button>
                          </ButtonGroup>
                          {/* <AlertPopContact
                              confirmDelete={confirmDelete}
                              setConfirmDelete={setConfirmDelete}
                              delID={delID}
                              rows={contacts}
                              setRows={setContacts}
                              setWantToCallGet={setWantToCallGet}
                              setDelLoading={setDelLoading}
                              setOpenSnackbar={setOpenSnackbar}
                            /> */}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </React.Fragment>
        </div>
      </React.Fragment>
    </div>
  );
}
