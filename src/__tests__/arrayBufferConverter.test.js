import getBuffer from '../buffer';
import ArrayBufferConverter from '../arrayBufferConverter';

test(('arrayBufferConverter toString'), () => {
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(getBuffer());
  expect(arrayBufferConverter.toString()).toBe(expected);
  expect(`${arrayBufferConverter}`).toBe(expected);
});
