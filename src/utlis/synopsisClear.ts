export const synopsisClear = (str: string):string => {
    if (!str) return 'Synopsis is empty...'
    return str.replace('[Written by MAL Rewrite]','');
}