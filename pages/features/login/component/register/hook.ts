export type ReceivedProps = Record<string, any>;

const useRegister = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useRegister>;

export default useRegister;
