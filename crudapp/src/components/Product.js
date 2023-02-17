/** @format */

import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Table from "@material-ui/core/Table";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import Checkbox from "@material-ui/core/Checkbox";
import { Snackbar } from "@material-ui/core";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import { v4 as uuid } from "uuid";

import EditIcon from "@material-ui/icons/Edit";

import Alert from "@material-ui/lab/Alert";
import { useForm, Controller } from "react-hook-form";
import AlertPopContact from "./AlertPopContact";

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
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [createdDate, setCreatedDate] = useState();
  const [id, setId] = useState(uuid());

  const [confirmDelete, setConfirmDelete] = useState(false);

  const [isBtnDisbl, setIsBtnDisbl] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };
  const handleUpdate = (e, row) => {
    commonToggle(true);
    setIsBtnDisbl(false); //
    let temp = {
      productId: row.productId,
      details: row.details,
      image: "",
      price: row.price,
      productName: row.productName,
      quantity: row.quantity,
      totalPrice: row.totalPrice,
      createdDate: row.createdDate,
    };
    reset(temp);
  };

  /* Form Validation */
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  function commonToggle(open) {
    setStates({ ...states, ["right"]: open });
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("products"));
    if (items) {
      setProducts(items);
      console.log("items", items);
    }
  }, []);

  const [deleteProductId, setDeleteProductId] = useState();
  const handleDeleteIcon = (e, productId) => {
    console.log("productId", productId);
    setConfirmDelete(true);
    setDeleteProductId(productId);
  };

  const toggleDrawer = (anchor, open, name) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setStates({ ...states, [anchor]: open });
  };

  const submitProductDetails = (data) => {
    console.log("data", data);
    let totalPrice = data.price * data.quantity;
    let temp = {
      productId: uuid(),
      details: data.details,
      image: data.image,
      price: data.price,
      productName: data.productName,
      quantity: data.quantity,
      totalPrice: totalPrice,
      createdDate: data.createdDate,
    };
    let tempData = [...products, temp];
    localStorage.setItem("products", JSON.stringify(tempData));
    setProducts([...products, temp]);

    commonToggle(false);
  };
  const addNewProduct = (data) => {
    let row = {};
    reset(row);

    commonToggle(true);

    setIsBtnDisbl(true); //By defualt for showing save button
  };

  const updtaeContactDetails = () => {
    console.log("update");
    let productData = getValues();
    console.log(productData);
    products.filter((el) => {
      if (el.productId === productData.productId) {
        el = productData;
        console.log("el", el);
      }
    });
    localStorage.setItem("products", JSON.stringify(products));

    commonToggle(false);

    reset();
    setIsBtnDisbl(false); //By defualt for showing save button
  };

  return (
    <div>
      <React.Fragment key={"right"}>
        <Drawer anchor={"right"} open={states["right"]} onClose={toggleDrawer("right", false)}>
          <div className={classes.Drawerroot}>
            <form onSubmit={handleSubmit(submitProductDetails)}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  {isBtnDisbl ? (
                    <Typography align='center' variant='h5'>
                      New Product
                    </Typography>
                  ) : (
                    <Typography variant='h5' align='center'>
                      Update Product
                    </Typography>
                  )}
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name='image'
                    control={control}
                    rules={{ required: true }}
                    className='input'
                    render={({ field }) => <TextField {...field} type='file' variant='outlined' className={classes.textField} />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name='productName'
                    control={control}
                    rules={{ required: true }}
                    className='input'
                    render={({ field }) => <TextField {...field} label='Product Name *' variant='outlined' className={classes.textField} />}
                  />
                  {errors.productName && "product name is required"}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name='details'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => <TextField {...field} label='Details' variant='outlined' className={classes.textField} />}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    name='price'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => <TextField {...field} label='Price' type='number' variant='outlined' className={classes.textField} />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name='quantity'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label='Quantity'
                        onChange={field.onChange}
                        value={field.value}
                        type='number'
                        variant='outlined'
                        className={classes.textField}
                      />
                    )}
                  />
                  {errors.quantity && "quantity required"}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name='totalPrice'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => <TextField {...field} disabled label='Total Price' variant='outlined' className={classes.textField} />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name='createdDate'
                    control={control}
                    rules={{ required: false }}
                    className='input'
                    render={({ field }) => <TextField {...field} type='date' variant='outlined' className={classes.textField} />}
                  />
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
        </Drawer>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button className={classes.button} color='primary' variant='contained' onClick={(e) => addNewProduct(e)} startIcon={<AddCircleSharpIcon />}>
            Add Product
          </Button>
        </div>
        <div style={{ marginTop: "19px" }}>
          <React.Fragment>
            {products.length === 0 ? (
              <TableContainer component={Paper}>
                <Table className={classes.table} size='small'>
                  <TableHead>
                    <TableCell align='center'>
                      <h3>Please First Add Products</h3>
                    </TableCell>
                  </TableHead>
                </Table>
              </TableContainer>
            ) : (
              <TableContainer component={Paper}>
                <Table className={classes.table} size='small'>
                  <TableHead>
                    <TableRow>
                      <TableCell width={"10%"}>
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
                        <TableCell>
                          <img src={row.image} width='50px' height='50px' />
                        </TableCell>
                        <TableCell component='th' scope='row'>
                          {row.productName}
                        </TableCell>
                        <TableCell>{row.details}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell>{row.quantity}</TableCell>
                        <TableCell>{row.totalPrice}</TableCell>
                        <TableCell>{row.createdDate}</TableCell>
                        <TableCell>
                          <ButtonGroup variant='contained'>
                            <Button size='small' color='primary' value={row.contactId} onClick={(e) => handleUpdate(e, row, false)}>
                              <EditIcon value={row.contactId} name='edit' />
                            </Button>
                            <Button size='small' color='secondary' value={row.contactId} onClick={(e) => handleDeleteIcon(e, row.productId)}>
                              <DeleteIcon value={row.contactId} />
                            </Button>
                          </ButtonGroup>
                          <AlertPopContact
                            confirmDelete={confirmDelete}
                            setConfirmDelete={setConfirmDelete}
                            productId={deleteProductId}
                            setProducts={setProducts}
                            products={products}
                          />
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
