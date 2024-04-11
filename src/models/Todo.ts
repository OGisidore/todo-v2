
export interface Todo {
    _id: string,
    name: string,
    updatedAt?: Date,
    isUpdating: false,
    createdAt?:  Date
}