export interface IUser {
    id: string;
    name: string;
    username: string;
    imageUrl?: string;
}

export interface IUserId extends IUser {
    createdAt: string;
}


// TIPAGEM PARA REGISTRAR UM NOVO USUARIO:

export interface IAuthRegister {
    name: string;
    username: string;
    password: string;
    imageUrl?: string;
}

export interface IAuthRegisterResponse {
    user: IUserId;
    token: string;
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

// TIPAGEM PARA SEGUIR USUARIO (FOLLOWERS)
export interface IFollowUser {
    userId: string;
}

// TIPAGEM PARA LISTAR SEGUIDORES
export interface IUserBasic {
    id: string,
    name: string,
    username: string
    imageUrl?: string;
}

export interface IGetFollowers {
    followers: IUserBasic[];
    following: IUserBasic[];
}