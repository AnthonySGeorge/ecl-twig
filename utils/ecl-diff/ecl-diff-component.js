#!/usr/bin/env node

/* eslint-disable no-console */

const fs = require('fs');
const eclDiffVariant = require('./ecl-diff-variant.js');

const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
// We retrieve all the available variants files (php ones).
const getData = (component, system) => {
  const systemFolder = `${distFolder}/packages/${system}`;
  const twigFullPath = `${systemFolder}/${component}`;
  const twigFilesFolder = fs.readdirSync(`${twigFullPath}`);
  const twigFiles = twigFilesFolder.filter((elm) => {
    return elm.match(/.*\.(php.html)/gi);
  });

  const variants = [];
  twigFiles.forEach(async (twigFile) => {
    const variant = twigFile.includes('--')
      ? twigFile.replace(`${component}--`, '').slice(0, -9)
      : 'default';
    variants.push({ variant, file: twigFile, component });
  });

  return variants;
};

module.exports = (component, system) => {
  // This is for the console. Do not consider the same message in
  // ecl-diff-variant.js a duplicate, then.
  let message = `\nChecking component: ${component}\n`;
  message += `-------------------------------------------------------`;
  console.log(message);
  const datas = getData(component, system);
  // Here we pass all the variants found to the eclDiffVariant promise in a
  // Promise.all.
  return Promise.all(
    datas.map((variant) => eclDiffVariant(variant, system))
  ).then((result) => {
    return result;
  });
};