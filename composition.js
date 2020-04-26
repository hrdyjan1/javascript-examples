import _ from "ramda";

// Classic functor
const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x)
});

const log = _.curry((flag, val) => (console.log(flag, val), val));
const exclaim = str => `${str}!`;
const double = str => str + str;
const upper = str => str.toUpperCase();
const head = str => str[0];

// COMPOSE
const firstDoubleUpperExclaim = _.compose(
  exclaim,
  upper,
  log("middle"),
  double,
  head
);

// BOX
const secondDoubleUpperExclaim = x =>
  Box(x)
    .map(head)
    .map(double)
    .map(log('middle'))
    .map(upper)
    .fold(exclaim);

firstDoubleUpperExclaim("batman");
secondDoubleUpperExclaim("batman");

