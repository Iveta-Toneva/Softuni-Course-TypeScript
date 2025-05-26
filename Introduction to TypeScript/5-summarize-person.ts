
function summarizePerson(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
): [number, string, number, string, string] {
    const fullName: string = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    const hobbiesString = hobbies && hobbies.length > 0 ? hobbies.join(', ') : '-';
    const workInfoString = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-';
    return [
        id,
        fullName,
        age,
        hobbiesString,
        workInfoString
    ]
}

