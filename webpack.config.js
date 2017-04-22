var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/js/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
			applicationStyles: 'app/styles/app.scss',
			ScoreboardApp: 'app/components/ScoreboardApp.jsx',
			ScoreboardList: 'app/components/ScoreboardList.jsx',
			ScoreboardAddForm: 'app/components/ScoreboardAddForm.jsx',
			ScoreboardTimer: 'app/components/ScoreboardTimer.jsx',
			ScoreboardSummary: 'app/components/ScoreboardSummary.jsx',
			ListItem: 'app/components/ListItem.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	},
	devtool: 'cheap-module-eval-source-map'
};
