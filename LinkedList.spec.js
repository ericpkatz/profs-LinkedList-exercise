const expect = require('chai').expect;
const LinkedList = require('./LinkedList');


describe('LinkedList', ()=> {

  it('can add to head and tail', ()=> {
    const ll = new LinkedList();
    ll.addToHead('foo');
    ll.addToTail('bar');
    ll.addToTail('bazz');
    const values = [];
    ll.traverse(function(value){
      values.push(value);
    });
    expect(values).to.eql(['foo', 'bar', 'bazz']);
  });

  it('can remove from head and tail', ()=> {
    const ll = new LinkedList();
    ll.addToHead('foo');
    ll.addToTail('bar');
    ll.addToTail('bazz');
    expect(ll.removeFromTail()).to.equal('bazz');
    expect(ll.removeFromHead()).to.equal('foo');
    const values = [];
    ll.traverse(function(value){
      values.push(value);
    });
    expect(values).to.eql(['bar']);
  });

  it('can search for a value', ()=> {
    const ll = new LinkedList();
    ll.addToHead('foo');
    ll.addToTail('bar');
    ll.addToTail('bazz');
    expect(ll.search('bar')).to.equal('bar');
  });

  it('can search for a value with a function', ()=> {
    const ll = new LinkedList();
    ll.addToHead('foo');
    ll.addToTail('bar');
    ll.addToTail('bazz');

    const match = function(value){
      return value.indexOf('ba') === 0;
    }

    expect(ll.search(match)).to.equal('bar');
  });
});
