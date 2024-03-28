import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
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
  getAllBoards(@Query('page') page = 1) {
    if (page <= 0) {
      throw new BadRequestException('Invalid page');
    }

    return this.boardsService.getAllBoards({ page });
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string) {
    return this.boardsService.getBoardById(id);
  }
}
