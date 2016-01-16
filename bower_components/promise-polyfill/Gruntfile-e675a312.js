module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
			},
			dist: {
				files: {
					'Promise.min.uglify.js': ['Promise-2aaa9aa7.js']
				}
			}
		},

    closurecompiler: {
      options: {
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
      },
      dist: {
        files: {
          'Promise.min-252cb55c.js': ['Promise-2aaa9aa7.js']
        }
      }
    },

    bytesize: {
      dist: {
        src: ['Promise*.js']
      }
    }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-closurecompiler');
	grunt.loadNpmTasks('grunt-bytesize');

	grunt.registerTask('build', ['closurecompiler', 'bytesize']);
};
