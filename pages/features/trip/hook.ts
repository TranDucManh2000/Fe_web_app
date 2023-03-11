export type ReceivedProps = Record<string, any>;

const useTrip = (props: ReceivedProps) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return {
    ...props,
    onChange,
  };
};

export type Props = ReturnType<typeof useTrip>;

export default useTrip;
