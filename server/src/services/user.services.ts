import UserModel, { User } from '~/models/schemas/user.schema';

class UsersService {
  async createUser(user: User) {
    return await UserModel.create(user);
  }

  async getUsers() {
    return UserModel.find();
  }
}

const usersService = new UsersService();
export default usersService;
