import Image from "next/image";
import SymbolImage from "@/assets/images/symbol.svg";

export type ShapeFrameProps = {
    className?: string;
    shapesClassName?: string;
}

const ShapeFrame = ({ shapesClassName, className }: ShapeFrameProps) => {
    return (
        <div className={`w-full h-full flex flex-col justify-between ${className}`}>
            <div className="w-full flex justify-between">
                <Image src={SymbolImage} alt="symbol" className={`rotate-90 ${shapesClassName}`} />
                <Image src={SymbolImage} alt="symbol" className={` ${shapesClassName}`} />
            </div>
            <div className="w-full flex justify-between">
                <Image src={SymbolImage} alt="symbol" className={`rotate-180 ${shapesClassName}`} />
                <Image src={SymbolImage} alt="symbol" className={`-rotate-90 ${shapesClassName}`} />
            </div>
        </div>
    );
};

export default ShapeFrame;