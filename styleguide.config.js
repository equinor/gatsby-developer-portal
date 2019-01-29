module.exports = {
    sections: [
        {name: 'Grid', components: 'src/ui/grid/**/*.js'},
        {name: 'Elements', components: 'src/ui/elements/**/*.js'},
        {name: 'Components', components: 'src/ui/components/**/*.js'},
        {name: 'Layout', components: 'src/ui/layout/**/*.js'},
    ],
    skipComponentsWithoutExample: true,
    getExampleFilename: componentpath => componentpath.replace(/\.js$/, '.examples.md'),
    webpackConfig: {
        module: {
            rules: [
                // Babel loader, will use your project’s .babelrc
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                // Other loaders that are needed for your components
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader?modules'
                }
            ]
        }
    }
};
