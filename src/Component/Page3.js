import React from 'react'

function Page3(props) {

      const nextpage=()=>{
            props.history.push("/Page4");
          };
          
          const prevPage = () => {
            props.history.push("/Page2");
          };


  return (
    <form>
            <h2 className="top2">Projects Developed</h2>
          <table align="center">
                <h2 align="center">Project 1</h2>

            <tr>
                  <td className='pd'><input type="text" placeholder='Title 1*' id='pdd1' /></td>
            </tr>

            <tr>
                  <td className='pd'><input type="text" placeholder='Link*' id='pdd1' /></td>
            </tr>

            <tr>
                  <td className='pd'><input type="text" placeholder='Description*' id='pdd1' /></td>
            </tr>

            <h2 align="center">Project 1</h2>

            <tr>
                  <td className='pd'><input type="text" placeholder='Title 1*' id='pdd1' /></td>
            </tr>

            <tr>
            <td className='pd'><input type="text" placeholder='Link*' id='pdd1' /></td>
            </tr>
             
             <tr>
                   <td className='pd'><input type="text" placeholder='Description' id='pdd1' /></td>
             </tr>

             <tr>
        <td className="d1"><button value="Back" id='dd1' onClick={ prevPage}>Back</button></td>&nbsp;
        <td className="d2"><button value="Next" id='dd2' onClick={ nextpage}>Next</button></td>
      </tr>

          </table>
    </form>
  )
}

export default Page3