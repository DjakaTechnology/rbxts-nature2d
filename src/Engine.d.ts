import { Signal } from "./Utilities/Signal";
import { RigidBody } from "./Physics/RigidBody";
import { Constraint } from "./Physics/Constraint";
import { Point } from "./Physics/Point";
import { Canvas, DebugInfo, Properties } from "./Types";

interface Iterations {
  constraint: number;
  collision: number;
}

interface Engine {
  gravity: Vector2;
  friction: number;
  airfriction: number;
  bounce: number;
  timeSteps: number;
  mass: number;
  path: Instance;
  speed: number;
  quadtrees: boolean;
  independent: boolean;
  canvas: Canvas;
  iterations: Iterations;

  // Events
  Started: Signal;
  Stopped: Signal;
  ObjectAdded: Signal;
  ObjectRemoved: Signal;
  Updated: Signal;

  Start(): void;
  Stop(): void;
  Create(
    object: "Constraint" | "Point" | "RigidBody",
    properties: Properties
  ): RigidBody | Constraint | Point;
  GetBodies(): RigidBody[];
  GetConstraints(): Constraint[];
  GetPoints(): Point[];
  CreateCanvas(topLeft: Vector2, size: Vector2, frame?: Frame): void;
  SetSimulationSpeed(speed: number): void;
  SetPhysicalProperty(property: string, value: Vector2 | number): void;
  GetBodyById(id: string): RigidBody | undefined;
  GetConstraintById(id: string): Constraint | undefined;
  GetDebugInfo(): DebugInfo;
  UseQuadtrees(use: boolean): void;
  FrameRateIndependent(independent: boolean): void;
  SetConstraintIterations(iterations: number): void;
  SetCollisionIterations(iterations: number): void;
  Destroy(): void;
}

interface EngineConstructor {
  init(screengui: Instance): Engine;
}

declare const Engine: EngineConstructor;

export = Engine;
