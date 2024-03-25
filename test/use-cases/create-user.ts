import { createUser } from "../../src/use-cases/create-user";

(() => {
    const { success, user , errors} = createUser({
        firstName: 'Flavio',
        lastName: 'Almeida',
        phone: '(21) 12345-6789',
        cpf: '123.456.789-10',
        email: 'flavio.almeida@mail.com',
        address: {
            country: 'Brazil',
            state: 'Rio de Janeiro',
            city: 'Rio de Janeiro',
            neighborhood: 'Copacabana',
            street: 'Não sei',
            number: '123',
            complement: 'Perto da praia',
            zipCode: '12345-123',
        }
    });
    console.log('Cadastra user sem errors', {success, user, errors});
})();

(() => {
    const { success, user , errors} = createUser({
        firstName: 'Flavio',
        lastName: 'Almeida',
        phone: '(21) 12345-6789',
        cpf: '123.456.789-10',
        email: 'flavio.almeidamail.com',
        address: {
            country: 'Brazil',
            state: 'Rio de Janeiro',
            city: 'Rio de Janeiro',
            neighborhood: 'Copacabana',
            street: 'Não sei',
            number: '123',
            complement: 'Perto da praia',
            zipCode: '12345-123',
        }
    });
    console.log('user com e-mail inválido', {success, user, errors});
})();

(() => {
    const { success, user , errors} = createUser({
        firstName: 'Flavio',
        lastName: 'Almeida',
        phone: '(21) 12345-6789',
        cpf: '123.456.78910-',
        email: 'flavio.almeida@mail.com',
        address: {
            country: 'Brazil',
            state: 'Rio de Janeiro',
            city: 'Rio de Janeiro',
            neighborhood: 'Copacabana',
            street: 'Não sei',
            number: '123',
            complement: 'Perto da praia',
            zipCode: '12345-123',
        }
    });
    console.log('user com cpf inválido', {success, user, errors});
})();