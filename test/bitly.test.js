const sinon  = require('sinon');
const chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;
const bitly = require('../lib/clients/bitly');

describe('Bitly client', function() {
  let sandbox;

  beforeEach(function() {
    sandbox = sinon.createSandbox();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should call the bitly api', function() {
    let link;

    link = 'www.example.com';
    sandbox.stub(bitly, 'shorten');

    bitly.shorten(link);

    assert(bitly.shorten.calledOnce);
  });

  it('should return status code 200 for valid request', function() {
    let link, response;

    link = 'www.example.com';
    sandbox.stub(bitly, 'shorten').withArgs(link).returns({
      "status_code": 200,
      "status_txt": "OK",
      "data": {
        "url": "http://bit.ly/2hEY3bj",
        "hash": "2hEY3bj",
        "global_hash": "VDcn",
        "long_url": "http://example.com/",
        "new_hash": 0
      }
    });

    response = bitly.shorten(link);

    expect(response).to.be.an('object').to.deep.include({"status_code": 200});
  });

  it('should fetch the shortened link', function() {
    let link, response;

    link = 'www.example.com';
    sandbox.stub(bitly, 'shorten').withArgs(link).returns({
      "status_code": 200,
      "status_txt": "OK",
      "data": {
        "url": "http://bit.ly/2hEY3bj",
        "hash": "2hEY3bj",
        "global_hash": "VDcn",
        "long_url": "http://example.com/",
        "new_hash": 0
      }
    });

    response = bitly.shorten(link);

    expect(response.data.url).to.equal('http://bit.ly/2hEY3bj');
  });

  it('should return status code 500 for invalid request', function() {
    let invalidLink, response;

    invalidLink = 'example';
    sandbox.stub(bitly, 'shorten').withArgs(invalidLink).returns({
      "status_code": 500,
      "status_txt": "INVALID_URI",
      "data": []
    });

    response = bitly.shorten(invalidLink);

    expect(response).to.be.an('object').to.deep.include({"status_code": 500});
  });
});
