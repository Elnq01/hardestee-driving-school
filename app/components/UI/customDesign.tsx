import { charcoalGray2, primary } from "@/colors/colors";

export default function CustomDesign(){
    return (<div style={{display:'flex', flexDirection:'row'}}>
        <div style={{background:charcoalGray2, height:'10px', width:"20px"}}></div>
        <div style={{background:primary, height:'10px', width:"20px"}}></div>
    </div>)
}