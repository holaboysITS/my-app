export enum Role {
    ADMIN = 'admin',
    OPERATOR = 'operator'
}

export interface UserResponse {
    username: string,
    role: Role
}
