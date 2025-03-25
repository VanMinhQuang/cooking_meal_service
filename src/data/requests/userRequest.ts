export interface UserRequest {
    token: string,
    provider: string,
    langID: string
};

export interface UserCreateRequest{
    userName: string,
    password: string,
    name: string,
    email: string,
    provider: string,
    langID: string
};