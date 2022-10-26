export const checkInputs = (...string:string[]):boolean => {
  let result: boolean = string.every(el => {
    return el.trim() === ""
  });
  return result
}