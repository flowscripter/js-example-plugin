import builtins from 'rollup-plugin-node-builtins';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';

module.exports = [
    {
        input: {
            node: 'src/index.js'
        },
        output: {
            dir: 'dist',
            format: 'es',
            sourcemap: true
        },
        watch: {
            include: 'src/**',
        },
        external: [
            'os',
            'tty',
            'util'
        ],
        plugins: [
            eslint({
                include: [
                    'src/**/*.js'
                ]
            }),
            commonjs(),
            resolve(),
            cleanup({ extensions: ['js'] })
        ]
    },
    {
        input: {
            browser: 'src/index.js'
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
            eslint({
                include: [
                    'src/**/*.js'
                ]
            }),
            commonjs(),
            builtins(),
            resolve({
                browser: true,
                preferBuiltins: false
            }),
            cleanup({ extensions: ['js'] })
        ]
    }
];
