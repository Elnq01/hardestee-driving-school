import { BiAnchor, BiCard, BiTrafficCone, BiUser, BiVideo } from 'react-icons/bi';
import { CiAlarmOn, CiCreditCard1, CiLight } from 'react-icons/ci';

export default function ServicesIcon({type}:any){
    let iconToDisplay;
    switch(type){
        case 'Get License':
            iconToDisplay = <BiCard size={50} />
            break;
        
        case 'Instructor Training':
            iconToDisplay = <BiAnchor size={50} />
            break;

        case 'Traffic Guidelines':
            iconToDisplay = <BiTrafficCone size={50} />
            break;

        case 'Learn Driving':
            iconToDisplay = <BiUser size={50} />
            break;

        default:
            iconToDisplay = <BiVideo size={50} />
            break;
    }


    return (<>       
     {iconToDisplay}
     </>)
}