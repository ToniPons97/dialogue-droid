'use client'
import apiClient from "@/clients/api-client"
import { useEffect } from "react"

const page = () => {

    useEffect(() => {
        apiClient.get('/')
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    }, []);


    return (
        <div>page</div>
    )
}

export default page