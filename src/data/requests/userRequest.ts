export interface UserRequest {
    token: string,
    provider: string,
    langID: string
};

export interface UserCreateRequest{
    userName: string,
    name: string,
    email: string,
    provider: string,
    langID: string
};