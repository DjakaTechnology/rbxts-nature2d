import Engine from "Engine";
import Point from "./Point";
import Types from "Types";

interface ConstraintOptions {
  restLength: number;
  render: boolean;
  thickness: number;
  support: boolean;
  TYPE: string;
}

interface Constraint {
  point1: Point;
  point2: Point;
  restLength: number;
  springConstant: number;
  color: Color3;
  id: string;
  canvas: { frame: Frame | undefined; topLeft: Vector2; size: Vector2 };
  engine: Types.EngineConfig;
  options: ConstraintOptions;
  ui: Frame;

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

interface ConstraintConstructor {
  new (
    point1: Point,
    point2: Point,
    canvas: Types.Canvas,
    config: Types.SegmentConfig,
    engine: Engine
  ): Constraint;
}

declare const Constraint: ConstraintConstructor;

export = Constraint;
