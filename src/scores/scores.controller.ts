import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { Score } from './score.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('user', 'admin')
  @Post()
  async create(@Body() createScoreDto: Score) {
    return this.scoresService.create(createScoreDto);
  }

  @Get('/leaderboard')
  async findTop10() {
    return this.scoresService.findTop10();
  }
}
