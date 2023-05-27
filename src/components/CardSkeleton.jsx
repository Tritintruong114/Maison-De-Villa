import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="col-span-1 flex flex-col justify-between flex-shrink-0 h-72 relative">
      <SkeletonTheme baseColor="#A4907C" highlightColor="#FCDEC0">
        <Skeleton count={1} height={180} />
        <Skeleton count={1} height={21} />
        <Skeleton count={1} height={21} />
        <div className="flex w-full justify-between">
          <Skeleton count={1} height={21} width={90} />
          <Skeleton count={1} height={21} width={30} />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default CardSkeleton;
