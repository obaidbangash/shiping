export function setItemToLocalStorage(name, value) {
    return localStorage.setItem(name, value)
}

export function getItemFromLocalStorage(name) {
    return localStorage.getItem(name) === 'null' ? null : localStorage.getItem(name)
}

export function removeItemFromLocalStorage(name) {
    return localStorage.removeItem(name)
}