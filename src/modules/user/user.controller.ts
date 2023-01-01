/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from 'src/submodules/backend-refresher-1.0-dtos/src/dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post()
  async createUser(@Body()user: UserDto){     // dtos -> data transfer object
     try{
  //     let createdUser = await this.userService.createUser(user);
    //   return createdUser;
    console.log("control is here",user);
     }
     catch(err){
       console.log(err);
       return err;
     } 
  }
}
