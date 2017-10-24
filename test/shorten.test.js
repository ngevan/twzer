const sinon  = require('sinon');
const chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;
const program = require('commander');
const shorten = require('../lib/commands/shorten')(program);

describe('Shorten command', function () {
	let sandbox;

  program
    .description('URL shortener and expander tool (Bitly set as default).')
    .usage('tweezer <command> [option] <argument>');

	beforeEach(function () {
    sandbox = sinon.createSandbox();
	});

	afterEach(function () {
	  sandbox.restore();
	});

  it('should call the shorten command with \'shorten\'', function() {
    let commands, argv, response;

    commands = ['sh', 'shorten'];
    argv = ['node', './lib/tweezer', 'shorten', 'example.com'];

    sandbox.stub(program, 'parse').withArgs(argv).callsFake(function validateCommand(argv) {
      if (commands.includes(argv.slice(2)[0])) {
      	return true;
      };
    });

    response = program.parse(argv);

    assert(program.parse.calledOnce);
    expect(response).to.be.true;
  });

  it('should call the shorten command with alias \'sh\'', function() {
    let commands, argv, response;

    commands = ['sh', 'shorten'];
    argv = ['node', './lib/tweezer', 'sh', 'example.com'];

    sandbox.stub(program, 'parse').withArgs(argv).callsFake(function validateCommand(argv) {
      if (commands.includes(argv.slice(2)[0])) {
      	return true;
      };
    });

    response = program.parse(argv);

    assert(program.parse.calledOnce);
    expect(response).to.be.true;
  });

  it('should display error message for unknown command', function() {
    let argv, commands, response;

    commands = ['sh', 'shorten'];
    argv = ['node', './lib/tweezer', 'shortyyy', 'example.com'];

    sandbox.stub(program, 'parse').withArgs(argv).callsFake(function validateCommand(argv) {
      function validateCommand(input) {
        return commands.includes(input);
      }

      if (!validateCommand(argv.slice(2)[0])) {
      	return `error: invalid command '${argv.slice(2)[0]}'. Enter '-h' for help.`
      };
    });

    response = program.parse(argv);

    expect(response).to.equal(`error: invalid command '${argv.slice(2)[0]}'. Enter '-h' for help.`);
  });


  it('should display error message if no link is given', function() {
    let argv, response;

    argv = ['node', './lib/tweezer', 'shorten'];

    sandbox.stub(program, 'parse').withArgs(argv).callsFake(function missingArgument(argv) {
      if (argv.slice(3)[0] === undefined) {
      	return 'error: missing required argument `link\''
      };
    });

    response = program.parse(argv);

    expect(response).to.equal('error: missing required argument `link\'');
  });
});
