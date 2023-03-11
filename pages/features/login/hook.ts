export type ReceivedProps = Record<string, any>;

const useLogin = (props: ReceivedProps) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return {
    ...props,
    onChange,
    onFinish,
    onFinishFailed,
  };
};

export type Props = ReturnType<typeof useLogin>;

export default useLogin;
