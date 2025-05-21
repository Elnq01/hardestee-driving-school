import { Button } from "react-bootstrap";
import {charcoalGray1, primary, warmGray1} from "../../../colors/colors";

export default function CustomBtn({onClick, children, style}:any){

    console.log("pla pla: ", style)

    return (
        <Button 
            style={{...style,
                background:charcoalGray1,
                border:`3px solid ${primary}`,
                fontWeight:'bolder'
            }} 
            onClick={onClick}>{children}</Button>
    )
}