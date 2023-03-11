export type ReceivedProps = Record<string, any>;

const useNavbar = (props: ReceivedProps) => {
  return {
    ...props,
  };
};

export type Props = ReturnType<typeof useNavbar>;

export default useNavbar;
