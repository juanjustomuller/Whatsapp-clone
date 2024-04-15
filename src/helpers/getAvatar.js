export const getAvatar = (email) => {
    const array = email.split("")
    const first = array[0].charCodeAt(0) - 65;
    return String(first)[0]
}

//para que elija un avatar aleatorio a cada usuario q entre 