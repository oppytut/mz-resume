# mz-resume
This is Arief Novianto's resume. This template from <a href="https://github.com/xriley/Orbit-Theme">Orbit</a> repository. Adding Webpack.js, Sass, and Browsersync for fun development. For personal use, follow this step:
<ol>
  <li>Clone project<br/>
    <code>git clone https://github.com/oppytut/mz-resume.git</code>
  </li>
  <li>Go in directory<br/>
    <code>cd mz-resume</code>
  </li>
  <li>Install all node modules<br/>
    <code>npm install</code>
  </li>
  <li>Run the project<br/>
    <code>npm run start</code>
  </li>
  <li>Run the browser and access <code>http://localhost:3000</code></li>
</ol>

## Fun Coding
Editing <code>src/sass/mz.scss</code> file will be automatic compile to <code>public/css/mz.css</code> file. When all files in BrowserSyncPlugin files parameter changed, the <code>http://localhost:3000</code> will be automatic reload. 

## Adding New Sass File
Add Sass file to <code>src/sass/</code> directory and edit <code>webpack.config.js</code> file. Add file path to entry such as:
```
newSass: ['./src/sass/newSass.scss']
```
That file will be automatic compile to <code>public/css/newSass.css</code> file. Next, add <code>newSass.css</code> to <code>html</code> file.
