export type ReceivedProps = Record<string, any>;

const useProfile = (props: ReceivedProps) => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return {
    ...props,
    onChange,
  };
};

export type Props = ReturnType<typeof useProfile>;

export default useProfile;
