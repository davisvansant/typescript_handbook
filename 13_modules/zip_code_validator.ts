import { StringValidator } from "./string_validator";

export const numberRegexp = /^[0-9]+S/;

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

// export { ZipCodeValidator };
export {ZipCodeValidator as mainValidator };
