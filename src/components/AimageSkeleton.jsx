import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AimageSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-3 h-full shadow-md">
      <SkeletonTheme baseColor="#A4907C" highlightColor="#FCDEC0">
        <Skeleton count={1} height={330} />
        <Skeleton count={1} height={330} />
        <Skeleton count={1} height={330} />
        <Skeleton count={1} height={330} />
      </SkeletonTheme>
    </div>
  );
};

export default AimageSkeleton;
