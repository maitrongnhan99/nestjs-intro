import { Injectable } from '@nestjs/common';
import { User } from './users.type';

const users: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'Password123!',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    password: 'Password123!',
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@example.com',
    password: 'Password123!',
  },
  {
    id: 4,
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@example.com',
    password: 'Password123!',
  },
  {
    id: 5,
    firstName: 'Robert',
    lastName: 'Wilson',
    email: 'robert.wilson@example.com',
    password: 'Password123!',
  },
  {
    id: 6,
    firstName: 'Sarah',
    lastName: 'Brown',
    email: 'sarah.brown@example.com',
    password: 'Password123!',
  },
  {
    id: 7,
    firstName: 'David',
    lastName: 'Miller',
    email: 'david.miller@example.com',
    password: 'Password123!',
  },
  {
    id: 8,
    firstName: 'Jennifer',
    lastName: 'Taylor',
    email: 'jennifer.taylor@example.com',
    password: 'Password123!',
  },
  {
    id: 9,
    firstName: 'James',
    lastName: 'Anderson',
    email: 'james.anderson@example.com',
    password: 'Password123!',
  },
  {
    id: 10,
    firstName: 'Lisa',
    lastName: 'Thomas',
    email: 'lisa.thomas@example.com',
    password: 'Password123!',
  },
];

@Injectable()
export class UsersService {
  getUsers(): User[] {
    return users;
  }

  public createUser(user: User): User {
    users.push(user);
    return user;
  }

  public getUser(id: number): User | null {
    const user = users.find((user) => user.id === id);
    if (!user) {
      return null;
    }
    return user;
  }
}
