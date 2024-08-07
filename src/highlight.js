import { styleTags, tags as t } from "@lezer/highlight";

export const exprHighlighting = styleTags({
  "let": t.definitionKeyword,

  Integer: t.integer,
  Float: t.float,
  String: t.string,
  Bool: t.bool,
  Nil: t.null,

  "and or not in contains startsWith endsWith matches": t.operatorKeyword,
  LogicOp: t.logicOperator,
  ArithmeticOp: t.arithmeticOperator,
  CompareOp: t.compareOperator,
  "|": t.controlOperator,

  FieldName: t.propertyName,
  VarName: t.variableName,
  DefName: t.local(t.variableName),
  "PointerSelectorExpr/.": t.derefOperator,
  "CallExpr/VarName": t.function(t.variableName),
  "CallExpr/*/FieldName": t.function(t.propertyName),

  LineComment: t.lineComment,
  BlockComment: t.blockComment,

  Pointer: t.atom,

  "=": t.definitionOperator,
  "; ,": t.separator,
  ". ?. .. :": t.punctuation,
  "( )": t.paren,
  "[ ]": t.squareBracket,
  "{ }": t.brace,
})
