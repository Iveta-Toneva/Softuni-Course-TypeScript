enum DaysOfTheWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function printDayNumber(day: string): void {
    console.log(DaysOfTheWeek[day as keyof typeof DaysOfTheWeek] || 'error');
}



