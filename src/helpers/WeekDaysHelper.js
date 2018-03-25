export const getLongWeekName = (short) => {

    const weekdays = {
        'mon': 'Monday',
        'tue': 'Tuesday',
        'wed': 'Wednesday',
        'thu': 'Thursday',
        'fri': 'Friday',
        'sat': 'Saturday',
        'sun': 'Sunday'
    }

    return weekdays[short.toLowerCase()];

}