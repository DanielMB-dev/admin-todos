import { getCookie, hasCookie, setCookie } from "cookies-next";

export function getCartCookie() {
    if (hasCookie('cart')) {
        const cookieCart = JSON.parse(getCookie('cart') as string ?? "{}")
        return cookieCart
    }
    return {}
}

export function setCartCookie(id: string) {
    const cookieCart = getCartCookie()
    if (cookieCart[id]) {
      cookieCart[id] += 1;
    } else {
      cookieCart[id] = 1;
    }
    setCookie('cart', JSON.stringify(cookieCart))
}

export function removeProductFromCart(id: string) {
    const cookieCart = getCartCookie();
    if (cookieCart[id]) {
        delete cookieCart[id]
    }
    setCookie("cart", JSON.stringify(cookieCart));
}

export function removeOneItemFromCart(id: string) {
    const cookieCart = getCartCookie();
    cookieCart[id] -= 1;
    if (cookieCart[id] === 0) {
        delete cookieCart[id];

        setCookie("cart", JSON.stringify(cookieCart));
    }
}

