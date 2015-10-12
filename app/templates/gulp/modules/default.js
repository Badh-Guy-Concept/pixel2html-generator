'use strict'

var gulp = require('gulp');


var defaultGulp = [
  'clean',
  'main:static',
  'main:styles',
  'main:scripts',
  <% if(frontEndFramework){ %>
  'vendor:<%= frontEndFramework %>',
  <% } %>
  <% if(jQuery){ %>
  'vendor:jquery',
  <% } %>
];

gulp.task('default', defaultGulp);