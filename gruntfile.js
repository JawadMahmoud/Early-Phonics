module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      babel: {
        options: {
          sourceMap: true,
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
          ["@babel/plugin-proposal-decorators", { "legacy": true }],
          "@babel/plugin-proposal-function-sent",
          "@babel/plugin-proposal-export-namespace-from",
          "@babel/plugin-proposal-numeric-separator",
          "@babel/plugin-proposal-throw-expressions",
          '@babel/plugin-proposal-class-properties']
        },
        dist: {
          files: {
            'demo/temp/Pages/copyrightPage.js': 'js/Pages/copyrightPage.js',
            'demo/temp/Pages/gamePage.js': 'js/Pages/gamePage.js',
            'demo/temp/Pages/index.js': 'js/Pages/index.js',
            'demo/temp/Pages/infoPage.js': 'js/Pages/infoPage.js',
            'demo/temp/Pages/keyboard.js': 'js/Pages/keyboard.js',
            'demo/temp/Pages/resultsPage.js': 'js/Pages/resultsPage.js',
            'demo/temp/Pages/selectionPage.js': 'js/Pages/selectionPage.js',
            'demo/temp/Pages/settingsPage.js': 'js/Pages/settingsPage.js',
            'demo/temp/Pages/wordsPage.js': 'js/Pages/wordsPage.js',
            'demo/temp/Surroundings/Footer.js': 'js/Surroundings/Footer.js',
            'demo/temp/Surroundings/TopBar.js': 'js/Surroundings/TopBar.js',
          }
        }
      },
      concat: {
        functionality: {
          options: {
            separator: ';',
          },
          src: ['js/Functionality/cookies.js', 'js/Functionality/keyboardKeys.js', 'js/Functionality/loadResults.js', 'js/Functionality/onLoad.js',
          'js/Functionality/resize.js', 'js/Functionality/scanning.js', 'js/Functionality/selection.js', 'js/Functionality/settings.js',
          'js/Functionality/startGame.js'],
          dest: 'demo/js/early-phonics-f.js'
        },
      },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        functions: {
          src: 'demo/js/early-phonics-f.js',
          dest: 'demo/js/early-phonics.min.js'
        },
        pages: {
          files: [{
            expand: true,
            cwd: 'demo/temp/Pages/',
            src: ['*.js', '!*.min.js'],
            dest: 'demo/js/Pages/',
            ext: '.min.js'
          }]
        },
        surroundings: {
          files: [{
            expand: true,
            cwd: 'demo/temp/Surroundings/',
            src: ['*.js', '!*.min.js'],
            dest: 'demo/js/Surroundings/',
            ext: '.min.js'
          }]
        }
      },
      cssmin: {
        options : {
          banner: '/* My minified css file */'
        },
        dist: {
          src: 'css/doorway.css',
          dest: 'demo/css/early-phonics.min.css'
        }
      },
      copy: {
        resources: {
          files: [
            {expand: true, src: ['resources/**'], dest: 'demo/'},
          ]
        }
      },
      processhtml: {
        dist: {
          src: 'index.html',
          dest: 'demo/index.html'
        }
      },
      clean : {
        tempFiles : {
          src:["demo/temp", "demo/js/early-phonics-f.js"]
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-babel');
    //grunt.loadNpmTasks('grunt-browserify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.registerTask('test', ['jshint']);
  
    grunt.registerTask('buildDemo', ['babel', 'concat:functionality', 'uglify:functions', 'uglify:pages', 'uglify:surroundings', 'cssmin', 'copy', 'processhtml', 'clean:tempFiles']);
  
  };