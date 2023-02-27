import { Link } from "react-router-dom";
import { LinkCmp } from "./link/link";
import { LoginCmp } from "./login/login";
import { ModalCmp } from "./modal/modal";

export const AllCmps = () => {
    return (

        <>
             <div>
                <LinkCmp page="/aboutus"> About Us</LinkCmp>
               
               <span> <Link to="/aboutus">About</Link></span>

            </div>
            <div>
                <ModalCmp />
            </div>
            <div>
                <LoginCmp />
            </div> 
        </>
    )
}