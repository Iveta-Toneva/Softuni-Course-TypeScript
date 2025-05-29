
function guard(input: unknown): input is string[] {

    if (Array.isArray(input) && input.every(el => typeof el === 'string')) {
        return true;
    }

    return false;
}

