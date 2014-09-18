mocha.ui('tdd');
mocha.setup('bdd');
var assert = chai.assert;

beforeEach(function() {
  var canvas = document.createElement('canvas'),
      context = canvas.getContext('2d');

  canvas.width = 600;
  canvas.height = 100;

  this.currentTest.canvas = canvas;
  this.currentTest.context = context;
});

afterEach(function() {
  var test = this.currentTest,
      testElements = document.getElementsByClassName('test'),
      len = testElements.length;

  testElements[len-1].appendChild(test.canvas);

  console.log('====== ' + test.title);
  console.log('strict JSON: ', test.context.canteen.serialize());
  console.log('strict hash: ', test.context.canteen.hash());
  console.log(' loose JSON: ', test.context.canteen.serialize('loose'));
  console.log(' loose hash: ', test.context.canteen.hash('loose'));
});