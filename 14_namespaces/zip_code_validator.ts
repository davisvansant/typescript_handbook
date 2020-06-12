/// <reference path="validation.ts" />

namespace Validation {
  const numbersRegexp = /^[0-9]+$/;
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numbersRegexp.test(s);
    }
  }
}
