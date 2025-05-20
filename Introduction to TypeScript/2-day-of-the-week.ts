enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function printDay(day: number): void {
    console.log(Days[day] || 'error');
}





