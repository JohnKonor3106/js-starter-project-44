#!/usr/bin/env node;
import questionForUser from '../src/cli.js';

(function () {
  const answer = questionForUser();
  console.log(`My name is ${answer}`);
  if (answer) {
    console.log(`Hello, ${answer}!`);
  }
}());
