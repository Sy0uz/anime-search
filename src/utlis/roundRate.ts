export const roundRate = (rate:number):string => {
    if (!rate) return '0.0';
    
    const result:string = rate.toFixed(1);

    if (result.length === 1) return `${rate}.0`
    else return result;
}