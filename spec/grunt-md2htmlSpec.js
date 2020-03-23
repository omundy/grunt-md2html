const grunt = require('grunt');
describe('A suite', function () {
    it('md2html:one_file', function () {
        const actFile1 = grunt.file.read('tmp/one_file/output.html'),
            expectedFile1 = grunt.file.read('spec/expected/one_file/output.html');
        expect(actFile1).toEqual(expectedFile1);
    });

    it('md2html:multiple_files', function () {
        const actFile1 = grunt.file.read('tmp/multiple_files/file1.html'),
            expectedFile1 = grunt.file.read('spec/expected/multiple_files/file1.html'),
            actFile2 = grunt.file.read('tmp/multiple_files/file2.html'),
            expectedFile2 = grunt.file.read('spec/expected/multiple_files/file2.html');
        expect(actFile1).toEqual(expectedFile1);
        expect(actFile2).toEqual(expectedFile2);
    });

    it('md2html:includes', function () {
        const actFile1 = grunt.file.read('tmp/includes/index.html'),
            expectedFile1 = grunt.file.read('spec/expected/includes/index.html');

        expect(actFile1).toEqual(expectedFile1);
    });

    it('md2html:highlight', function () {
        const actFile1 = grunt.file.read('tmp/highlight/output.html'),
            expectedFile1 = grunt.file.read('spec/expected/highlight/output.html');
        expect(actFile1).toEqual(expectedFile1);
    });

    it('md2html:highlight_compressed', function () {
        const actFile1 = grunt.file.read('tmp/highlight/output_compressed.html'),
            expectedFile1 = grunt.file.read('spec/expected/highlight/output_compressed.html');
        expect(actFile1).toEqual(expectedFile1);
    });

    it('md2html:underscoreTemplating', function () {
        const actFile1 = grunt.file.read('tmp/underscore_test/output.html'),
            expectedFile1 = grunt.file.read('spec/expected/underscore_test/output.html');

        expect(actFile1).toEqual(expectedFile1);
    });

    it('md2html:plantuml_local', function () {
        const actFile1 = grunt.file.read('tmp/plantuml/output.html'),
            expectedFile1 = grunt.file.read('spec/expected/plantuml/output.html');

        expect(actFile1).toEqual(expectedFile1);
        expect(actFile1).toBeTruthy(grunt.file.exists('tmp/plantuml/myimage.png'));
    });

    it('md2html:plantuml_remote', function () {
        const actFile1 = grunt.file.read('tmp/plantuml/output-server.html'),
            expectedFile1 = grunt.file.read('spec/expected/plantuml/output-server.html');
        expect(actFile1).toEqual(expectedFile1);
        expect(actFile1).toBeTruthy(grunt.file.exists('tmp/plantuml/myimage-remote.png'));
    });
});
