import { Button } from "react-bootstrap";
import {charcoalGray1, offWhite2, primary, warmGray1} from "../../../colors/colors";
import BtnStyle2 from './custombtn2.module.css';


export default function CustomBtn2({onClick, children, style}:any){


    return (
        <Button className={BtnStyle2.container} style={{...style}} onClick={onClick}>{children}</Button>
    )
}