type LineFunction = (
  origin: Vector2,
  endpoint: Vector2,
  parent: Instance,
  thickness?: number,
  color?: Color3,
  existingLine?: Frame,
  image?: string
) => Frame;

declare const Line: LineFunction;

export = Line;
