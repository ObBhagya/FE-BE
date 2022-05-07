import React from 'react'
import "./Style.css"


function Page1(props) {

const nextpage=()=>{
  props.history.push("/Page2");
};





  return (
    
      <form>
        <h2 className="top2">PersonalDeatils</h2>
        
        <br></br>
      <table align="center">
        <tr>
        <td className="d1" ><input type="text" placeholder='First Name*' id='dd1' /></td> &nbsp;
        <td className="d2"><input type="text" placeholder='Last Name*'id='dd2' /></td>
        </tr>

        <tr>
          <td className="d1"><input type="text" placeholder='Email*' id='dd1' /></td>&nbsp;
          <td className="d2"><input type="text" placeholder='Phone Number*' id='dd2' /></td>
        </tr>

        <tr>
          <td className="d1"><input type="text" placeholder='Your Website' id='dd1' /></td>&nbsp;
          <td className="d2"><input type="text" placeholder='Git Hub' id='dd2'/></td>
        </tr>

        <tr>
          <td className="d1"><input type="text" placeholder='LinkedIn' id='dd1' /></td>&nbsp;
         <td className="d2"> <input type="text" placeholder='Twitter' id='dd2'/></td>
        </tr>

        <tr>
          <td className="d1"><input type="text" placeholder='Facebook' id='dd1' /></td>&nbsp;
          <td className="d2"><input type="text" placeholder='Instagram' id='dd2' /></td>
        </tr>
      
      <tr>
        <td className="d1"><button value="Back" id='dd1' >Back</button></td>&nbsp;
        <td className="d2"><button value="Next" id='dd2' onClick={ nextpage}>Next</button></td>
      </tr>
        </table>
    </form>
  )
}

export default Page1