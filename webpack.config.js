const path = require('path');

module.exports = () => {
    const config = {
        entry: './src/greet.ts',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'app.js'
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader'
                }
            ],
        }
    };

    return config;
};
