import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Put,
} from '@nestjs/common';
import { BraceletsService } from './bracelets.service';
import { CreateBraceletDto } from './dto/create-bracelet.dto';
import { UpdateBraceletDto } from './dto/update-bracelet.dto';
import { ParseObjectIdPipe } from 'src/utils/parse-object-id-pipe.pipe';

@Controller('bracelets')
export class BraceletsController {
  constructor(private readonly braceletsService: BraceletsService) {}

  @Post()
  create(@Body() createBraceletDto: CreateBraceletDto) {
    return this.braceletsService.create(createBraceletDto);
  }
  @Post('many')
  createMany(@Body() createBraceletDto: CreateBraceletDto[]) {
    const bracelets = this.braceletsService.createMany(createBraceletDto);
    return bracelets;
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.braceletsService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.braceletsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBraceletDto: UpdateBraceletDto,
  ) {
    return this.braceletsService.update(id, updateBraceletDto);
  }

  @Put('many')
  updateMany(@Body() updateBraceletDto: UpdateBraceletDto[]) {
    console.log(updateBraceletDto);
    const updatedBracelets =
      this.braceletsService.updateMany(updateBraceletDto);
    return updatedBracelets;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.braceletsService.remove(id);
  }
}
