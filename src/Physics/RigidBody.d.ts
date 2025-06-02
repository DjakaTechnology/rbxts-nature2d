import Point from "./Point";
import Constraint from "./Constraint";
import Engine from "Engine";
import Types from "Types";

interface RigidBody {
  object: GuiObject | undefined;
  mass: number;
  collidable: boolean;
  anchored: boolean;
  engine: Engine;
  custom: Types.Custom | undefined;
  isCustom: boolean;
  id: string;
  vertices: Point[];
  edges: Constraint[];
  connections: RBXScriptConnection[];
  lifeSpan: number | undefined;

  GetCorners(): LuaTuple<[Vector2, Vector2, Vector2, Vector2]>;
  CalculatePenetration(
    minA: number,
    maxA: number,
    minB: number,
    maxB: number
  ): number;
  CalculateOffset(pos: Vector2, anchorPoint: Vector2, size: Vector2): Vector2;
  CalculateCenter(vertices: Point[]): Vector2;
  CalculateSize(vertices: Point[]): Vector2;
  CreateRotationCache(cache: any[], center: Vector2, vertices: Point[]): void;
  UpdateVertices(frame: GuiObject, vertices: Point[], engine: Engine): void;
  CreateProjection(
    Axis: Vector2,
    Min: number,
    Max: number
  ): LuaTuple<[number, number]>;
  DetectCollision(other: RigidBody): LuaTuple<[boolean, Types.Collision]>;
  ApplyForce(force: Vector2, t?: number): void;
  Update(dt: number): void;
  Render(): void;
  Clone(deepCopy?: boolean): RigidBody;
  Destroy(keepFrame?: boolean): void;
  Rotate(newRotation: number): void;
  SetPosition(PositionX: number, PositionY: number): void;
  SetSize(SizeX: number, SizeY: number): void;
  SetScale(scale: number): void;
  Anchor(): void;
  Unanchor(): void;
  CanCollide(collidable: boolean): void;
  CanRotate(canRotate: boolean): void;
  GetFrame(): GuiObject;
  GetId(): string;
  GetVertices(): Point[];
  GetConstraints(): Constraint[];
  SetLifeSpan(seconds: number): void;
  KeepInCanvas(keep: boolean): void;
  SetFriction(friction: number): void;
  SetAirFriction(friction: number): void;
  SetGravity(gravity: Vector2): void;
  SetMass(mass: number): void;
  IsInBounds(): boolean;
  AverageVelocity(): Vector2;
  SetState(state: string, value: any): void;
  GetState(state: string): any;
  GetCenter(): Vector2;
  FilterCollisionsWith(otherBody: RigidBody): void;
  UnfilterCollisionsWith(otherBody: RigidBody): void;
  GetFilteredBodies(): string[];
  GetTouchingBodies(): string[];
  SetMaxForce(maxForce: number): void;
}

interface RigidBodyConstructor {
  new (
    frame: GuiObject | undefined,
    mass: number,
    collidable?: boolean,
    anchored?: boolean,
    engine?: Engine,
    custom?: Types.Custom,
    structure?: any
  ): RigidBody;
}

declare const RigidBody: RigidBodyConstructor;

export = RigidBody;
