import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';
import { BoardsRepository } from './boards.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { CreateBoard } from './type/types';

@Injectable()
export class BoardsService {
  constructor(
    private boardsRepository: BoardsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async createBoard(createBoard: CreateBoard) {
    const user = await this.usersRepository.findUserById(createBoard.userId);
    const { email } = user;

    return this.boardsRepository.create({ ...createBoard, email });
  }

  getAllBoards() {
    return this.boardsRepository.getAllBoards();
  }
}
