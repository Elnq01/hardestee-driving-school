import Image from "next/image";
import LogoSrc1 from "../../../public/hardestee_driving_school-removebg-preview.png";
import LogoSrc2 from "../../../public/hardestree logo.png";

export default function Logo({height, width, id}:{height:number, width:number, id:string}){
    if(id == "footer"){
        return <Image src={LogoSrc1} alt='Logo' height={height} width={width}/>

    }else{
        return <Image src={LogoSrc2} alt='Logo' height={height} width={width}/>
    }
}