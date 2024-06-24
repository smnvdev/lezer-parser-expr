import { ExternalTokenizer } from "@lezer/lr";
import { range as rangeToken } from "./parser.terms.js"

const dot = 46;

export const operatorToken = new ExternalTokenizer((input, stack) => {
    if (input.next === dot) {
        if (input.peek(-1) === dot) {
            input.advance();
            input.acceptToken(rangeToken);
        } else if (input.peek(1) === dot) {
            input.advance(); input.advance();
            input.acceptToken(rangeToken);
        }
    }
}, {contextual: true});
