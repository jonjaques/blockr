module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-mincss');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dev: {
                options: {
                    sassDir: "media/sass",
                    cssDir: "media/stylesheets",
                    imagesDir: "media/images",
                    noLineComments: false,
                    force: false,
                    require: [],
                    debugInfo: false
                }
            }
        },
        concat: {
            dev: {
                src: [
                    'media/javascripts/app.js'
                ],
                dest: 'media/javascripts/scripts.js'
            }
        },
        watch: {
            css: {
                files: [
                    "media/sass/*.scss"
                ],
                tasks: ['compass:dev'],
                options: {
                    nospawn: true
                }
            },
            scripts: {
                files: [
                    "media/javascripts/app.js"
                ],
                tasks: ['concat']
            }
        },
        mincss: {
            compress: {
                files: {
                    "media/stylesheets/site.css": ["media/stylesheets/site.css"],
                    "media/stylesheets/foundation.css": ["media/stylesheets/foundation.css"]
                }
            }
        },
        uglify: {
            compress: {
                files: {
                    "media/javascripts/scripts.js": ['media/javascripts/scripts.js']
                }
            }
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['compass', 'mincss', 'concat', 'uglify']);
};