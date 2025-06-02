import Types from "Types";

interface Point {
  pos: Vector2;
  prevPos: Vector2;
  velocity: Vector2;
  force: Vector2;
  mass: number;
  radius: number;
  color: Color3;
  id: string;
  canvas: { frame: Frame | undefined; topLeft: Vector2; size: Vector2 };
  engine: Types.EngineConfig;
  options: Types.PointConfig;
  connections: RBXScriptConnection[];
  ui: Frame;
  SetRadius(radius: number): void;
  Stroke(color: Color3): void;
  Destroy(): void;
}

interface PointConstructor {
  new (
    position: Vector2,
    canvas: Types.Canvas,
    engine: Types.EngineConfig,
    config: Types.PointConfig,
    parent?: Instance
  ): Point;
}

export = Point;
