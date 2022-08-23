/* Package declarations */
const path = require('path');
const logger = require('morgan');
const express = require('express');
const favicon = require('serve-favicon');
const session = require('express-session');
const createError = require('http-errors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const swigTemplates = require('swig-templates');


/* ENV config */
require('dotenv').config();

/* API routes config */
const apis = require('./routes/apisManager');

/* Express config instance */
const app = express();

/* Compress files running through Express server */
app.use(compression());

/* Support for CORS */
app.use((req, res, next) => {
  /* Set headers to allow cross origin request */
  res.header("Access-Control-Allow-Origin", '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

/* Session settings */
app.set('trust proxy', 1); // trust first proxy
app.use(session({
  name: `MEAN-baseapp${ process.env.PORT }`,
  secret: 'MEAN-baseapp',
  resave: false,
  saveUninitialized: true,
}));

/* Set custom variable accessor from Node layer to UI */
swigTemplates.setDefaults({ varControls: ['<%=', '%>'] });

/* Custom view engine setup */
app.engine('html', swigTemplates.renderFile);
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'html');

/* HTTP request logger */
app.use(logger('dev'));

/* Allow only stringified data to pass over URLs */
app.use(express.urlencoded({ extended: false }));

/* Support JSON-encoded bodies */
app.use(express.json());

/* Show favicon before UI hits */
app.use(favicon(path.join(process.cwd(), '/public/favicon.ico')));

/* Support Cookies */
app.use(cookieParser());

/* API route */
app.use('/api', apis);

/* UI route */
app.use('/', express.static(path.join(process.cwd(), `/views/production/angular-baseapp`)));

/* Wildcard route */
app.use('*', express.static(path.join(process.cwd(), `/views/production/angular-baseapp`)));

/* Catch 404 and forward to error handler */
app.use((req, res, next) => next(createError(404)));

/* Error handler */
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV == 'development' ? err : {};
  // Render error page
  res.status(err.status || 500);
  res.render('error404', { appName: process.env.APP_NAME });
});

module.exports = app;
