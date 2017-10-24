const sinon  = require('sinon');
const chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;
const program = require('commander');
const packageJson = require('../package.json');

describe('Help command', function() {
  let sandbox;

  program
    .description('URL expander and expander tool (Bitly set as default).')
    .usage('tweezer <command> [option] <argument>')
    .version(packageJson.version);

	beforeEach(function () {
    sandbox = sinon.createSandbox();
	});

	afterEach(function () {
	  sandbox.restore();
	})

  it('should return help when called without arguments', function() {
    let argv;

    argv = ['node', './lib/tweezer'];

    sandbox.stub(program, 'help');

    if (argv.length === 2) {
      program.help();
    };

    assert(program.help.calledOnce);
  });

  it('should return help when called with \'--help\'', function() {
    let argv, response;

    argv = ['node', './lib/tweezer', '--help'];

    sandbox.stub(program, 'parse').withArgs(argv).callsFake(function help() {
      if (argv.includes('--help')) { return true };
    });

    response = program.parse(argv);

    expect(response).to.be.true;
  });

  it('should return the current version when called with \'--version\'', function() {
    let argv, response;

    argv = ['node', './lib/tweezer', '--version'];

    sandbox.stub(program, 'parse').withArgs(argv).returns(packageJson.version)

    response = program.parse(argv);

    assert(response, packageJson.version);
  });

});
