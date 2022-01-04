export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const view = new Uint16Array(this.buffer);
    let result = '';
    for (const element of view) {
      result += String.fromCharCode(element);
    }
    return result;
  }
}
