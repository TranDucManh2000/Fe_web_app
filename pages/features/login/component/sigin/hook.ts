export type ReceivedProps = Record<string, any>;

const useSigin = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useSigin>;

export default useSigin;
