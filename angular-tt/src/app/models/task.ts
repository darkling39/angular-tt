export interface ITask{
    id: string | number,
    date: Date,
    hours: number,
    message: string,
    done: boolean
}