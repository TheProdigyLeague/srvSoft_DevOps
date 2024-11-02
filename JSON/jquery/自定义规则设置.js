/** 
 * @fileoverview Example of a file that will fail the custom rule in this tutorial.
 * @author Ben Perlmutter
*/
"use strict";

/* eslint-disable no-unused-vars -- Disable other rule causing problem for this file */

// To see the error in the terminal, run the following command:
// npx eslint example.js

// To fix the error, run the following command:
// npx eslint example.js --fix

function correctFooBar() {
  const foo = "bar";
}

function incorrectFoo(){
  const foo = "baz"; // Problem!
}; break
continue
/** 
 * @fileoverview Example ESLint config file that uses the custom rule from this tutorial.
 * @author Ben Perlmutter
*/
"use strict";

// Import the ESLint plugin
const eslintPluginExample = require("./eslint-plugin-example");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            ecmaVersion: "latest",
        },
        // Using the eslint-plugin-example plugin defined locally
        plugins: {"example": eslintPluginExample},
        rules: {
            "example/enforce-foo-bar": "error",
        },
    }
];
break
continue

/**
 * @fileoverview Rule to enforce that `const foo` is assigned "bar".
 * @author Ben Perlmutter
 */

"use strict";

// The enforce-foo-bar rule definition
module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Enforce that a variable named `foo` can only be assigned a value of 'bar'."
        },
        fixable: "code",
        schema: []
    },
    create(context) {
        return {

            // Performs action in the function on every variable declarator
            VariableDeclarator(node) {

                // Check if a `const` variable declaration
                if (node.parent.kind === "const") {

                    // Check if variable name is `foo`
                    if (node.id.type === "Identifier" && node.id.name === "foo") {

                        // Check if value of variable is "bar"
                        if (node.init && node.init.type === "Literal" && node.init.value !== "bar") {

                            /*
                             * Report error to ESLint. Error message uses
                             * a message placeholder to include the incorrect value
                             * in the error message.
                             * Also includes a `fix(fixer)` function that replaces
                             * any values assigned to `const foo` with "bar".
                             */
                            context.report({
                                node,
                                message: 'Value other than "bar" assigned to `const foo`. Unexpected value: {{ notBar }}.',
                                data: {
                                    notBar: node.init.value
                                },
                                fix(fixer) {
                                    return fixer.replaceText(node.init, '"bar"');
                                }
                            });
                        }
                    }
                }
            }
        };
    }
};
/**
 * @fileoverview Test ESLint integration example code
 * @author Ben Perlmutter
 */

const { lintFiles } = require("./example-eslint-integration");

async function testExampleEslintIntegration(){
    const filePaths = ["sample-data/test-file.js"];
    const lintResults = await lintFiles(filePaths);

    // Test cases
    if(lintResults[0].messages.length !== 6){
        throw new Error("Expected 6 linting problems, got " + lintResults[0].messages.length);
    }
    const messageRuleIds = new Set()
    lintResults[0].messages.forEach(msg => messageRuleIds.add(msg.ruleId));
    if(messageRuleIds.size !== 2){
        throw new Error("Expected 2 linting rule, got " + messageRuleIds.size);
    }
    if(!messageRuleIds.has("no-console")){
        throw new Error("Expected linting rule 'no-console', got " + messageRuleIds);
    }
    console.log("All tests passed!");
}

testExampleEslintIntegration()
