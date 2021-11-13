
import {Showplans, prices} from "./Showplan"

function Plans({plan,token}) {

    

    
    return (
        <div>

            {plan.map(i => 
                <Showplans  details = {i} token={token}/> )
            }    
            
        </div>

    )

}
export {Plans}