

export interface IUser {
    id: string;
    name: string;
    username: string;
    imageUrl?: string;
}

export interface ICreateUpdate extends IUser {
    createdAt: string;
    updatedAt: string;
}


// TIPAGEM PARA REGISTRAR UM NOVO USUARIO:

export interface IAuthRegister {
    name: string;
    username: string;
    password: string;
    imageUrl?: string;
}

export interface IAuthRegisterResponse {
    success: boolean;
    message: string;
    data: ICreateUpdate;
}

//TIPAGEM PARA FAZER LOGIN

export interface IAuthLogin {
    username: string;
    password: string;
}

export interface IAuthLoginResponse {
    success: boolean;
    message: string;
    data : {
        authToken: string,
        authUser: IUser;
    }
}
