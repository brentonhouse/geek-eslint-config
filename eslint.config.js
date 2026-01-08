import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import promisePlugin from 'eslint-plugin-promise';
import jsoncPlugin from 'eslint-plugin-jsonc';

const baseConfig = {
	languageOptions: {
		ecmaVersion: 2019,
		sourceType: `module`,
		parserOptions: {
			ecmaFeatures: { modules: true },
		},
		globals: {
			...globals.es2019,
			...globals.node,
			describe: `readonly`,
			it:       `readonly`,
			after:    `readonly`,
			done:     `readonly`,
		},
	},
	plugins: {
		import: importPlugin,
		jsdoc: jsdocPlugin,
		promise: promisePlugin,
		jsonc: jsoncPlugin,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: [
					`.js`,
					`.json`,
				],
			},
		},
		'import/extensions': [
			`.js`,
			`.jsx`,
		],
	},
	rules: {
		// Require getter/setter pairs.
		'accessor-pairs': `error`,
		// Enforce spacing inside array brackets.
		'array-bracket-spacing': [
			`error`,
			`always`,
			{
				arraysInArrays:  false,
				objectsInArrays: false,
			},
		],
		// Require return statements in array callbacks.
		'array-callback-return': `error`,
		// Enforce parentheses around arrow params.
		'arrow-parens': [
			`error`,
			`as-needed`,
		],
		// Require spacing around arrow tokens.
		'arrow-spacing': [
			`error`,
		],
		// Require var declarations in proper scope.
		'block-scoped-var': `error`,
		// Require spacing inside single-line blocks.
		'block-spacing': `error`,
		// Enforce consistent brace style.
		'brace-style': [
			`error`,
			`1tbs`,
			{ allowSingleLine: true },
		],
		// Enforce camelcase naming convention.
		'camelcase': [
			`off`,
			{ properties: `never` },
		],
		// Require trailing commas in multiline.
		'comma-dangle': [
			`error`,
			{
				arrays:    `always-multiline`,
				exports:   `always-multiline`,
				functions: `ignore`,
				imports:   `always-multiline`,
				objects:   `always-multiline`,
			},
		],
		// Enforce spacing around commas.
		'comma-spacing': [
			`error`,
			{
				after:  true,
				before: false,
			},
		],
		// Enforce comma placement style.
		'comma-style': [
			`error`,
			`last`,
		],
		// Disallow spaces in computed properties.
		'computed-property-spacing': [
			`error`,
			`never`,
		],
		// Require curly braces for all control blocks.
		'curly': [
			`error`,
			`all`,
		],
		// Enforce consistent dot location.
		'dot-location': [
			`error`,
			`property`,
		],
		// Prefer dot notation where possible.
		'dot-notation': [
			`off`,
			{ allowKeywords: true },
		],
		// Require default case in switch.
		'default-case': `error`,
		// Require newline at end of files.
		'eol-last': `error`,
		// Require strict equality operators.
		'eqeqeq': `error`,
		// Enforce consistent function style.
		'func-style': [
			`error`,
			`declaration`,
			{ allowArrowFunctions: true },
		],
		// Enforce consistent paren newlines.
		'function-paren-newline': [
			`error`,
			`consistent`,
		],
		// Enforce spacing around generator star.
		'generator-star-spacing': `error`,
		// Require identifiers to match a pattern.
		'id-match': `error`,
		// Enforce consistent indentation.
		'indent': [
			`error`,
			`tab`,
			{
				SwitchCase:         1,
				FunctionExpression: { body: 1 },
			},
		],
		// Validate JSDoc examples.
		'jsdoc/check-examples': `warn`,
		// Validate JSDoc param names.
		'jsdoc/check-param-names': `warn`,
		// Validate JSDoc tag names.
		'jsdoc/check-tag-names': `warn`,
		// Validate JSDoc type syntax.
		'jsdoc/check-types': `warn`,
		// Control newline after JSDoc descriptions.
		'jsdoc/newline-after-description': `off`,
		// Disallow undefined types in JSDoc.
		'jsdoc/no-undefined-types': `warn`,
		// Require JSDoc descriptions.
		'jsdoc/require-description': [
			`warn`,
			{
				descriptionStyle: `any`,
				exemptedBy:       [],
		  },
		],
		// Require sentence-style JSDoc descriptions.
		'jsdoc/require-description-complete-sentence': `warn`,
		// Require JSDoc examples.
		'jsdoc/require-example': `off`,
		// Require hyphen before JSDoc param descriptions.
		'jsdoc/require-hyphen-before-param-description': `warn`,
		// Require JSDoc @param tags.
		'jsdoc/require-param': `warn`,
		// Require descriptions for JSDoc params.
		'jsdoc/require-param-description': `warn`,
		// Require names in JSDoc params.
		'jsdoc/require-param-name': `warn`,
		// Require types in JSDoc params.
		'jsdoc/require-param-type': `warn`,
		// Require JSDoc @returns tags.
		'jsdoc/require-returns': `warn`,
		// Ensure @returns matches function returns.
		'jsdoc/require-returns-check': `warn`,
		// Require descriptions for JSDoc returns.
		'jsdoc/require-returns-description': `warn`,
		// Require types in JSDoc returns.
		'jsdoc/require-returns-type': `warn`,
		// Enforce valid JSDoc types.
		'jsdoc/valid-types': `warn`,
		// Enforce quote style in JSX attributes.
		'jsx-quotes': `error`,
		// Enforce spacing around object keys.
		'key-spacing': [
			`error`,
			{ multiLine: { align: `value` } },
		],
		// Enforce spacing around keywords.
		'keyword-spacing': [
			`error`,
		],
		// Enforce consistent linebreak style.
		'linebreak-style': [
			`off`,
			`unix`,
		],
		// Require or disallow lines around comments.
		'lines-around-comment': [
			`error`,
			{ beforeBlockComment: false },
		],
		// Limit nesting depth.
		'max-depth': [
			`warn`,
			5,
		],
		// Limit nested callback depth.
		'max-nested-callbacks': `error`,
		// Limit statements per line.
		'max-statements-per-line': [
			`error`,
			{ max: 2 },
		],
		// Require parentheses for constructor calls.
		'new-parens': `error`,
		// Disallow alert/confirm/prompt.
		'no-alert': `error`,
		// Disallow Array constructors.
		'no-array-constructor': `error`,
		// Disallow Buffer constructors.
		'no-buffer-constructor': `error`,
		// Disallow lexical declarations in case clauses.
		'no-case-declarations': `off`,
		// Disallow shadowing in catch clauses.
		'no-catch-shadow': `off`,
		// Disallow assignments in conditions.
		'no-cond-assign': `off`,
		// Disallow confusing arrow syntax.
		'no-confusing-arrow': `error`,
		// Disallow console statements.
		'no-console': `off`,
		// Disallow control characters in regex.
		'no-control-regex': `off`,
		// Disallow constant conditions.
		'no-constant-condition': `off`,
		// Disallow debugger statements.
		'no-debugger': `warn`,
		// Disallow ambiguous regex division.
		'no-div-regex': `error`,
		// Disallow duplicate imports.
		'no-duplicate-imports': `error`,
		// Disallow empty blocks.
		'no-empty': `warn`,
		// Disallow null comparisons.
		'no-eq-null': `error`,
		// Disallow eval.
		'no-eval': `error`,
		// Disallow unnecessary bind calls.
		'no-extra-bind': `error`,
		// Disallow fallthrough in switch.
		'no-fallthrough': `error`,
		// Disallow floating decimal points.
		'no-floating-decimal': `error`,
		// Disallow assignment to globals.
		'no-global-assign': `error`,
		// Disallow implicit global declarations.
		'no-implicit-globals': `error`,
		// Disallow implied eval.
		'no-implied-eval': `error`,
		// Disallow declarations in nested blocks.
		'no-inner-declarations': `off`,
		// Disallow __iterator__.
		'no-iterator': `error`,
		// Disallow labels that share variable names.
		'no-label-var': `error`,
		// Disallow labeled statements.
		'no-labels': `error`,
		// Disallow unnecessary nested blocks.
		'no-lone-blocks': `error`,
		// Disallow lone if in else.
		'no-lonely-if': `error`,
		// Disallow function declarations in loops.
		'no-loop-func': `error`,
		// Disallow multiline strings.
		'no-multi-str': `error`,
		// Disallow mixed spaces and tabs.
		'no-mixed-spaces-and-tabs': `off`,
		// Limit multiple empty lines.
		'no-multiple-empty-lines': [
			`error`,
			{ max: 2 },
		],
		// Disallow Function constructors.
		'no-new-func': `error`,
		// Disallow Object constructors.
		'no-new-object': `error`,
		// Disallow new require().
		'no-new-require': `error`,
		// Disallow primitive wrapper objects.
		'no-new-wrappers': `error`,
		// Disallow octal literals.
		'no-octal': `off`,
		// Disallow __dirname and __filename concatenation.
		'no-path-concat': `error`,
		// Disallow __proto__.
		'no-proto': `error`,
		// Disallow specified global identifiers.
		'no-restricted-globals': `error`,
		// Disallow specified import paths.
		'no-restricted-imports': `error`,
		// Disallow specified modules.
		'no-restricted-modules': `error`,
		// Disallow specified syntax.
		'no-restricted-syntax': `error`,
		// Disallow javascript: URLs.
		'no-script-url': `error`,
		// Disallow self comparisons.
		'no-self-compare': `error`,
		// Disallow comma operator.
		'no-sequences': `error`,
		// Disallow shadowing restricted names.
		'no-shadow-restricted-names': `error`,
		// Disallow spacing in function calls.
		'no-spaced-func': `error`,
		// Disallow template braces in strings.
		'no-template-curly-in-string': `error`,
		// Disallow this before super().
		'no-this-before-super': `error`,
		// Disallow trailing whitespace.
		'no-trailing-spaces': [
			`error`,
			{ skipBlankLines: false },
		],
		// Disallow undefined variables.
		'no-undef': `error`,
		// Disallow initializing to undefined.
		'no-undef-init': `error`,
		// Disallow dangling underscores in identifiers.
		'no-underscore-dangle': `off`,
		// Disallow unmodified loop conditions.
		'no-unmodified-loop-condition': `error`,
		// Disallow unnecessary ternaries.
		'no-unneeded-ternary': `error`,
		// Disallow unused expressions.
		'no-unused-expressions': [
			`warn`,
			{
				allowShortCircuit: true,
				allowTernary:      true,
			},
		],
		// Disallow unreachable code.
		'no-unreachable': `error`,
		// Disallow unused variables.
		'no-unused-vars': [
			`warn`,
			{ varsIgnorePattern: `^on[A-Z]` },
		],
		// Disallow unnecessary computed keys.
		'no-useless-computed-key': `error`,
		// Disallow unnecessary string concatenation.
		'no-useless-concat': `error`,
		// Disallow unnecessary constructors.
		'no-useless-constructor': `error`,
		// Require let/const instead of var.
		'no-var': `error`,
		// Disallow void operator.
		'no-void': `error`,
		// Disallow whitespace before properties.
		'no-whitespace-before-property': `error`,
		// Disallow with statements.
		'no-with': `error`,
		// Enforce consistent newlines in braces.
		'object-curly-newline': [
			`error`,
			{ multiline: true },
		],
		// Enforce spacing inside braces.
		'object-curly-spacing': [
			`error`,
			`always`,
		],
		// Require shorthand object syntax.
		'object-shorthand': [
			`error`,
			`always`,
		],
		// Disallow multiple var declarations.
		'one-var': [
			`error`,
			`never`,
		],
		// Require one var declaration per line.
		'one-var-declaration-per-line': `error`,
		// Require operator assignment shorthand.
		'operator-assignment': [
			`error`,
			`always`,
		],
		// Enforce operator linebreak style.
		'operator-linebreak': [
			`warn`,
			`before`,
		],
		// Require arrow callbacks.
		'prefer-arrow-callback': `error`,
		// Prefer const when not reassigned.
		'prefer-const': [
			`error`,
			{
				destructuring:          `any`,
				ignoreReadBeforeAssign: false,
			},
		],
		// Prefer destructuring from arrays/objects.
		'prefer-destructuring': [
			`warn`,
			{
				VariableDeclarator: {
					array:  false,
					object: true,
				},
				AssignmentExpression: {
					array:  true,
					object: false,
				},
		 	},
		],
		// Prefer Reflect methods over alternatives.
		'prefer-reflect': [
			`off`,
			{
				exceptions: [
					`call`,
				],
			},
		],
		// Require rest parameters.
		'prefer-rest-params': `error`,
		// Require spread syntax.
		'prefer-spread': `error`,
		// Prefer template literals.
		'prefer-template': [
			`error`,
		],
		// Disallow new Promise constructors.
		'promise/avoid-new': [
			`warn`,
		],
		// Disallow new Promise.* statics.
		'promise/no-new-statics': [
			`error`,
		],
		// Disallow wrapping values in Promise.resolve.
		'promise/no-return-wrap': [
			`error`,
		],
		// Enforce consistent quote style.
		'quotes': [
			`error`,
			`backtick`,
			{
				avoidEscape:           true,
				allowTemplateLiterals: true,
			},
		],
		// Enforce consistent quoting of props.
		'quote-props': [
			`error`,
			`consistent-as-needed`,
		],
		// Require JSDoc comments.
		'require-jsdoc': [
			`off`,
			{
				require: {
					ArrowFunctionExpression: false,
					ClassDeclaration:        false,
					FunctionDeclaration:     true,
					MethodDefinition:        false,
				},
			},
		],
		// Enforce spacing in rest/spread.
		'rest-spread-spacing': `error`,
		// Require semicolons.
		'semi': [
			`error`,
			`always`,
		],
		// Enforce spacing around semicolons.
		'semi-spacing': `error`,
		// Require space before blocks.
		'space-before-blocks': [
			`error`,
			`always`,
		],
		// Enforce spacing before function parens.
		'space-before-function-paren': [
			`error`,
			{
				anonymous:  `always`,
				asyncArrow: `always`,
				named:      `ignore`,
			},
		],
		// Disallow spaces in parentheses.
		'space-in-parens': [
			`error`,
			`never`,
		],
		// Enforce spacing around infix operators.
		'space-infix-ops': [
			`error`,
			{ int32Hint: false },
		],
		// Enforce consistent comment spacing.
		'spaced-comment': [
			`error`,
			`always`,
			{
				exceptions: [
					`-`,
					`*`,
				],
				markers: [
					`TODO:`,
					`HACK:`,
					`FIXME:`,
				],
			},
		],
		// Enforce spacing after switch colons.
		'switch-colon-spacing': `error`,
		// Enforce spacing in template braces.
		'template-curly-spacing': `error`,

		// "valid-jsdoc": [
		// 	"warn",
		// 	{
		// 		"prefer": {
		// 			"arg": "param",
		// 			"argument": "param",
		// 			"return": "returns"
		// 		},
		// 		"preferType": {
		// 			"Boolean": "boolean",
		// 			"Number": "number",
		// 			"Object": "object",
		// 			"String": "string"
		// 		}
		// 	}
		// ],
		// Require valid typeof comparisons.
		'valid-typeof': `error`,
		// Require vars to be declared first.
		'vars-on-top': `off`,
		// Require parens around IIFEs.
		'wrap-iife': `error`,
		// Enforce spacing around yield*.
		'yield-star-spacing': `error`,
		// Disallow Yoda conditions.
		'yoda': `error`,
	},
};

export default [
	// Base ESLint recommended rules.
	js.configs.recommended,
	baseConfig,
	// JSONC recommended rules (flat config).
	...jsoncPlugin.configs[`flat/recommended-with-jsonc`],
];
