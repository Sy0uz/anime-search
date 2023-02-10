export const getDateFromString = (innerDate: string): string => {
    if (!innerDate)
        return 'Ongoing'
    const date = new Date(innerDate)
    return date.toLocaleDateString();
}