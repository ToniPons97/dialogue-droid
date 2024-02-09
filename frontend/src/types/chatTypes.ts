type ResponseStatus = 'success' | 'error'



// export type Chat = {
//     // status: ResponseStatus
//     id: string
//     createdAt: string
//     userPrompt: string
//     response: string
// }

// export type ChatsResponse = {
//     status: ResponseStatus
//     data: Chat[]
// }

// export type CreateChatResponse = {
//     status: ResponseStatus
//     data: Chat
// }

export type Chat = {
    id: string
    createdAt: string
    userPrompt: string
    response: string
}

export type ChatResponse = {
    status: ResponseStatus
    data: Chat | Chat[]
}

// export type MessagePair = {
//     status: ResponseStatus
//     messagePair: Chat
// }