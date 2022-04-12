export type Merge<T extends Record<string, any>, K extends Record<string, unknown>> = {
  [P in keyof T | keyof K]: P extends keyof K ? K[P] : P extends keyof T ? T[P] : never;
};

export type DeepPartial<T> = T extends Record<string, unknown>
  ? {
    [P in keyof T]?: DeepPartial<T[P]>;
  }
  : T extends Array<unknown>
    ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
    : T;

export type DeepRemovePartial<T> = T extends Record<string, unknown>
  ? {
    [P in keyof T]-?: DeepRemovePartial<T[P]>;
  }
  : T extends Array<unknown>
    ? {
      [P in keyof T]-?: DeepPartial<T[P]>;
    }
    : T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AwaitResolved<T extends (...rest: any) => Promise<any>> = T extends (...rest: any) => Promise<infer P>
  ? P
  : never;

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

export type AtLeastN<T, N extends number> = N extends 0
  ? Partial<T>
  : { [K in keyof T]: Pick<T, K> & AtLeastN<Omit<T, K>, Sub<N>> }[keyof T];

// extend as needed
type Sub<N extends number> = N extends 1
  ? 0
  : N extends 2
    ? 1
    : N extends 3
      ? 2
      : N extends 4
        ? 3
        : N extends 5
          ? 4
          : N extends 6
            ? 5
            : N extends 7
              ? 6
              : N extends 8
                ? 7
                : N extends 9
                  ? 8
                  : N extends 10
                    ? 9
                    : never;
