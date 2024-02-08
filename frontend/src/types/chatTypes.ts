export type Chat = {
    status: 'success' | 'error'
    id: string
    createdAt: string
    userPrompt: string
    response: string
}

export type ChatsResponse = {
    status: 'success' | 'error'
    data: Chat[]
}

