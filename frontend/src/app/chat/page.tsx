import ChatDisplay from "./ChatDisplay/ChatDisplay";
import Blob from "@/components/Blob/Blob";

const page = () => {
    return (
        <>
            <Blob left='0' transform='rotate(90deg)' />
            <ChatDisplay />
        </>
    )
}

export default page