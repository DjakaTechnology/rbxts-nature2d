import { EngineConfig, PointConfig, Canvas } from "Types";

declare class Point {
  pos: Vector2;
  prevPos: Vector2;
  velocity: Vector2;
  force: Vector2;
  mass: number;
  radius: number;
  color: Color3;
  id: string;
  canvas: { frame: Frame | undefined; topLeft: Vector2; size: Vector2 };
  engine: EngineConfig;
  options: PointConfig;
  connections: RBXScriptConnection[];
  ui: Frame;

  constructor(
    position: Vector2,
    canvas: Canvas,
    engine: EngineConfig,
    config: PointConfig,
    parent?: Instance
  );

  SetRadius(radius: number): void;
  Stroke(color: Color3): void;
  Destroy(): void;
}

export { Point };
