import "../App.css"
import React,{useState, useEffect, Component} from "react";
import {DataGrid} from "@material-ui/data-grid";
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from"axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContentText } from "@mui/material";
import { Grid } from '@mui/material';
import Add from "./Add"
import RefreshIcon from '@mui/icons-material/Refresh';





const columns = [
    {field:"sl_no", headerName:"SL No.",width:120},
    {field:"business_code", headerName:"Bussiness Code",width:300},
    {field:"cust_number", headerName:"Custumer Number",width:300},
    {field:"clear_date", headerName:"Clear Date",width:300},
    {field:"buisness_year", headerName:"Bussiness Year",width:300},
    {field:"doc_id", headerName:"Document ID",width:300},
    {field:"posting_date", headerName:"Posting Date",width:300},
    {field:"document_create_date", headerName:"Document Clear Date",width:300},
    {field:"due_in_date", headerName:"Due In Date",width:300},
    {field:"invoice_currency", headerName:"Invoice Currency",width:300},
    {field:"posting_id", headerName:"Posting ID",width:300},
    {field:"document_type", headerName:"Document Type",width:300},
    {field:"total_open_amount", headerName:"total Open Amount",width:300},
    {field:"baseline_create_date", headerName:"Baseline Create Date",width:300},
    {field:"cust_payment_terms", headerName:"Customer Payment Terms",width:300},
    {field:"invoice_id", headerName:"Invoice ID",width:300},
]



