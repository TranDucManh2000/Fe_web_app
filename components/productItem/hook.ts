import { useRouter } from "next/router";

export type ReceivedProps = Record<string, any>;

const useProduct = (props: ReceivedProps) => {
  const router = useRouter();
  const nexPage = (e: string) => {
    router.push(e);
  };
  return {
    ...props,
    nexPage,
  };
};

export type Props = ReturnType<typeof useProduct>;

export default useProduct;
