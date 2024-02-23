export function countWorkingDays({startDate, endDate}:{
    startDate: Date
    endDate: Date
}) {
    
    let days = 0;
    let date = new Date(startDate);
    while (date <= endDate) {
        if (date.getDay() !== 5 && date.getDay() !== 6) {
            days++;
        }
        date.setDate(date.getDate() + 1);
    }
    return days
}