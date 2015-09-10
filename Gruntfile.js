
// -------------------------- grunt -------------------------- //

module.exports = function( grunt ) {

  // get banner comment from imagesloaded.js
  var banner = ( function() {
    var contents = grunt.file.read('outlayer.js');
    var re = new RegExp('^\\s*(?:\\/\\*[\\s\\S]*?\\*\\/)\\s*');
    var matches = contents.match( re );
    return matches[0].replace( 'Outlayer', 'Outlayer PACKAGED' );
  })();

  grunt.initConfig({

    requirejs: {
      // create outlayer.pkgd.js
      pkgd: {
        options: {
          baseUrl: 'bower_components',
          include: [
            '../outlayer'
          ],
          out: 'outlayer.pkgd.js',
          optimize: 'none',
          wrap: {
            start: banner
          }
        }
      }
    },

    uglify: {
      pkgd: {
        files: {
          'outlayer.pkgd.min.js': [ 'outlayer.pkgd.js' ]
        },
        options: {
          banner: banner
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask( 'remove-pkgd-module-name', function() {
    var contents = grunt.file.read('outlayer.pkgd.js');
    contents = contents.replace( "'../outlayer',", '' );
    grunt.file.write( 'outlayer.pkgd.js', contents );
    grunt.log.writeln('Removed pkgd module name on outlayer.pkgd.js');
  });

  grunt.registerTask( 'default', [
    'requirejs',
    'remove-pkgd-module-name',
    'uglify'
  ]);

};
