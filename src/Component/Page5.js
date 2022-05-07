import React from 'react'

function Page5(props) {

  const prevPage = () => {
    props.history.push("/Page4");
  };


  return (
   <form>
           <h2 align="center">Extra Details</h2>
         <table align="center">
               <h2>Skills/Languages</h2>
         <tr>
             <td className='ed1'><input type="text" placeholder='Skill 1' id='edd1' /></td>
             <td className='ed1'><input type="text" placeholder='Skill 2' id='edd1' /></td>
             <td className='ed1'><input type="text" placeholder='Skill 3' id='edd1' /></td>
             </tr>

             <tr>
             <td className='ed1'><input type="text" placeholder='Skill 1' id='edd1' /></td>
             <td className='ed1'><input type="text" placeholder='Skill 2' id='edd1' /></td>
             <td className='ed1'><input type="text" placeholder='Skill 3' id='edd1' /></td>
             </tr>



             <h2>Interest</h2>
         <tr>
             <td className='ed1'><input type="text" placeholder='Interest 1' id='edd1' /></td>
             <td className='ed1'><input type="text" placeholder='Interest 2' id='edd1' /></td>
             <td className='ed1'><input type="text" placeholder='Interest 3' id='edd1' /></td>
             </tr>

             <tr>
             <td className='ed1'><input type="text" placeholder='Interest 1' id='edd1' /></td>
             <td className='ed1'><input type="text" placeholder='Interest 2' id='edd1' /></td>
             <td className='ed1'><input type="text" placeholder='Interest 3' id='edd1' /></td>
             </tr>

             <tr>
        <td className="d1"><button value="Back" id='dd1' onClick={ prevPage}>Back</button></td>&nbsp;
        <td className="d2"><button value="Next" id='dd2'>Next</button></td>
      </tr>


         </table>
   </form>
  )
}

export default Page5