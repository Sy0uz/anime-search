import { IObjectInfo } from "../types/types";


export const getObjectNames = (obj:IObjectInfo[]): string => {
    if (!obj.length)
        return '...'
    let result = [];
    for (const item of obj) {
        result.push(item.name)
    }
    return result.join(', ');
}