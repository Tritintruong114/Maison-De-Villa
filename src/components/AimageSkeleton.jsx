import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AimageSkeleton = () => {
  return (
    <div className="w-full h-full shadow-md">
      <SkeletonTheme baseColor="#A4907C" highlightColor="#FCDEC0">
        <Skeleton count={4} height={180} />
      </SkeletonTheme>
    </div>
  );
};

export default AimageSkeleton;
