 
 import {Expertdetails} from "./Expert_details"
function Expertlist({response}) {


    return (
        <>
        <div>
        {response.map( i => 
          <Expertdetails details = {i} />
            
            )}
            </div>
      
        </>
    )
}

export {Expertlist}