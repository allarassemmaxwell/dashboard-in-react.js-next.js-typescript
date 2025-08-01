import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
    text: string,
    link: string
}

const BackButton = ({text, link}:BackButtonProps) => {
    return (
        <>
            <Link href={ link } className="text-gray-500 hover:underline flex items-center gaps-1 font-bold mb-5">
                <ArrowLeftCircle size={18} className="mr-1" /> {text }  
            </Link>
        </>
    );
}
 
export default BackButton;