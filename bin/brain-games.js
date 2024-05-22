#!/usr/bin/env node;
import questionForUser from '../src/cli.js';

(function () {
  console.log('Welcome to the Brain Games!');
  const answer = questionForUser();
  console.log(`My name is ${answer}`);
  if (answer) {
    console.log(`Hello, ${answer}!`);
  }
}());
