import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createBoard(@Request() req, @Body() createBoardDto: CreateBoardDto) {
    const { id: userId, email } = req.user;
    return this.boardsService.createBoard({ userId, email, ...createBoardDto });
  }

  @Get()
  getAllBoards() {
    return this.boardsService.getAllBoards();
  }
}
