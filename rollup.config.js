import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';

module.exports = {
    input: {
        index: 'src/index.js'
    },
    output: {
        dir: 'dist',
        format: 'es',
        sourcemap: true
    },
    watch: {
        include: 'src/**',
    },
    plugins: [
        peerDepsExternal(),
        eslint({
            include: [
                'src/**/*.js'
            ]
        }),
        commonjs(),
        resolve(),
        cleanup({ extensions: ['js'] })
    ]
};
