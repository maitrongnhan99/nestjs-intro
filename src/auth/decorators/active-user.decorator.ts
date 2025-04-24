import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { REQUEST_USER_KEY } from '../constants/auth.constants';
import { ActiveUserData } from '../interfaces/active-user-data.interface';

const ActiveUser = createParamDecorator(
  (field: keyof ActiveUserData | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const user: ActiveUserData = request[REQUEST_USER_KEY] as ActiveUserData;
    return field ? user?.[field] : user;
  },
);

export default ActiveUser;
