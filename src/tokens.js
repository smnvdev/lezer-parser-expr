import { ExternalTokenizer } from "@lezer/lr";
import { Float } from "./parser.terms"

const _e = 101, _E = 69,
    Zero = 48, Nine = 57, Dot = 46,
    Plus = 43, Minus = 45, Underscore = 95;

const isNumber = (ch) => ch >= Zero && ch <= Nine;
const isUnderscoredNumber = (ch) => isNumber(ch) || ch === Underscore;


export const floatTokens = new ExternalTokenizer((input, stack) => {
    let isFloat = false;
    if (input.next === Dot) {
        isFloat = true;
        input.advance();
        if (input.next === Dot) return;
    }

    if (!isNumber(input.next)) return;
    while (isUnderscoredNumber(input.next)) input.advance();
    if (input.next === Dot) {
        isFloat = true;

        input.advance();
        if (isNumber(input.next)) {
            while (isUnderscoredNumber(input.next)) input.advance();
        } else if (input.next === Dot) return;
    }

    if (input.next === _e || input.next === _E) {
        isFloat = true

        input.advance();
        if (input.next === Plus || input.next === Minus) input.advance();
        if (!isUnderscoredNumber(input.next)) return;
        while (isUnderscoredNumber(input.next)) input.advance();
    }

    if (isFloat) input.acceptToken(Float);
});
