import { SkeletonCircle } from "@/utils/chakra";

export const Skeleton = () => {
  return (
    <SkeletonCircle fadeDuration={2.5} opacity={0.4} w="full"></SkeletonCircle>
  );
};
