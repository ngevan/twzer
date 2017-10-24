const sinon  = require('sinon');
const chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;
const google = require('../lib/clients/google');

describe('Google client', function() {
  let sandbox;

  beforeEach(function() {
    sandbox = sinon.createSandbox();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should call the google api', function() {
    let link;

    link = 'www.example.com';
    sandbox.stub(google, 'shorten');

    google.shorten(link);

    assert(google.shorten.calledOnce);
  });

  it('should return status OK for valid request', function() {
    let link, response;

    link = 'www.example.com';
    sandbox.stub(google, 'shorten').withArgs(link).returns({
      "kind": "urlshortener#url",
      "id": "http://goo.gl/F0pE",
      "longUrl": "http://example.com/",
      "status": "OK"
    });

    response = google.shorten(link);

    expect(response).to.be.an('object').to.deep.include({"status": "OK"});
  });

  it('should fetch the shortened link', function() {
    let link, response;

    link = 'www.example.com';
    sandbox.stub(google, 'shorten').withArgs(link).returns({
      "kind": "urlshortener#url",
      "id": "http://goo.gl/F0pE",
      "longUrl": "http://example.com/",
      "status": "OK"
    });

    response = google.shorten(link);

    expect(response.id).to.equal('http://goo.gl/F0pE');

  });

  it('should fetch the expanded link', function() {
    let link, response;

    link = 'www.example.com';
    sandbox.stub(google, 'expand').withArgs(link).returns({
      "kind": "urlshortener#url",
      "id": "http://goo.gl/F0pE",
      "longUrl": "http://example.com/",
      "status": "OK"
    });

    response = google.expand(link);

    expect(response.longUrl).to.equal('http://example.com/');
  });

  it('should return error code 400 for invalid request', function() {
    let invalidLink, response;

    invalidLink = 'example';
    sandbox.stub(google, 'shorten').withArgs(invalidLink).returns({
      "code": 400,
      "errors": [
        {
          "domain": "global",
          "reason": "invalid",
          "message": "Invalid Value",
          "locationType": "parameter",
          "location": "shortUrl"
        }
      ]
    });

    response = google.shorten(invalidLink);

    expect(response).to.be.an('object').to.deep.include({"code": 400});
  });
});
