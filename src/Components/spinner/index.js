import { Spinner } from "reactstrap";
import './styles.scss'

export default function TorotoSpinner(){
    
    return(
        <div className="spinner-container d-flex flex-column align-items-center">
            <Spinner />
            
        </div>
    )
}