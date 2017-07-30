const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const express = require('express')

module.exports = function (app) {
  // view engine setup
  app.set('views', path.join(__dirname, 'app/views'))
  app.set('view engine', 'pug')

  // uncomment after placing your favicon in /public
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, 'public')))
}
