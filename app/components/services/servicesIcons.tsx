
import { CiCompass1, CiDeliveryTruck, CiMoneyCheck1, CiUser, CiVideoOn } from 'react-icons/ci';

export default function ServicesIcon({type}:any){
    let iconToDisplay;
    switch(type){
        case 'Get License':
            iconToDisplay = <CiMoneyCheck1 size={50} />
            break;
        
        case 'Instructor Training':
            iconToDisplay = <CiDeliveryTruck size={50} />
            break;

        case 'Traffic Guidelines':
            iconToDisplay = <CiCompass1 size={50} />
            break;

        case 'Learn Driving':
            iconToDisplay = <CiUser size={50} />
            break;

        default:
            iconToDisplay = <CiVideoOn size={50} />
            break;
    }


    return (<>       
     {iconToDisplay}
     </>)
}