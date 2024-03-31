import Image from "next/image";
import logo   from "../../public/assets/Logo.svg"
import User from "../../public/assets/User.svg"
import Menu from "../../public/assets/Menu.svg"

const NavLinks = [
    { name: 'Features' },
    { name: 'Pricing' },
    { name: 'Enterprise' },
    { name: 'Careers' },
];


export function NavBar() {


    return (
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
            <div className=" flex item-center">
               <Image src={logo} alt="logo" />
              
                <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                    {NavLinks.map((item, index) => (
                        
                        <p className="text-[#36485C] font-medium" key={index}>{item.name}</p> 
                  
                  ))}
                </div>   
            </div>
            
            <div className="flex gap-x-5">
            <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]"> Open an account</p>  
                <div className="flex item-center gap=x=2">
                
                <Image src={User} alt='User profile' />
                    <span className="hidden font-medium text-[#36485C] lg:block">
                        Sign in
                    </span>
                </div>  


                <Image src={Menu} alt='Menu' /> 
            </div>
        </nav>
    )
}