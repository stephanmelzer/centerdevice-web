module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    meta: {
      cssDir: 'css',
      sassDir: 'sass',
      allSassFiles: 'sass/**/*'
    },
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['<%= meta.allSassFiles %>'],
        tasks: ['compass:dev']
      }
    },
    compass: {
      options: {
        sassDir: '<%= meta.sassDir %>',
        cssDir: '<%= meta.cssDir %>'
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compressed'
        }
      },
      dev: {
        options: {
          debugInfo: true
        }
      }
    },
    connect: {
      dev: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', 'compass:dist');
  grunt.registerTask('run', ['compass:dev', 'connect', 'watch']);
};
