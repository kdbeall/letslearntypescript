export class Animal {
  name: string;
  x: number;
  y: number;

  constructor(name: string, x: number, y: number) {
    this.name = name;
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number) {
    this.x = this.x + x;
    this.y = this.y + y;
  }
}

interface Noise {
  noise: string, getNoise(): string, makeNoise(): void
}


export class Cat extends Animal implements Noise {
  noise: string;
  constructor(name: string, x: number, y: number, noise: string) {
    super(name, x, y);
    this.noise = noise;
  }
  getNoise() {
    return this.noise;
  }
  makeNoise() {
    console.log(this.noise);
  }
}