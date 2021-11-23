export class Produto {
  id: number;
  code: string;
  name: string;
  value: number;
  constructor(code: string, name: string, value: number) {
    this.code = code;
    this.name = name;
    this.value = value;
  }
}
