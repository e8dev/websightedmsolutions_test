export interface IUser {
  id: number;
  email: string;
  role: number;
}


export interface IAxiosUserResponse {
  success: boolean;
  data: IUser;
  message: string;
}