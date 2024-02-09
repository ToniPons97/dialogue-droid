import ChatPanel from "./ChatPanel/ChatPanel";
import Blob from "@/components/Blob/Blob";

const page = () => {
    return (
        <>
            <Blob left='0' transform='rotate(90deg)' />
            <ChatPanel />
        </>
    )
}

export default page