/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from 'src/submodules/backend-refresher-1.0-dtos/src/dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')     // .   localhost:3000/user or localhost:3000/user/fetch
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body()user: UserDto){     // dtos -> data transfer object
     try{
       let createdUser = await this.userService.createUser(user);
       return createdUser;
     }
     catch(err){
       console.log(err);
       return err;
     } 
  }

  @Get()
  async findUser(){
    try{
      let fetchedUser = await this.userService.findAll();
      return fetchedUser;
    }
    catch(err){
      console.log(err);
      return err;
    }
  }

  @Put()
  async updateUser(@Body()user: UserDto){
     try{
      let updateResult = await this.userService.updateUser(user);
      return updateResult;
     }
     catch(err){
      console.log(err);
      return err;
     }

  }

  @Delete(':id')
  async deleteUser(@Param('id')userId: number){
    try{
      let deletedUser = await this.userService.deleteUser(userId);
      return deletedUser;
    }
    catch(err){
      console.log(err);
      return err;
    }
  }

}