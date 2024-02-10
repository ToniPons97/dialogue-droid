type ResponseStatus = 'success' | 'error'

export type Chat = {
    id: string
    createdAt: string
    userPrompt: string
    response: string
    favorite: boolean
}

// export type MessagePairProps = {
//     userPrompt: string
//     response: string
//     date: string
//     id: string
// }

export type ChatResponse = {
    status: ResponseStatus
    data: Chat | Chat[]
}