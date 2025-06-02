interface Plugins {
  Triangle(a: Vector2, b: Vector2, c: Vector2): void;
  Quad(a: Vector2, b: Vector2, c: Vector2, d: Vector2): void;
  MouseConstraint(
    engine: { [key: string]: any },
    range: number,
    rigidbodies: any[]
  ): void;
}

export = Plugins;
