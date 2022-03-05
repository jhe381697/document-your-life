export function removeItem(itemToRemove){
    window.localStorage.removeItem(itemToRemove)
}
export function getItem(getItem) {
    return window.localStorage.getItem(getItem)
}
export function addItem(localeStorageName, newItem) {
    window.localStorage.setItem(localeStorageName, newItem)
}