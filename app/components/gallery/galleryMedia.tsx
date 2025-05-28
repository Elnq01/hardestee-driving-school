import Image from "next/image";
import IMage from "../../../public/bus.jpg";

export default function GalleryMedia({type, source}:any){
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
                        />

        
        default:
            return <img src={IMage.src} height={200} alt="Image" />
    }
}