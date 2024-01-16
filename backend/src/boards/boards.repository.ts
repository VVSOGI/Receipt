import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/boards.entity';
import { GetBoards } from './type/types';

interface CreateBoard extends CreateBoardDto {
  email: string;
}

@Injectable()
export class BoardsRepository {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Board) private boardsRepository: Repository<Board>,
  ) {}

  async create(createBoard: CreateBoard) {
    const board = this.boardsRepository.create({ ...createBoard });

    return await this.boardsRepository.save(board);
  }

  async getAllBoards({ page }: GetBoards) {
    const [data, total] = await this.boardsRepository.findAndCount({
      take: 30,
      skip: 30 * (page - 1),
    });

    return {
      data,
      total,
    };
  }
}
