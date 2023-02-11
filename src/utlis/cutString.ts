export const cutString = (str: string, length: number):string => {
    if(length >= str.length) return str;
    return str.slice(0, length) + '...';
}