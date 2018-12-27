'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  align: 'center',
  float: 'center',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Miguel Piedrafita'),
  handle: chalk.white('m1guelpf'),
  work: chalk.white('16-year-old developer'),
  twitter: chalk.gray('https://twitter.com/') + chalk.hex('#1da1f2').visible('m1guelpf'),
  github: chalk.gray('https://github.com/') + chalk.hex('#fafbfc  ').visible('m1guelpf'),
  makerlog: chalk.gray('https://getmakerlog.com/') + chalk.hex('#47e1a0').visible('@m1guelpf'),
  web: chalk.cyan('https://miguelpiedrafita.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('m1guelpf'),
  labelWork: '',
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelMakerlog: chalk.white.bold('   MakerLog:'),
  labelWeb: chalk.white.bold('        Web:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const makerloging = `${data.labelMakerlog}  ${data.makerlog}`
const webing = `${data.labelWeb}  ${data.web}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + // data.labelWork + data.work
               newline + newline + // Add one whole blank line
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               makerloging + newline + // data.labelMakerlog + data.makerlog
               webing + newline + newline + // data.labelWeb + data.web
               data.npx // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
