import { LinkCmp } from "./link/link";
import { LoginCmp } from "./login/login";
import { ModalCmp } from "./modal/modal";

export const AllCmps = () => {
    return (

        <>
            <div>
                <LinkCmp page="http://www.facebook.com"> Facebook</LinkCmp>
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