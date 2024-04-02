
import { CategoriaRepository } from "./categoria.repository";
import { CriaCategoriaDTO } from "./dto/CriaCategoria.dto";
import { CategoriaEntity } from "./categoria.entity";
import { ListaCategoriaDTO } from "./dto/ListaCategoria.dto";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { v4 as uuid } from 'uuid';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaRepository: CategoriaRepository) { }

  @Post()
  async criar(@Body() dados: CriaCategoriaDTO) {
    const categoriaEntity: CategoriaEntity = new CategoriaEntity();
    categoriaEntity.id = uuid();
    categoriaEntity.nome = dados.nome;

    this.categoriaRepository.salvar(categoriaEntity);

    return {
      categoria: new ListaCategoriaDTO(categoriaEntity.id, categoriaEntity.nome),
      messagem: 'Categoria criada com sucesso',
    };

  }

  @Get()
  async listaCategoria() {
    const categorias = await this.categoriaRepository.listarCategorias();
    const categoriasLista = categorias.map(
      (categoria) => new ListaCategoriaDTO(categoria.id, categoria.nome),
    );

    return categoriasLista;
  }
}