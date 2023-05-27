export type PropsWithClassName<Props extends object = object> = Props & {
  readonly className?: string;
};
