module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      browserify: {
        dist: {
          require : { jquery : 'jquery-browserify'},
          files: {
            'public/external/module.js': [
              'public/application/application.js'
            ]
          }
        }
      }
    });
    
    grunt.loadNpmTasks('grunt-browserify');
    // Default task(s).
    grunt.registerTask('default', ['browserify']);
};