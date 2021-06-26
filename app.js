/* Package declarations */
const express = require('express');
const _path = require('path');
const _logger = require('morgan');
const _cors = require('cors');
const _createError = require('http-errors');
const _cookieParser = require('cookie-parser');
const _swigTemplates = require('swig-templates');
const _compression = require('compression');

/* ENV config */
require('dotenv').config();

/* Database connection */
require('./src/_database');

/* API routes config */
const _apis = require('./src/routes/apis_manager');

/* Express config instance */
const _app = express();

/* Compress files running through Express server */
_app.use(_compression());

/* Show favicon before UI hits */
_app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));

/* Support for CORS */
const _allowedOrigins = process.env.ALLOWED_DOMAINS.split(',');
_app.use(_cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (_allowedOrigins.indexOf(origin) == -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

/* Set custom variable accessor from Node layer to UI */
_swigTemplates.setDefaults({ varControls: [ '<%=', '%>' ] });

/* Custom view engine setup */
_app.engine('html', _swigTemplates.renderFile);
_app.set('views', _path.join(__dirname, 'views'));
_app.set('view engine', 'html');

/* HTTP request _logger */
_app.use(_logger('dev'));

/* Allow only strigified data to pass over URLs */
_app.use(express.urlencoded());

/* Support JSON-encoded bodies */
_app.use(express.json());

/* Support Cookies */
_app.use(_cookieParser());

/* Support for static file loading */
_app.use(express.static(_path.join(__dirname, 'public')));

/* UI route */
_app.use('/', express.static(_path.join(__dirname, `/views/production/${ process.env.APP_DIRECTORY }`)));

/* API route */
_app.use('/api', _apis);

/* Catch 404 and forward to error handler */
_app.use((req, res, next) => next(_createError(404)));

/* Error handler */
_app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.ENV == 'development' ? err : {};
  // Render error page
  res.status(err.status || 500);
  res.render('error404', { appName: process.env.APP_NAME });
});

module.exports = _app;
