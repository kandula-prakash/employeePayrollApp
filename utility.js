const stringifyDate = (date) =>{
    const options = {day: 'numeric',month: 'short',year: 'numaric'};
    const newDate = !date ? "undefined" : new Date(date).toLocaleDateString('en-GB',options);
    return newDate;
};