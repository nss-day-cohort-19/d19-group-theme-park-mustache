module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        src: ['../JS/**/*.js'],
        dest: '../dist/app.js'
      },
      options: {
        transform: ["hbsfy"],
        browserifyOptions: {
          paths: [
            "./node_modules"
          ]
        }
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$" ],
        esnext: true,
        globalstrict: true,
        globals: {"map": true},
        browserify: true
      },
      files: ['../js/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      hbs: {
        files: ['../templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('grunt-bootstrap');
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
