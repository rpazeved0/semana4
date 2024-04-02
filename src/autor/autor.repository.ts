import { Injectable } from "@nestjs/common";
import { AutorEntity } from "./autor.entity";

@Injectable()
export class AutorRepository {
  private autores: AutorEntity[] = [];

  async salvar(dados: AutorEntity) {
    this.autores.push(dados);
    return dados;
  }

  async listarAutores() {
    return this.autores;
  }

  async buscarAutorPorId(id: string) {
    const autor = await this.buscaPorId(id);
    return autor;
  }

  private async buscaPorId(id: string) {
    const existe = this.autores.find((autor) => autor.id === id);

    if (!existe) {
      throw new Error('Autor não existe');
    }

    return existe;
  }

  async atualiza(id: string, dados: Partial<AutorEntity>) {
    const dadosNaoAtualizaveis = ['id', 'usuarioId'];
    const autor = await this.buscaPorId(id);
    Object.entries(dados).forEach(([chave, valor]) => {
      if (dadosNaoAtualizaveis.includes(chave)) {
        return;
      }
      autor[chave] = valor;
    });

    return autor;
  }

  async remove(id: string) {
    const autorRemovido = await this.buscaPorId(id);
    this.autores = this.autores.filter((autor) => autor.id !== id);
    return autorRemovido;
  }

  async emailExiste(email: string) {
    const possivelUsuario = this.autores.find(
      (autor) => autor.email === email,
    );

    return possivelUsuario !== undefined;
  }

}