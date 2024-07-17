export interface IGetAllUserBody {
  id?: number;
  email: string;
  name: string;
  password: string;
  profileImgUrl?: string;
}

export interface IUpdateUserBody {
  id?: number;
  email: string;
  name: string;
  password: string;
  profileImgUrl?: string;
}

export interface ICreateNewUserBody {
  email: string;
  name: string;
  password: string;
  profileImgUrl?: string;
}

export interface IDeleteUserBody {
  userId: number;
}
