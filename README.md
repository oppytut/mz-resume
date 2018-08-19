# mz-resume
This is Arief Novianto's resume. This template from <a href="https://github.com/xriley/Orbit-Theme">Orbit</a> repository. Adding Webpack.js, Sass, and Browsersync for fun development. For personal use, follow this step:
##### Clone project
```bash
git clone https://github.com/oppytut/mz-resume.git
```
##### Go in directory
```bash
cd mz-resume
```
##### Install all node modules
```bash
npm install
```
##### Run the project
For development mode:
```bash
npm run dev
```
For build only:
```bash
npm run build
```
##### Run the browser and access http://localhost:3000

## Fun Coding
Editing <code>src/sass/mz.scss</code> file will be automatic compile to <code>public/css/mz.css</code> file. When all files in BrowserSyncPlugin files parameter changed, the <code>http://localhost:3000</code> will be automatic reload.

## Adding New Sass File
Add Sass file to <code>src/sass/</code> directory and edit <code>webpack.config.js</code> file. Add file path to entry such as:
```
newSass: ['./src/sass/newSass.scss']
```
That file will be automatic compile to <code>public/css/newSass.css</code> file. Next, add <code>newSass.css</code> to <code>html</code> file.
