import { LinkCmp } from "./link";
import { LoginCmp } from "./login";
import { ModalCmp } from "./modal";

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