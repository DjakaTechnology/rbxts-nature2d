import { RigidBody } from "../Physics/RigidBody";
import { Range } from "../Types";

interface Quadtree {
  position: Vector2;
  size: Vector2;
  capacity: number;
  objects: RigidBody[];
  divided: boolean;
  topLeft?: Quadtree;
  topRight?: Quadtree;
  bottomLeft?: Quadtree;
  bottomRight?: Quadtree;

  Insert(body: RigidBody): void;
  HasObject(p: Vector2): boolean;
  SubDivide(): void;
  Search(range: Range, objects?: RigidBody[]): RigidBody[];
}

interface QuadtreeConstructor {
  new (position: Vector2, size: Vector2, capacity: number): Quadtree;
}

declare const Quadtree: QuadtreeConstructor;

export = Quadtree;
