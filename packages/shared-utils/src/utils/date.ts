export const getTomorrow = () => 
    new Date(((new Date()).getDate() + 1)).toISOString();