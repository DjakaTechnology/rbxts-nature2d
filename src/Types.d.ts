import Point from "Physics/Point";

declare namespace Types {
  interface Custom {
    Vertices: Point[];
    Edges: Constraint[];
  }

  interface Canvas {
    topLeft: Vector2;
    size: Vector2;
    frame?: Frame;
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

export = Types;
