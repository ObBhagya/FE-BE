import React from 'react'

function Page4(props) {

      const nextpage=()=>{
            props.history.push("/Page5");
          };

          const prevPage = () => {
            props.history.push("/Page3");
          };


  return (



      
 <form>

            <h2 align="center">Experience Details</h2>

       <table align="center">

             <h3>Experience 1</h3>
             
             <tr>
             <td className='ed1'><input type="text" placeholder='Instution/Organization*' id='edd1' /></td>
             <td className='ed1'><input type="text" placeholder='Position*' id='edd1' /></td>
             <td className='ed1'><input type="text" placeholder='Duration*' id='edd1' /></td>
             </tr>

             <tr>
            <input type="text" placeholder='Description*' id='exp1' /></tr>

                  <br></br>
            <h3>Experience 1</h3>
            <tr>
             <td className='ed1'><input type="text" placeholder='Instution/Organization*' id='edd1' /></td>
             <td className='ed1'><input type="text" placeholder='Position*' id='edd1' /></td>
             <td className='ed1'><input type="text" placeholder='Duration*' id='edd1' /></td>
             </tr>

             <tr>
            <input type="text" placeholder='Description*' id='exp1' /></tr>


            <tr>
        <td className="d1"><button value="Back" id='dd1'  onClick={ prevPage}>Back</button></td>&nbsp;
        <td className="d2"><button value="Next" id='dd2' onClick={ nextpage}>Next </button></td>
      </tr>
            

       </table>
 </form>
  )
}

export default Page4