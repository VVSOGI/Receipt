export interface LogType {
    id: string
    title: string
    description: string
    priority: 'high' | 'low'
    email: string
    commitUrl: string
}
