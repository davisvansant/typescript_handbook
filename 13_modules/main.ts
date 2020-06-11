/// <reference path="node.d.ts"/>

import { mainValidator as another_zip_code_validator } from "./zip_code_validator";
import { RegExpBasedZipCodeValidator } from "./parse_int_based_zip_code_validator";
import * as something from "./zip_code_validator";
import "./all_validators";

import * as URL from "url";

// let my_validator = new mainValidator();
// console.log(my_validator);

let my_validator = new another_zip_code_validator();
console.log(my_validator);

let another_validator = new something.ZipCodeValidator();
console.log(another_validator);

let my_url = URL.parse("http://www.typescriptlang.org");
console.log(my_url);
