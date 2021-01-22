module.exports = {
	parserOptions: {
		ecmaVersion:  2019,
		sourceType:   `module`,
		ecmaFeatures: { modules: true },
	},
	env: {
		es6:  true,
		node: true,
	},
	extends: [
		`eslint:recommended`,
		`plugin:jsonc/recommended-with-jsonc`,
	],
	globals: {
		describe: true,
		it:       true,
		after:    true,
		done:     true,
	},
	plugins: [
		`import`, // https://www.npmjs.com/package/eslint-plugin-import
		`jsdoc`,  // https://www.npmjs.com/package/eslint-plugin-jsdoc
		`promise`, // https://www.npmjs.com/package/eslint-plugin-promise
		`jsonc`, // https://www.npmjs.com/package/eslint-plugin-jsonc
	],
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
		'accessor-pairs':        `error`,
		'array-bracket-spacing': [
			`error`,
			`always`,
			{
				arraysInArrays:  false,
				objectsInArrays: false,
			},
		],
		'array-callback-return': `error`,
		'arrow-parens':          [
			`error`,
			`as-needed`,
		],
		'arrow-spacing': [
			`error`,
		],
		'block-scoped-var': `error`,
		'block-spacing':    `error`,
		'brace-style':      [
			`error`,
			`1tbs`,
			{ allowSingleLine: true },
		],
		'camelcase': [
			`off`,
			{ properties: `never` },
		],
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
		'comma-spacing': [
			`error`,
			{
				after:  true,
				before: false,
			},
		],
		'comma-style': [
			`error`,
			`last`,
		],
		'computed-property-spacing': [
			`error`,
			`never`,
		],
		'curly': [
			`error`,
			`all`,
		],
		'dot-location': [
			`error`,
			`property`,
		],
		'dot-notation': [
			`off`,
			{ allowKeywords: true },
		],
		'default-case': `error`,
		'eol-last':     `error`,
		'eqeqeq':       `error`,
		'func-style':   [
			`error`,
			`declaration`,
			{ allowArrowFunctions: true },
		],
		'generator-star-spacing': `error`,
		'id-match':               `error`,
		'indent':                 [
			`error`,
			`tab`,
			{
				SwitchCase:         1,
				FunctionExpression: { body: 1 },
			},
		],
		'jsdoc/check-examples':            `warn`,
		'jsdoc/check-param-names':         `warn`,
		'jsdoc/check-tag-names':           `warn`,
		'jsdoc/check-types':               `warn`,
		'jsdoc/newline-after-description': `off`,
		'jsdoc/no-undefined-types':        `warn`,
		'jsdoc/require-description':       [
			`warn`,
			{
				descriptionStyle: `any`,
				exemptedBy:       [],
		  },
		],
		'jsdoc/require-description-complete-sentence':   `warn`,
		'jsdoc/require-example':                         `off`,
		'jsdoc/require-hyphen-before-param-description': `warn`,
		'jsdoc/require-param':                           `warn`,
		'jsdoc/require-param-description':               `warn`,
		'jsdoc/require-param-name':                      `warn`,
		'jsdoc/require-param-type':                      `warn`,
		'jsdoc/require-returns':                         `warn`,
		'jsdoc/require-returns-check':                   `warn`,
		'jsdoc/require-returns-description':             `warn`,
		'jsdoc/require-returns-type':                    `warn`,
		'jsdoc/valid-types':                             `warn`,
		'jsx-quotes':                                    `error`,
		'key-spacing':                                   [
			`error`,
			{ multiLine: { align: `value` } },
		],
		'keyword-spacing': [
			`error`,
		],
		'linebreak-style': [
			`off`,
			`unix`,
		],
		'lines-around-comment': [
			`error`,
			{ beforeBlockComment: false },
		],
		'max-depth': [
			`warn`,
			5,
		],
		'max-nested-callbacks':    `error`,
		'max-statements-per-line': [
			`error`,
			{ max: 2 },
		],
		'new-parens':               `error`,
		'no-alert':                 `error`,
		'no-array-constructor':     `error`,
		'no-buffer-constructor':    `error`,
		'no-case-declarations':     `off`,
		'no-catch-shadow':          `off`,
		'no-cond-assign':           `off`,
		'no-confusing-arrow':       `error`,
		'no-console':               `off`,
		'no-control-regex':         `off`,
		'no-constant-condition':    `off`,
		'no-debugger':              `warn`,
		'no-div-regex':             `error`,
		'no-duplicate-imports':     `error`,
		'no-empty':                 `warn`,
		'no-eq-null':               `error`,
		'no-eval':                  `error`,
		'no-extra-bind':            `error`,
		'no-fallthrough':           `error`,
		'no-floating-decimal':      `error`,
		'no-global-assign':         `error`,
		'no-implicit-globals':      `error`,
		'no-implied-eval':          `error`,
		'no-inner-declarations':    `off`,
		'no-iterator':              `error`,
		'no-label-var':             `error`,
		'no-labels':                `error`,
		'no-lone-blocks':           `error`,
		'no-lonely-if':             `error`,
		'no-loop-func':             `error`,
		'no-multi-str':             `error`,
		'no-mixed-spaces-and-tabs': `off`,
		'no-multiple-empty-lines':  [
			`error`,
			{ max: 2 },
		],
		'no-new-func':                 `error`,
		'no-new-object':               `error`,
		'no-new-require':              `error`,
		'no-new-wrappers':             `error`,
		'no-octal':                    `off`,
		'no-path-concat':              `error`,
		'no-proto':                    `error`,
		'no-restricted-globals':       `error`,
		'no-restricted-imports':       `error`,
		'no-restricted-modules':       `error`,
		'no-restricted-syntax':        `error`,
		'no-script-url':               `error`,
		'no-self-compare':             `error`,
		'no-sequences':                `error`,
		'no-shadow-restricted-names':  `error`,
		'no-spaced-func':              `error`,
		'no-template-curly-in-string': `error`,
		'no-this-before-super':        `error`,
		'no-trailing-spaces':          [
			`error`,
			{ skipBlankLines: false },
		],
		'no-undef':                     `error`,
		'no-undef-init':                `error`,
		'no-underscore-dangle':         `off`,
		'no-unmodified-loop-condition': `error`,
		'no-unneeded-ternary':          `error`,
		'no-unused-expressions':        [
			`warn`,
			{
				allowShortCircuit: true,
				allowTernary:      true,
			},
		],
		'no-unreachable': `error`,
		'no-unused-vars': [
			`warn`,
			{ varsIgnorePattern: `^on[A-Z]` },
		],
		'no-useless-computed-key':       `error`,
		'no-useless-concat':             `error`,
		'no-useless-constructor':        `error`,
		'no-var':                        `error`,
		'no-void':                       `error`,
		'no-whitespace-before-property': `error`,
		'no-with':                       `error`,
		'object-curly-newline':          [
			`error`,
			{ multiline: true },
		],
		'object-curly-spacing': [
			`error`,
			`always`,
		],
		'object-shorthand': [
			`error`,
			`always`,
		],
		'one-var': [
			`error`,
			`never`,
		],
		'one-var-declaration-per-line': `error`,
		'operator-assignment':          [
			`error`,
			`always`,
		],
		'operator-linebreak': [
			`warn`,
			`before`,
		],
		'prefer-arrow-callback': `error`,
		'prefer-const':          [
			`error`,
			{
				destructuring:          `any`,
				ignoreReadBeforeAssign: false,
			},
		],
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
		'prefer-reflect': [
			`off`,
			{
				exceptions: [
					`call`,
				],
			},
		],
		'prefer-rest-params': `error`,
		'prefer-spread':      `error`,
		'prefer-template':    [
			`error`,
		],
		'promise/avoid-new': [
			`warn`,
		],
		'promise/no-new-statics': [
			`error`,
		],
		'promise/no-return-wrap': [
			`error`,
		],
		'quotes': [
			`error`,
			`backtick`,
			{
				avoidEscape:           true,
				allowTemplateLiterals: true,
			},
		],
		'quote-props': [
			`error`,
			`consistent-as-needed`,
		],
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
		'rest-spread-spacing': `error`,
		'semi':                [
			`error`,
			`always`,
		],
		'semi-spacing':        `error`,
		'space-before-blocks': [
			`error`,
			`always`,
		],
		'space-before-function-paren': [
			`error`,
			{
				anonymous:  `always`,
				asyncArrow: `always`,
				named:      `ignore`,
			},
		],
		'space-in-parens': [
			`error`,
			`never`,
		],
		'space-infix-ops': [
			`error`,
			{ int32Hint: false },
		],
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
		'switch-colon-spacing':   `error`,
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
		'valid-typeof':       `error`,
		'vars-on-top':        `off`,
		'wrap-iife':          `error`,
		'yield-star-spacing': `error`,
		'yoda':               `error`,
	},
	overrides: [
		{
		 files:  [ `*.jsonc` ],
		 parser: `jsonc-eslint-parser`,
		},
	],
};
