/**
 * 
 * @param {axios log status 200 === true, 200 !== false} response 
 * @returns bool
 */
export default function axiosLogStatusBool(response) {
    if (response === 200) {
        return true
    } else if (response !== 200) {
        return false
    }
}