const DataTable = () => {

    const [tableData, setTabledata] =  useState([])
    const [ids, setIds] = useState([])
    const [open, setOpen] = React.useState(false);
    const [deleteopen, setDeleteopen] = React.useState(false);
    const [searchopen, setSearchopen] = React.useState(false);
    const [incurrency, setIncurrency] = React.useState('');
    const [custpayterm, setCustpayterm] = React.useState('');
    const [docid, setDocid] = React.useState('');
    const [custno, setCustno] = React.useState('');
    const [invoiceid, setInvoiceid] = React.useState('');
    const [buisnessyear, setBusinessyear] = React.useState('');
   



    const RefreshCall = () => {
      window.location.reload();
  };

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpenSearch = () => {
      setSearchopen(true);
    };

    const handleCloseSearch = () => {
      setSearchopen(false);
    };

    const handleOpenDelete = () => {
      setDeleteopen(true);
    };

    const handleCloseDelete = () => {
      setDeleteopen(false);
    };


  /* Update the  search query from backend */
    const SearchDialog = () => {
      console.log(docid)
      console.log(custno)
      console.log(invoiceid)
      console.log(buisnessyear)

      let val= "doc_id=" + docid + "&cust_number=" + custno + "&invoice_id=" + invoiceid + "&buisness_year=" + buisnessyear 

      axios.get("http://localhost:8081/HRC_Backend/SearchServlet?"+ val)
      .then((response)=>{
        setTabledata(response.data);
    })
      .then(()=>{
      handleCloseSearch();
  })

    };

    
  /* Update the edit query from backend */
    const EditDialog = () => {
        console.log(ids)
        console.log(incurrency)
        console.log(custpayterm)

        let val= "sl_no=" + ids + "&invoice_currency=" + incurrency + "&cust_payment_terms=" + custpayterm

    axios.get("http://localhost:8081/HRC_Backend/EditServlet?"+ val).then(()=>{
      handleClose();
  })

  
    };
/* Update the delete query from backend */
    const handleDeleteAll = () => {
      console.log(ids);
      axios.get("http://localhost:8081/HRC_Backend/DeleteServlet?"+ new URLSearchParams({"sl_no":ids})) .then(()=>{
        handleCloseDelete();
    })
    
    };

/* Fetchong the data */

    useEffect(()=>{
      fetch('http://localhost:8081/HRC_Backend/FetchServlet')
      .then((data)=> data.json())
      .then((data) => setTabledata(data))
  },[])
 

  const [pageSize, setPageSize] = useState(10);
  const [query, setQuery] = useState("");
  
  



    return(
      <>  
      <div className='container' style = {{display: 'grid'}}>
        <div>
          <div>
        <div>
        <button className='button'>PREDICT</button>
        <button className='button' >ANALYTICS VIEW</button>
        </div>

       
        <button className='button' onClick={handleOpenSearch}>ADVANCED SEARCH</button>
        <Dialog open={searchopen} onClose={handleClose} fullWidth maxWidth="sm">
        <div  style={{backgroundColor: '#1b2b45'}}><DialogTitle>Advanced Search</DialogTitle></div>
        <DialogContent  style={{backgroundColor: '#1b2b45'}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}     style={{backgroundColor: '#1b2b45'}}>
            <Grid item xs={6}>
                <input  type="text" placeholder="Document ID"  onChange={event => setDocid(event.target.value)}  />
            </Grid>
            <Grid item xs={6}>
            <input  type="text"  placeholder="Customer Number" onChange={event => setCustno(event.target.value)}></input>
            </Grid>
            <Grid item xs={6}>
            <input  type="text"  placeholder="Invoice ID" onChange={event => setInvoiceid(event.target.value)}></input>
            </Grid>
            <Grid item xs={6}>
            <input  type="text"  placeholder="Business Year" onChange={event => setBusinessyear(event.target.value)}></input>
            </Grid>
        </Grid>
        </DialogContent>
        <DialogActions  style={{backgroundColor: '#1b2b45'}}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
        <Grid item xs={6}>
        <button className='button' onClick={SearchDialog}>Search</button>
        </Grid>
        <Grid item xs={6}>
        <button className='button' onClick={handleCloseSearch}>CANCEL</button>
        </Grid>
        </Grid>
        </DialogActions>
        </Dialog>

        </div>
        </div>


        <div className='Search'>
          <div>
            <button className="button reload" onClick = {RefreshCall}>
            <RefreshIcon />
            </button>
          </div>
      <div>
      <input className='Searchbutton' type="text" placeholder="Search Customer ID" value={query} onChange={(e) => setQuery(e.target.value.toLowerCase())}></input>
      </div>

      
        </div>
        <div>



        <div className = "crud">

        <div>
        <Add />
        </div>
       


      <div>
        <button className='buttoncrud' onClick={handleClickOpen}>EDIT</button>
        <Dialog open={open} onClose={handleCloseDelete} fullWidth maxWidth="sm">
        <div  style={{backgroundColor: '#1b2b45'}}><DialogTitle>EDIT</DialogTitle></div>
        <DialogContent  style={{backgroundColor: '#1b2b45'}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}     style={{backgroundColor: '#1b2b45'}}>
            <Grid item xs={6}>
                <input  type="text" placeholder="Invoice Currency"  onChange={event => setIncurrency(event.target.value)}  />
            </Grid>
            <Grid item xs={6}>
            <input  type="text"  placeholder="Customer Payment Terms" onChange={event => setCustpayterm(event.target.value)}></input>
                </Grid>
        </Grid>
        </DialogContent>
        <DialogActions  style={{backgroundColor: '#1b2b45'}}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
        <Grid item xs={6}>
        <button className='button' onClick={EditDialog}>EDIT</button>
        </Grid>
        <Grid item xs={6}>
        <button className='button' onClick={handleClose}>CANCEL</button>
        </Grid>
        </Grid>
        </DialogActions>
        </Dialog>      

        </div>




        <div>
        <button className='buttoncrud' onClick={handleOpenDelete}>DELETE</button>
        <Dialog open={deleteopen} onClose={handleClose} fullWidth maxWidth="sm">
        <div  style={{backgroundColor: '#1b2b45'}}><DialogTitle>Delete Record</DialogTitle></div>
        <DialogContent  style={{backgroundColor: '#1b2b45'}}>
        <DialogContentText id="alert-dialog-description" style={{color: '#fff'}}>
            Are you sure you want to delete this record?
          </DialogContentText>
        </DialogContent>
        <DialogActions  style={{backgroundColor: '#1b2b45'}}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
        <Grid item xs={6}>
        <button className='button' onClick={handleDeleteAll}>DELETE</button>
        </Grid>
        <Grid item xs={6}>
        <button className='button' onClick={handleCloseDelete}>CANCEL</button>
        </Grid>
        </Grid>
        </DialogActions>
        </Dialog>
        </div>



        </div>
        
        </div>
        </div>


        <div style={{height:390, width:"100%" }}>
           <DataGrid style = {{marginBottom:"100px"}}
             rows={tableData.filter(row=>row.cust_number.toString().includes(query))}
             getRowId={(row) => row.sl_no}  
             columns={columns}
             pageSize={pageSize}
             onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
             rowsPerPageOptions={[5, 10, 20]}
             pagination
             checkboxSelection
             disableSelectionOnClick
             onSelectionModelChange={(itm) => setIds(itm)}
           />
      </div>
      </>
    )
}
export default DataTable;