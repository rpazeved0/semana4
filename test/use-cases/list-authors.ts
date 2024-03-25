import { createAuthor } from "../../src/use-cases/create-author";
import { listAuthors } from "../../src/use-cases/list-authors";

(() => {
    const authors = listAuthors();
    console.log('repositorio vazio', authors);
})();

(() => {
    createAuthor({
        name: 'Flavio Marques',
        email: 'flavio@mail.com',
        bio: 'Flávio é especialista em front-end desde 1990',
    });
    const authors = listAuthors();
    console.log('repositorio com autor cadastrado', authors);
})();

(() => {
    createAuthor({
        name: 'Flavio Marques',
        email: 'flavio@mail.com',
        bio: 'Flávio é especialista em front-end desde 1990',
    });

    createAuthor({
        name: 'Flavio Marques',
        email: 'flavio@mail.com',
        bio: 'Flávio é especialista em front-end desde 1990',
    });
    
    const authors = listAuthors();
    console.log('repositorio com autor cadastrado', authors);
})();

