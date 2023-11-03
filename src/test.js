import { Selector } from 'testcafe';

const number1 = Selector('#num1');
const number2 = Selector('#num2');
const result = Selector('#result');

fixture`Calculator Tests`
  .page('http://localhost:5176');

test('Add Numbers', async (t) => {
  await t
    .typeText(number1, '3') 
    .typeText(number2, '4') 
    .click('#Add')
    .expect(result.textContent).eql('7');
});

test('Subtract Numbers', async (t) => {
  await t
    .typeText(number1, '5') 
    .typeText(number2, '3') 
    .click('#Sub')
    .expect(result.textContent).eql('2');
});

test('Multiply Numbers', async (t) => {
  await t
    .typeText(number1, '7') 
    .typeText(number2, '2') 
    .click('#Mult')
    .expect(result.textContent).eql('14');
});

test('Divide Numbers', async (t) => {
  await t
    .typeText(number1, '6') 
    .typeText(number2, '2') 
    .click('#Divide')
    .expect(result.textContent).eql('3');
});