export type List<T> = readonly T[];

export type PropsWithClassName<Props extends object = object> = Props & {
  readonly className?: string;
};

export type LoadingStatus = "idle" | "loading" | "success" | "error";

export type JsonSerializable = object | number | boolean;
