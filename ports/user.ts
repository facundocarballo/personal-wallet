import {User} from '../domain/user';

export interface UserRepository {
    Create(user: User): Promise<User|undefined>
    Get(id: number): Promise<User|undefined>
}

