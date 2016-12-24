module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 500,
                        quality: 100
                    }, {
                        width: 100,
                        quality: 100
                    }, {
                        width: 70,
                        quality: 100
                    }]
                },
                files: [{
                    expand: true,
                    src: ['src/images_src/*.{gif,jpg,png}'],
                    dest: 'src/resized_images/',
                    flatten: true
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
                    src: ['dist/img/*.jpg'],
                    ext: '.min.jpg'
                },{
                    expand: true,
                    src: ['dist/img/*.png'],
                    ext: '.min.png'
                },{
                    expand: true,
                    src: ['dist/img/*.gif'],
                    ext: '.min.gif'
                }]
            }
        },

        /* Clear out the directory if it exists */
        clean: {
            dev: {
                src: ['dist/img', 'src/resized_images'],
            },
            css: {
                src: ['dist/css']
            }
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            img: {
                options: {
                    create: ['dist/img']
                }
            },
            css: {
                options: {
                    create: ['dist/css']
                }
            }
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        copy: {
          img: {
            files: [{
              expand: true,
              src: 'src/resized_images/*.{gif,jpg,png}',
              dest: 'dist/img',
              flatten: true
            }]
          },
          css: {
            files: [{
                expand: true,
                src: ['src/css/*.css', '!**/*.min.css'],
                dest: 'dist/css',
                flatten: true
            }]
          }
        },

        /* Minify CSS */
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['dist/css/*.css', '!dist/css/*.min.css'],
                    // src: ['css/*.css', 'views/css/*.css', '!css/*.min.css', '!views/css/*.min.css'],
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
    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'copy', 'imagemin', 'cssmin']);
};