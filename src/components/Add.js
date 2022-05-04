import "../App.css"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
  } from "@mui/material";
  import React from "react";
  import axios from "axios";
  
  
  
  const Add = () => {
    const [data, setData] = React.useState({
      business_code: "",
      cust_no: "",
      clear_date: "",
      buisness_year: "",
      doc_id: "",
      posting_date: "",
      document_create_date: "",
      due_in_date: "",
      invoice_currency: "",
      doc_type: "",
      posting_id: "",
      total_open_amount: "",
      baseline_create_date: "",
      cust_payment_terms: "",
      invoice_id: ""
  });
  const changeHandler = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
}
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submitHandler=() =>{
    let val = "business_code=" + data.business_code + "&cust_number="+ data.cust_number + "&clear_date=" + data.clear_date + 
        "&buisness_year=" + data.buisness_year + "&doc_id="+ data.doc_id + "&posting_date=" + data.posting_date +
        "&document_create_date="+ data.document_create_date + "&due_in_date=" + data.due_in_date + 
        "&invoice_currency=" + data.invoice_currency + "&document_type=" + data.document_type + "&posting_id=" + data.posting_id +
        "&total_open_amount=" + data.total_open_amount + "&baseline_create_date=" + data.baseline_create_date +
        "&cust_payment_terms=" + data.cust_payment_terms + "&invoice_id=" + data.invoice_id;
    axios.get("http://localhost:8081/HRC_Backend/newinvoice?"+val).then(res =>{
      const response=res.data;
      if(response){
          setData({
              business_code: "",
              cust_number: "",
              clear_date: "",
              business_year: "",
              doc_id: "",
              posting_date: "",
              document_create_date: "",
              due_in_date: "",
              invoice_currency: "",
              document_type: "",
              posting_id: "",
              total_open_amount: "",
              baseline_create_date: "",
              cust_payment_terms: "",
              invoice_id: ""
          });
          setOpen(false);
        }
    })
  }
    return (
      <div>
        <div>
         
          <button className="buttoncrud"
            onClick={handleClickOpen} 
          >
            Add
          </button>
          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth={"md"}
            PaperProps= {{
              style: {
                backgroundColor: "#1b2b45"
               
              },
            }} 
          >
            <DialogTitle style = {{color:'#fff'}}>Add</DialogTitle>
            <DialogContent sx = {{paddingTop: "20px"}}>
              <form
                id="addForm"
              >
                <Grid container rowSpacing={3} columnSpacing={4}>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="outlined-basic"
                      label="Business Code"
                      variant="outlined"
                      name="business_code"
                      style={{backgroundColor:"white"}}
                      value={
                        data.business_code
                      }
                      onChange={
                        changeHandler
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="outlined-basic"
                      label="Customer Number"
                      variant="outlined"
                      name="cust_number"
                      style={{backgroundColor:"white"}}
                      value={
                        data.cust_number
                      }
                      onChange={
                        changeHandler
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      id="outlined-basic"
                      label="clear Date"
                      variant="outlined"
                      name="clear_date"
                      type="Date"
                      style={{backgroundColor:"white"}}
                      value={
                        data.clear_date
                      }
                      onChange={
                        changeHandler
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="outlined-basic"
                      label="Business Year"
                      variant="outlined"
                      name="buisness_year"
                      value={
                        data.buisness_year
                      }
                      onChange={
                        changeHandler
                      }
                      style={{backgroundColor:"white"}}

                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="outlined-basic"
                      label="Document id"
                      variant="outlined"
                      name="doc_id"
                      value={
                        data.doc_id
                      }
                      onChange={
                        changeHandler
                      }
                      style={{backgroundColor:"white"}}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      id="outlined-basic"
                      label="Posting Date"
                      variant="outlined"
                      type="Date"
                      name="posting_date"
                      value={
                        data.posting_date
                      }
                      onChange={
                        changeHandler
                      }
                      style={{backgroundColor:"white"}}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      id="outlined-basic"
                      label="Document Create Date"
                      variant="outlined"
                      type="Date"
                      name="document_create_date"
                      value={
                        data.document_create_date
                      }
                      onChange={
                        changeHandler
                      }
                      style={{backgroundColor:"white"}}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      id="outlined-basic"
                      label="Due Date"
                      variant="outlined"
                      type="Date"
                      name="due_in_date"
                      value={
                        data.due_in_date
                      }
                      onChange={
                        changeHandler
                      }
                      style={{backgroundColor:"white"}}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="outlined-basic"
                      label="Invoice Currency"
                      variant="outlined"
                      name="invoice_currency"
                      value={
                        data.invoice_currency
                      }
                      onChange={
                        changeHandler
                      }
                      style={{backgroundColor:"white"}}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="outlined-basic"
                      label="Document Type"
                      variant="outlined"
                      name="document_type"
                      value={
                        data.document_type
                      }
                      onChange={
                        changeHandler
                      }
                      style={{backgroundColor:"white"}}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="outlined-basic"
                      label="Posting Id"
                      variant="outlined"
                      name="posting_id"
                      value={
                        data.posting_id
                      }
                      onChange={
                        changeHandler
                      }
                      style={{backgroundColor:"white"}}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="outlined-basic"
                      label="Total Open Amount"
                      variant="outlined"
                      name="total_open_amount"
                      value={
                        data.total_open_amount
                      }
                      onChange={
                        changeHandler
                      }
                      style={{backgroundColor:"white"}}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      id="outlined-basic"
                      label="Baseline Create Date"
                      variant="outlined"
                      type="Date"
                      name="baseline_create_date"
                      value={
                        data.baseline_create_date
                      }
                      onChange={
                        changeHandler
                      }
                      style={{backgroundColor:"white"}}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="outlined-basic"
                      label="Customer Payment Terms"
                      variant="outlined"
                      name="cust_payment_terms"
                      value={
                        data.cust_payment_terms
                      }
                      onChange={
                        changeHandler
                      }
                      style={{backgroundColor:"white"}}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="outlined-basic"
                      label="Invoice Id"
                      variant="outlined"
                      name="invoice_id"
                      value={
                        data.invoice_id
                      }
                      onChange={
                        changeHandler
                      }
                      style={{backgroundColor:"white"}}
                    />
                  </Grid>
                </Grid>
              </form>
            </DialogContent>
            <DialogActions>
            <Grid container>
            <Grid item xs = {12} md = {6}>
                <Button onClick={submitHandler} color="primary" autoFocus style = {{width: "100%"}}>
                  ADD
                </Button>
              </Grid>
              <Grid item xs = {12} md = {6} >
                <Button onClick={handleClose} color="primary" style = {{width: "100%"}}>
                  CANCEL
                </Button>
              </Grid>
            </Grid>
            </DialogActions>
          </Dialog>
        </div>
     
      </div>
    );
  };
  
  export default Add;
  