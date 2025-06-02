declare namespace Nature2D {
  interface Quadtree<T> {
    position: Vector2;
    size: Vector2;
    capacity: number;
    objects: T[];
    divided: boolean;
  }

  interface Canvas {
    topLeft: Vector2;
    size: Vector2;
    frame?: Frame;
  }

  interface Point {
    Parent: any;
    frame?: Frame;
    engine: { [key: string]: any };
    canvas: Canvas;
    oldPos: Vector2;
    pos: Vector2;
    forces: Vector2;
    gravity: Vector2;
    friction: number;
    airfriction: number;
    bounce: number;
    snap: boolean;
    selectable: boolean;
    render: boolean;
    keepInCanvas: boolean;
    color?: Color3;
    radius: number;
  }

  interface RigidBody {
    CreateProjection(axis: Vector2, min: number, max: number): [number, number];
    SetState(state: string, value: any): void;
    GetState(state: string): any;
    id: string;
    vertices: Point[];
    edges: any[];
    frame?: GuiObject;
    anchored: boolean;
    mass: number;
    collidable: boolean;
    center: Vector2;
    engine: { [key: string]: any };
    spawnedAt: number;
    lifeSpan?: number;
    anchorRotation?: number;
    anchorPos?: Vector2;
    Touched: any;
    CanvasEdgeTouched: any;
    States: { [key: string]: any };
  }

  interface SegmentConfig {
    restLength?: number;
    render: boolean;
    thickness?: number;
    support: boolean;
    TYPE: string;
  }

  interface EngineConfig {
    gravity: Vector2;
    friction: number;
    bounce: number;
    speed: number;
    airfriction: number;
  }

  interface PointConfig {
    snap: boolean;
    selectable: boolean;
    render: boolean;
    keepInCanvas: boolean;
  }

  interface Collision {
    axis: Vector2;
    depth: number;
    edge: any;
    vertex: Point;
  }

  interface Range {
    position: Vector2;
    size: Vector2;
  }

  interface Properties {
    Position?: Vector2;
    Visible?: boolean;
    Snap?: boolean;
    KeepInCanvas?: boolean;
    Radius?: number;
    Color?: Color3;
    Type?: string;
    Point1?: Point;
    Point2?: Point;
    Thickness?: number;
    RestLength?: number;
    SpringConstant?: number;
    Object?: GuiObject;
    Collidable?: boolean;
    Anchored?: boolean;
    LifeSpan?: number;
    Gravity?: Vector2;
    Friction?: number;
    AirFriction?: number;
    Structure?: { [key: string]: any };
    Mass?: number;
    CanRotate?: boolean;
  }

  interface Custom {
    Vertices: any[];
    Edges: any[];
  }

  interface Plugins {
    Triangle(a: Vector2, b: Vector2, c: Vector2): void;
    Quad(a: Vector2, b: Vector2, c: Vector2, d: Vector2): void;
    MouseConstraint(
      engine: { [key: string]: any },
      range: number,
      rigidbodies: any[]
    ): void;
  }

  interface DebugInfo {
    Objects: {
      RigidBodies: number;
      Constraints: number;
      Points: number;
    };
    Running: boolean;
    Physics: {
      Gravity: Vector2;
      Friction: number;
      AirFriction: number;
      CollisionMultiplier: number;
      TimeSteps: number;
      SimulationSpeed: number;
      UsingQuadtrees: boolean;
      FramerateIndependent: boolean;
    };
    Path: ScreenGui;
    Canvas: {
      Frame: GuiObject;
      TopLeft: Vector2;
      Size: Vector2;
    };
  }
}

export = Nature2D;
