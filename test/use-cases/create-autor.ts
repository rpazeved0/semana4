import { createAuthor } from "../../src/use-cases/create-author";

(() => {
    const { success, author, errors} = createAuthor({
        name: '          ',
        email: 'flavio@mail.com',
        bio: 'Flávio é especialista em front-end desde 1990',
    });
    console.log('nome vazio', {success, author, errors});
})();

(() => {
    const { success, author, errors} = createAuthor({
        name: 'Flávio Marques',
        email: 'flavio@mailcom',
        bio: 'Flávio é especialista em front-end desde 1990',
    });
    
    console.log('email vazio', {success, author, errors});
})();

(() => {
    const { success, author, errors} = createAuthor({
        name: '',
        email: 'flavio@mailcom',
        bio: 'Flávio é especialista em front-end desde 1990',
    });
    
    console.log('nome e e-mail inválidos', {success, author, errors});
})();

(() => {
    createAuthor({
        name: 'Flavio Marques',
        email: 'flavio@mail.com',
        bio: 'Flávio é especialista em front-end desde 1990',
    });

    const { success, author, errors } = createAuthor({
        name: 'Flavio Marques',
        email: 'flavio@mail.com',
        bio: 'Flávio é especialista em front-end desde 1990',
    });
    
    console.log('Autor duplicado', {success, author, errors});
})();

