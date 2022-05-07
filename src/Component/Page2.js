import React from 'react'

function Page2(props) {

      const nextpage=()=>{
            props.history.push("/Page3");
          };
          

          const prevPage = () => {
            props.history.push("/");
          };

  return (
   <form>
          <h2 className="top2">Eductional Deatils</h2>
          <table align="center">
                <tr>
                      <td className='ed1'><input type="text" placeholder='College/University*' id='edd1' /></td>
                      <td className='ed2'><input type="text" placeholder='dd/mm/yy' id='edd2' /></td>
                      <td className='ed3'><input type="text" placeholder='dd/mm/yy' id='edd3' /></td>
                      </tr>

                      <tr>
                            <td className='sed1'><input type="text" placeholder='Qualification*' id='ssd1' /></td>
                            <td className='sed2'><input type="text" placeholder='Description*' id='ssd2' /></td>
                      </tr>

                        <br></br>

                      <tr>
                            <td className='ed1'><input type="text" placeholder='School*' id='edd1' /></td>
                            <td className='ed2'><input type="text" placeholder='dd/mm/yy' id='edd2' /></td>
                            <td className='ed3'><input type="text" placeholder='dd/mm/yy'id='edd3' /></td>
                      </tr>

                      <tr>
                            <td className='sed1'><input type="text" placeholder='Qualification*' id='ssd1' /></td>
                            <td  className='sed2'><input type="text" placeholder='Description*' id='ssd2' /></td>
                      </tr>

                      <tr>
        <td className="d1"><button value="Back" id='dd1' onClick={ prevPage}>Back</button></td>&nbsp;
        <td className="d2"><button value="Next" id='dd2' onClick={ nextpage}>Next</button></td>
      </tr>
          </table>
   </form>
  )
}

export default Page2