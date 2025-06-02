import Image from "next/image";
import IMage from "../../../public/bus.jpg";

export default function GalleryMedia({type, source}){
    switch(type){
        
        case "video":
            return <iframe
                        // width="560"
                        height="200"
                        src={source}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="mb-4"
                        style={{borderRadius:'10px'}}
                        />

        
        default:
            return <Image src={IMage.src} style={{width:'100%', height:'200px', borderRadius:'10px'}} alt="Image" />
    }
}