import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  UseGuards,
  Request,
  Param,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { UpdateUserPermissionDto } from 'src/users/dto/permission-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async profile(@Request() req) {
    const requestUserId = req.user.id;
    return this.authService.profile(requestUserId);
  }

  @Patch('permission/:id')
  @UseGuards(JwtAuthGuard)
  async updatePermission(
    @Request() req,
    @Param('id') id: string,
    @Body() updateUserPermissionDto: UpdateUserPermissionDto,
  ) {
    const requestUserId = req.user.id;
    await this.authService.adminCheck(requestUserId);
    return this.authService.updatePermission({
      id,
      ...updateUserPermissionDto,
    });
  }

  // accessToken이 만료되었을 때, refreshToken을 이용한 재 발급 컨트롤러
  @Get('refresh/:id')
  @UseGuards(JwtAuthGuard)
  async refresh(@Request() req, @Param('id') id: string) {
    if (req.user.id !== id) {
      Logger.error(
        '[AuthController] Not matched user id in refresh token controller',
      );
      throw new BadRequestException('Invalid user');
    }
    return this.authService.refresh(id);
  }
}
