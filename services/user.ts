import { User } from "../domain/user";
import { UserRepository } from "../ports/user";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async Create(user: User): Promise<User | undefined> {
    return await this.userRepository.Create(user);
  }

  async Get(id: number): Promise<User | undefined> {
    return await this.userRepository.Get(id);
  }
}
