import React  from "react";
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';


// import Send from './send'


//  import { Data } from "./data";

//  import * as XLSX from "xlsx";
 import * as xlsx from "xlsx";

 const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class ExcelToJson extends React.Component {
  // var data1 = "abc";
  constructor(props) {
    super(props);
    //  this.data1 = "abc";
    this.state = {
      file: "",
      dataInFile:[]
    };
  }
  
 
  

 


   readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            console.log(json);
            this.setState({
              dataInFile: json
            })
        };
        reader.readAsArrayBuffer(e.target.files[0]);
      
    }
    
    

  }



  render() {
    // var data1 = this.state.dataInFile.split(',')[0].trim() || ''
    // var data1 = this.state.dataInFile.reverse()
    var data1 = this.state.dataInFile.reverse()
    
   var a =  JSON.stringify(data1)
   var b = a.replace(/[{}]/g, '')
   console.log(a)
   console.log(b)

    // const d = new Date()
    // let yest_date = d.getDate(d.setDate() -1)
    //  d.setDate(d.getDate() - 1);
    // console.log(d)
   
    return (
      <div style={{justifyContent:"center",textAlign:"center"}} >
     
        <h1>Please choose the file!</h1>
        <input style={{border: '1px solid black'}}
          type="file"
          id="file"
          ref="fileUploader"
          onChange={this.readUploadFile}
          
        />
        {/* {JSON.stringify(this.state.dataInFile[0] )} */}

        <br/>
        <br/>
        <br/>
        <br/>
        <table class="table table-striped" style={{borderBlockStyle:"solid",border: '1px solid black',width:'70%', marginLeft:'15%', marginRight:'15%' }} >
                <thead >
                    <tr style={{border: '1px solid black'}}>
                   
                    < StyledTableCell style={{border: '1px solid black',backgroundColor:"black",color:"white"}}>Date</StyledTableCell>
                    <StyledTableCell  style={{border: '1px solid black',backgroundColor:"black",color:"white"}}>Activity</StyledTableCell>
                    <StyledTableCell  style={{border: '1px solid black',backgroundColor:"black",color:"white"}}>Main Contributor</StyledTableCell>
                    {/* <th>  hyperlink</th> */}
                    {/* https://api.whatsapp.coms/send?phone */}
                    </tr>
                </thead>
                <tbody>
                 
        {/* {this.state.dataInFile[1]} */}
                    
                {this.state.dataInFile.map( info =>
                 (
                  <tr >
                    
                  <StyledTableCell> {info.Date}</StyledTableCell>
                  <StyledTableCell >{info.Activity}</StyledTableCell>
                  <StyledTableCell >{info.MainContributor}</StyledTableCell>
                  {/* <td><a href="https://wa.me/7019616404?text={info.age}"/>{info.hyperlink}</td> */}
                  </tr>
                  
                  
                 )

                 
                )}   
                {/* {this.state.dataInFile.filter(info => {
                  if( info.Date === d){
                   return(
                    <StyledTableCell> {info.Date}</StyledTableCell>
                   )
                  }else{
                    return 
                  }
                })} */}

                {/* {this.state.dataInFile.filter(info1 => info1 === yest_date
                {
                  if(info1.Date === yest_date){
                    return <StyledTableCell> {info1.Date}</StyledTableCell>
                  }
                }

                )} */}

                           
                </tbody>
            </table>
            {/* {this.state.dataInFile.} */}
                  <br/><br/>
                    {/* <button ><a  href = "https://wa.me/918884721777?text =+{data1}">click mee</a></button> */}
                    <button ><a  href = {`https://wa.me/918884721777?text=${a}`}>click mee</a></button>
            {/* <Send/>   */}
           
      </div>
    );
  }
}

export default ExcelToJson;

// export default function App(){
//   const[ExcelData,setExcelData]=useState('')

//  function handleFile(e){

//    let selectFile = ExcelData;
//    if(selectFile){
//      alert('selectFile.type')
//     console.log(selectFile.type)
//    }else{
//      console.log('please select your file')
     

//    }
//    setExcelData(selectFile.type)
//  } 
 

//   return(
//     <>
//     <h1>hiiii</h1>
//     <div className="container">
//       <div className="form">
//         <form className="form-group" autoComplete="off">
//           <label><h5>Upload file</h5></label>
//           <br></br>
//           <input type='file' className="form-control" onChange={(e) => setExcelData(e.target.files[0])}  required></input>

//           <button type="submit" className="btn btn-success"
//           style={{marginTop:5+"px"}} onClick={(e) => handleFile(e)}>submit</button>
//         </form>
//       </div>

//       <br></br>
//       <hr></hr>
//       <h5>view excel file</h5>
//       <div className="viewer">
//         {ExcelData==null&&<>no file selected</>}
//         {ExcelData==null&&(
//           <div className="table-responsive">
//             <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">Id</th>
//                 <th scope="col">name</th>
//                 <th scope="col">age</th>
                



//               </tr>


//             </thead>
//             <tbody>
//               <Data ExelData={ExcelData}/>

//             </tbody>

//             </table>
//             </div>
//         )}
//       </div>
//     </div>
//     </>
//   )
// }
 