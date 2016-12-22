module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 400,
                        quality: 30
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd:'images_src/',
                    dest: 'images/'
                }]
            }
        },

        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'images_src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['img'],
            },
            css: {
                src: ['release']
            }
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            img: {
                options: {
                    create: ['img']
                }
            },
            css: {
                options: {
                    create: ['release/css']
                }
            }
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        copy: {
          img: {
            files: [{
              expand: true,
              src: 'images_src/fixed/*.{gif,jpg,png}',
              dest: 'img/'
            }]
          },
          css: {
            files: [{
                expand: true,
                src: ['**/*.css', '!**/*.min.css', '!node_modules/**/*.css'],
                dest: 'release/css'
            }]
          }
        },

        /* Minify CSS */
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['**/*.css', '!**/*.min.css', '!node_modules/**/*.css', '!release/css/**/*.css'],
                    // src: ['css/*.css', 'views/css/*.css', '!css/*.min.css', '!views/css/*.min.css'],
                    dest: 'release/css',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['responsive_images', 'clean', 'mkdir', 'copy', 'imagemin', 'cssmin']);
};