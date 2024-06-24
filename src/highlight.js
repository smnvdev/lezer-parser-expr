import {styleTags, tags as t} from "@lezer/highlight"

export const exprHighlighting = styleTags({
  "let": t.definitionKeyword,

  Number: t.number,
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
  VarDecl: t.definition(t.variableName),
  "CallExpr/VariableName": t.function(t.variableName),

  LineComment: t.lineComment,
  BlockComment: t.blockComment,

  Pointer: t.atom,

  ". ?.": t.derefOperator,
  "=": t.definitionOperator,
  "; ,": t.separator,
  ".. :": t.punctuation,
  "( )": t.paren,
  "[ ]": t.squareBracket,
  "{ }": t.brace,
})
