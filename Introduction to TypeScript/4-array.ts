
function concatArray(array: string[]): [string, number] {
    const text = array.join('');

    return [
        text,
        text.length
    ]
}



