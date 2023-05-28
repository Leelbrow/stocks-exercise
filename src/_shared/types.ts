export type PropsWithClassName<Props extends object = object> = Props & {
  readonly className?: string;
};

export type List<T> = readonly T[];

export type LoadingStatus = "idle" | "loading" | "success" | "error";
