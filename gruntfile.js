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
            'demo/Pages/copyrightPage.js': 'js/Pages/copyrightPage.js',
            'demo/Pages/gamePage.js': 'js/Pages/gamePage.js',
            'demo/Pages/index.js': 'js/Pages/index.js',
            'demo/Pages/infoPage.js': 'js/Pages/infoPage.js',
            'demo/Pages/keyboard.js': 'js/Pages/keyboard.js',
            'demo/Pages/resultsPage.js': 'js/Pages/resultsPage.js',
            'demo/Pages/selectionPage.js': 'js/Pages/selectionPage.js',
            'demo/Pages/settingsPage.js': 'js/Pages/settingsPage.js',
            'demo/Pages/wordsPage.js': 'js/Pages/wordsPage.js',
            'demo/Surroundings/Footer.js': 'js/Surroundings/Footer.js',
            'demo/Surroundings/TopBar.js': 'js/Surroundings/TopBar.js',
            'demo/Surroundings/TopBarIndex.js': 'js/Surroundings/TopBarIndex.js',
          }
        }
      },
      concat: {
        reacts: {
          options: {
            separator: ';',
          },
          src: ['demo/Pages/final/**', 'demo/Surroundings/final/**'],
          dest: 'demo/early-phonics-r.js'
        },
        functionality: {
          options: {
            separator: ';',
          },
          src: ['js/Functionality/cookies.js', 'js/Functionality/keyboardKeys.js', 'js/Functionality/loadResults.js', 'js/Functionality/onLoad.js',
          'js/Functionality/resize.js', 'js/Functionality/scanning.js', 'js/Functionality/selection.js', 'js/Functionality/settings.js',
          'js/Functionality/startGame.js'],
          dest: 'demo/early-phonics-j.js'
        },
        both: {
          options: {
            separator: ';',
          },
          src: ['demo/early-phonics-r.js', 'demo/early-phonics-j.js'],
          dest: 'demo/early-phonics.js'
        }
      },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
          src: 'demo/early-phonics.js',
          dest: 'demo/early-phonics.min.js'
        }
      },
      cssmin: {
        options : {
          banner: '/* My minified css file */'
        },
        dist: {
          src: 'css/doorway.css',
          dest: 'demo/early-phonics.min.css'
        }
      },
      copy: {
        main: {
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
      browserify: {
        dist: {
          files: {
            'demo/Pages/final/copyrightPage.js': 'demo/Pages/copyrightPage.js',
            'demo/Pages/final/gamePage.js': 'demo/Pages/gamePage.js',
            'demo/Pages/final/index.js': 'demo/Pages/index.js',
            'demo/Pages/final/infoPage.js': 'demo/Pages/infoPage.js',
            'demo/Pages/final/keyboard.js': 'demo/Pages/keyboard.js',
            'demo/Pages/final/resultsPage.js': 'demo/Pages/resultsPage.js',
            'demo/Pages/final/selectionPage.js': 'demo/Pages/selectionPage.js',
            'demo/Pages/final/settingsPage.js': 'demo/Pages/settingsPage.js',
            'demo/Pages/final/wordsPage.js': 'demo/Pages/wordsPage.js',
            'demo/Surroundings/final/Footer.js': 'demo/Surroundings/Footer.js',
            'demo/Surroundings/final/TopBar.js': 'demo/Surroundings/TopBar.js',
            'demo/Surroundings/final/TopBarIndex.js': 'demo/Surroundings/TopBarIndex.js',
          }
        }
      },
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
  
    //grunt.registerTask('test', ['jshint']);
  
    grunt.registerTask('buildDemo', ['concat', 'uglify', 'cssmin', 'copy', 'processhtml']);
  
  };