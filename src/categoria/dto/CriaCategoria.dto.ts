import { IsNotEmpty, IsString } from "class-validator";

export class CriaCategoriaDTO {
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'A categoria não pode ser vazia.' })
  nome: string;
}