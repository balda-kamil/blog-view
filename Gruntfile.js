const sass = require('node-sass');

module.exports = function(grunt){

  //configuration
  grunt.initConfig({
    concat: {
      js: {
        src: ['./js/glider.js', './js/main.js'],
        dest: 'build/js/scripts.js'
      },
      css: {
        src: ['./css/bootstrap.css', 'css/reset.css', 'css/glider.css', 'css/styles.css'],
        dest: 'build/css/styles.css'
      }
    },
    sass: {
      options: {
        implementation: sass,
        courceMap: true
      },
      build: {
        files: [{
          src: './css/sass/styles.scss',
          dest: './css/styles.css'
        }]
      }
    },
    uglify: {
      build: {
        files: [{
          src: ['./build/js/glider/glider.js', './build/js/main/main.js'],
          dest: './build/js/scripts.js'
        }]
      }
    },
    cssmin: {
      build: {
        files: [{
          src: './build/css/styles.css',
          dest: './build/css/styles.css'
        }]
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: {
          './build/js/glider/glider.js' : './js/glider.js',
          './build/js/main/main.js' : './js/main.js',
        }
      }
    },
    hash_res: {
      css: {
        options: {
          resDir: './build',
          resReg: [
            /(images\/[^.]+\.(?:png|gif|jpg))(\??)/g,
          ]
        },
        files: [
          {
            expand: true,
            cwd: 'css',
            src: ['*.css'],
            dest: 'css'
          }
        ]
      },
      html: {
        options: {
            resDir: './build',
            resReg: [
              /(css\/[^.]+\.css)(\??)/g,
              /(images\/[^.]+\.(?:png|gif|jpg))(\??)/g
            ]
        },
        files: [
          {
            expand: true,
            cwd: 'build/html',
            src: ['*.html'],
            dest: 'build'
          }
        ]
      }
    }
  })

  //load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-hash-res');
  grunt.loadNpmTasks('grunt-babel');

  //Register tasks
  grunt.registerTask('concat-js', ['concat:js'])
  grunt.registerTask('concat-css', ['concat:css'])
  grunt.registerTask('grunt-sass', ['sass'])
  grunt.registerTask('grunt-uglify', ['uglify'])
  grunt.registerTask('grunt-cssmin', ['cssmin'])
  grunt.registerTask('grunt-hash_res', ['hash_res'])
  grunt.registerTask('grunt-babel', ['babel'])

  grunt.registerTask('force_css', ['sass', "concat-css"])
  grunt.registerTask('force_js', ['concat-js', 'grunt-uglify'])
}