import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './dto/produtos.model';
import { ProdutosService } from './produtos.service';
@Controller('produtos')
export class ProdutosController {
  constructor(private produtoService: ProdutosService) {}
  @Get()
  getAll(): Produto[] {
    return this.produtoService.getAll();
  }
  @Get(':id')
  getOne(@Param() params): Produto {
    return this.produtoService.getOne(2);
  }
  @Post('add')
  create(@Body() produto: Produto): void {
    produto.id = 100;
    this.produtoService.create(produto);
  }
  @Put('change')
  change(@Body() produto: Produto): Produto {
    return this.produtoService.change(produto);
  }
  @Delete(':id')
  delete(@Param() params): void {
    this.produtoService.delete(2);
  }
}
