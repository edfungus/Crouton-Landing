module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "public/common/css/style.css": "public/common/less/style.less", // destination file and source file
          "public/common/css/toast.css": "public/common/less/toast.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['public/common/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('prod', ['less']);
};
