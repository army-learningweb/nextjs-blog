export { cn } from "cn";


export const userAvatar = (name : string) : string => {
    const nameArr = [...name];
    const firstLetter = nameArr[0].toUpperCase();
    const lastLetter = nameArr[nameArr.length - 1].toUpperCase();
    return firstLetter + lastLetter;
}
