import { add, sub } from "date-fns";
import { createBook } from "../../src/use-cases/create-book"
import { createAuthor } from "../../src/use-cases/create-author";
import { listBooks } from "../../src/use-cases/list-books";
import { createCategory } from "../../src/use-cases/create-category";

(() => {
    const books = listBooks();
    console.log('Lista livros cadastrados esta vazia', books)
})();

(() => {
    const { author } =  createAuthor({
        bio: 'lorem ipsum lorem ipsum lorem ipsum',
        email: 'rafael.ip@ipsum.com',
        name: 'Lorem Ipsum'
    });

    const { category } = createCategory({ name: 'Programação Reativa' })

    createBook({
        title: 'Estruturas de Dados',
        categorySlug: category!.slug,
        except: 'As estruturas de dados são a base para a construção de algoritmos eficientes que possibilitam a construção sistemas computacionais de alta performance. Elas permitem o armazenamento e manipulação de dados e são essenciais para a solução de problemas complexos em diversas áreas em evidência: inteligência artificial, processamento de imagens, ciência de dados, Machine Learning e Engenharia de Software. ',
        isbn: '978-85-5519-338-5',
        pages: 320,
        publicationDate: add(new Date(), { days: 3 }),
        price: 89.90,
        summary: 'Neste livro, Thiago Leite desmistifica as estruturas de dados clássicas, que são apresentadas nas principais linguagens do mercado: C, Java, C#, Python e JavaScript. Do básico ao avançado, você conhecerá conceitos e práticas de cada ED de forma objetiva, com exercícios e resoluções para complementar seu aprendizado. Com esse conhecimento, você saberá escolher quais as estruturas de dados mais adequadas e eficientes para cada contexto específico no seu dia a dia em desenvolvimento de software e assim conseguirá criar a melhor solução para seus problemas. ',
        authorId: author!.id,
    });

    const books = listBooks();

    console.log('Lista livros cadastrados', books)
})();