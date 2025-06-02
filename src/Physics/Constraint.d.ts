import Engine from "Engine";
import { Point } from "./Point";
import { Canvas, EngineConfig, SegmentConfig } from "Types";

interface ConstraintOptions {
  restLength: number;
  render: boolean;
  thickness: number;
  support: boolean;
  TYPE: string;
}

declare class Constraint {
  point1: Point;
  point2: Point;
  restLength: number;
  springConstant: number;
  color: Color3;
  id: string;
  canvas: { frame: Frame | undefined; topLeft: Vector2; size: Vector2 };
  engine: EngineConfig;
  options: ConstraintOptions;
  ui: Frame;

  constructor(
    point1: Point,
    point2: Point,
    canvas: Canvas,
    config: SegmentConfig,
    engine: Engine,
    parent?: Instance
  );

  Constrain(): void;
  Render(): void;
  GetLength(): number;
  Stroke(color: Color3): void;
  GetPoints(): LuaTuple<[Point, Point]>;
  GetFrame(): Frame | undefined;
  SetLength(newLength: number): void;
  SetSpringConstant(constant: number): void;
  GetId(): string;
  GetParent(): Instance;
  Destroy(): void;
}

export { Constraint };
