type ResponseStatus = 'success' | 'error'

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