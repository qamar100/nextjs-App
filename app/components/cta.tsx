import Arrow from "../../public/assets/arrow.png" 
import Image from "next/image"

export function cta()
{
    return (
        <div className="w-full rounded[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center">
          <h1 className=" text-white text-[32px] font-medium"> Moniter like a pro </h1>
            <p className=" text-white pt-6">
            Join over 800+ site owner boosting productivity and efffieciency</p>
        
            <div className=" mt-[40px] flex flex-col w-full items-center">
                <button className="py-[16px] px[32px] bg-white rounded-[4px] text-pink-500 w-fit">
                    Try for free
                    
                </button>
                <button className=" flex w-full items-center justify-center gap-x-3 mt-[32px] text-white font-medium">
                    Contact sales{" "}
                    <span>
                        <Image src={Arrow} alt= ""/>
                    </span>
                </button>
            </div>
        </div>
    )
} 