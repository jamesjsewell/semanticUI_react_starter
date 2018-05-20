# getting semantic-ui-react working #

* semantic-ui-react is included as a dev dependency, so when you run the npm install command, it will be installed to the project's node_modules folder. You can import components from it in your javascript like you see in the index.js file of this repo. `import {Segment, Button} from 'semantic-ui-react'` for example

* In the end, semantic-ui-react components get flattened into regular html with regular semantic ui class names. It just makes writing the code faster.

* In order for the final elements with semantic ui class names to appear styled, you still need to include the regular semantic ui css in your project. In this example, I installed semantic-ui as a dependency. All you have to do after you have ran npm install, is go into the node_modules folder, go into the semantic-ui folder (yes semantic-ui folder, not semantic-ui-react folder) and run in the command line: `gulp build`   Now you're all set. In this example i did:  import `'../node_modules/semantic-ui/dist/semantic.min.css'` in index.js. This tells webpack to apply the semantic-ui styles to the project, thereby styling all elements with semantic ui class names.


## Webpack 4 setup ##

Has live reloading while coding so you don't have to refresh the browser when you make a change to your code. Processes the sass you write into minified css, and uses postcss(nextcss, nanocss) which does auto-prefixing so you don't have to bother with typing prefixes for cross browser support. creates source maps for your production code, for the css/js minified files, that way you can accurately debug your app in production.

* npm install
* `npm run start`, starts the dev server and opens your app in a new browser tab
* `npm run build`, populates a dist folder with the minified js bundle, minified css,and all other static files. Use these files in production, also creates source maps for the minified js/css files

I developed this by reading the documentation straight from the webpack website. https://webpack.js.org/
This is webpack 4

