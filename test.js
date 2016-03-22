'use strict'

var test = require('tape')
var Observ = require('observ')
var softSet = require('./')

test(function (t) {
  var observable = Observ(1)
  var unlisten = observable(t.fail.bind(t, 'same value'))
  softSet(observable, 1)
  unlisten()
  softSet(observable, 2)
  t.equal(observable(), 2, 'different value')
  t.end()
})
