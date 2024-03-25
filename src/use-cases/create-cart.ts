import { Book } from "../entities/book";


type CartItem = {
  item: Book;
  quantity: number;
  total: number;
};

type Cart = {
  userId: string;
  total: number;
  items: CartItem[];
};

function calculateItemTotal(cartItem: CartItem) {
  return cartItem.item.price * cartItem.quantity;
}

function calculateCartTotal(items: CartItem[]) {
  return items.reduce((total, item) => {
    return item.total + total;
  }, 0);
}

function addBook(book: Book, cart: Cart) {
  /**
   * 1. verificar se existe este livro no carrinho
   * > Para verificar, precisa verificar se o cartItem.item.isbn === book.isbn
   * 1.1: Caso sim: incrementa em 1, a quantidade do CartItem.quantity
   *   > cart.items = cart.items.map(condicao)
   * 1.2: Caso não: cria um novo CartItem e adidiona no items do carrinho
   *   > cart.items.push(novoCartItem)
   */
}

function removeBook(book: Book, cart: Cart) {
  /**
   * 1. verificar se existe este livro no carrinho
   * > Para verificar, precisa verificar se o cartItem.item.isbn === book.isbn
   * 1.1: Caso sim: decrementa em 1, a quantidade do CartItem.quantity
   *  > cart.items = cart.items.map(condicao)
   * 1.2: Caso sim e a quantidade do item for 1, remove o CartItem do Cart.
   *  > cart.items = cart.items.filter(condicao)
   * 1.3: Caso não: não faz nada
   */
}

export function createCart(token: string) {
  const cart: Cart = {
    userId: token,
    items: [],
    total: 0,
  };

  return {
    cart,
    addBook,
    removeBook,
  };
}
