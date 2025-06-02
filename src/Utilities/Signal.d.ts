interface Signal {
  Connect(callback: (...args: any[]) => void): RBXScriptConnection;
  Fire(...args: any[]): void;
  Wait(): any;
  Destroy(): void;
}

export = Signal;
