
import {Showplans} from "./Showplan"
function Plans({plan}) {

    

    
    return (
        <div>

            {plan.map(i => 
                <Showplans details = {i}/>)
            }    
            
        </div>

    )

}
export {Plans}