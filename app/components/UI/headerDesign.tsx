import { charcoalGray2, primary } from "@/colors/colors";
import HeaderDesignStyle from "./headerDesign.module.css";

export default function HeaderDesign({text1, text2}){
    return <h5 className={HeaderDesignStyle.H5}>
            <span 
                style={{
                    color:primary, 
                    background:charcoalGray2,
                    padding:"5px",
                    borderTopLeftRadius:'5px',
                    borderBottomLeftRadius:'5px'
                    }}>{text1}</span> 
            <span 
                style={{
                    color:charcoalGray2, 
                    background:primary,
                    padding:"5px",
                    borderTopRightRadius:'5px',
                    borderBottomRightRadius:'5px'
                    }}>{text2}</span>
        </h5>
}