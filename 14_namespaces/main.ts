/// <reference path="validation.ts" />
/// <reference path="letters_only_validator.ts" />
/// <reference path="zip_code_validator.ts" />

let strings = [ "Hello", "98052", "101" ];
let validators: { [s: string]: Validation.StringValidator; } = {};

validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

for (let s of strings) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s);
    console.log(`'${ s }' ${ isMatch? " matches" : "does not match" } '${ name }'.`);
  }
}
