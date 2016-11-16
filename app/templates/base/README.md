# <%= projectId %>

## Installing dependencies & running up
To work, the **Pixel2HTML Boilerplate** needs to install some dependencies to run the options you select.
For this job, run this command in your shell

```
$ npm install
$ npm run code
```

### Other available npm commands

```
$ npm run build //build the project without serving
```

## File Structure

This boilerplate will create a set of files and folders

```

├── dist/
├── src/
│    ├──  assets/
│    │    ├──  gulp/
│    │    │    ├──  tasks/
│    │    ├──  fonts/
│    │    ├──  icons/
│    │    ├──  images/
│    │    ├──  js/
│    │    ├──  styles/
│    │    │    ├──  components/
│    │    │    │    ├──  _buttons.<%= cssProcessor %>
│    │    │    │    ├──  _footer.<%= cssProcessor %>
│    │    │    │    ├──  _header.<%= cssProcessor %>
│    │    │    │    └──  _nav.<%= cssProcessor %>
│    │    │    ├──  screens/
│    │    │    │    ├──  _base.<%= cssProcessor %>
<% for(var i=1; i<=qtyScreens; i++) {%>│    │    │    │    └──  screen_<%=i%>.<%= cssProcessor %>
<% } %>│    │    │    ├──  _variables.<%= cssProcessor %>
│    │    │    ├──  _reset.<%= cssProcessor %>
│    │    │    ├──  _mixins.<%= cssProcessor %>
<% if (frontEndFramework) { -%>│    │    │    ├──  _mixins.scss<% } %>
│    │    │    └──  main.<%= cssProcessor %>
│    │    └──  vendor/
<% for(var i=1; i<=qtyScreens; i++) {%>│    └──  screen_<%=i%>.<%=markupLanguage%>
<% } %>├── .bowerrc
├── .editorcofig
├── .gitattributes
├── .gitignore
├── .project.conf
├── bower.json
├── gulpfile.js
├── package.json
└── README.md
```



## Available Gulp Commands

### Helpers
* `$ gulp clean` Clean /dist directory

### Static Files
* `$ gulp main:static` Compile static files (images, icons)
* `$ gulp main:images` Move images
* `$ gulp main::icons` Move icons

### Fonts Files
* `$ gulp main:fonts` Move project fonts
* `$ gulp vendor:fonts` Move vendors fonts

### Scripts
* `$ gulp main:scripts` Concat, uglify and move project JS files
* `$ gulp vendor:scripts` Concat, uglify and move vendors JS files

### Styles
* `$ gulp main:styles` Compile, concat, autoprefix, minify and move [SCSS, Less, Stylus] project files
* `$ gulp vendor:styles` Compile, concat, autoprefix, minify and move [SCSS, Less, Stylus] vendor files

### Daemons
* `$ gulp watch` **Watch** your files and autoexecute gulp directives
* `$ gulp serve` **Watch** your files and **serve** with an HTTP server and **Sync** with your prefered browser _awesome!_

### Delivery
 * `$ gulp build` Execute all the gulp directives and makes a `.zip` file with the latest code.

---

##### Generated with 💕 by Pixel2HTML v<%= version %> @ <%= now %>
