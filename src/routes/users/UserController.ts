import {
  Path,
  Query,
  Controller,
  Get,
  Route,
  SuccessResponse,
} from '@tsoa/runtime';
import { StatusCodes } from 'http-status-codes';
import { Tags } from 'tsoa';
import UserInfo from '../../database/models/UserInfoModel'; // Make sure to import your model

export interface ISetUserInfoBody {
  id?: number;
  email: string;
  name: string;
  password: string;
  profileImgUrl?: string;
}
export type ISetUserInfoResponse = boolean;

@Route('v1/users')
@Tags('Users')
class UserController extends Controller {
  @Get('{userId}')
  @SuccessResponse(StatusCodes.CONFLICT)
  public async getUser(
    @Path() id: number,
    @Query() email?: string,
  ): Promise<ISetUserInfoResponse | Error> {
    try {
      // Query your database or perform any other logic
      const res = await UserInfo.findOne({
        where: { id, email },
      });

      if (res) {
        //const { userId, email, name, password, profileImgUrl } = res;
        // Process the retrieved data as needed
        // ...

        return true; // Return the appropriate response
      } else {
        // Handle the case when no user is found
        // ...
        return false;
      }
    } catch (error) {
      // Handle any errors (e.g., database connection issues)
      // ...
      throw new Error('An error occurred while fetching user data.');
    }
  }
}

export default UserController;
