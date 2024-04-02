import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

import { EmailUnico } from "../validacoes/emailUnico.validator";
export class CriaAutorDTO {
  id: string;

  @IsNotEmpty({ message: 'Preencha o nome do autor.' })
  nome: string;

  @IsEmail(undefined, { message: 'Preencha um e-mail válido.' })
  @EmailUnico({ message: 'E-mail já cadastrado.' })
  email: string;

  @IsNotEmpty({ message: 'Preencha o campo biografia.' })
  @MinLength(100, { message: 'O campo biografia necessita ter no mínimo 100 caracteres' })
  @MaxLength(500, { message: 'O campo biografia necessita ter no máximo 500 caracteres' })
  biografia: string;

  data: Date;
}