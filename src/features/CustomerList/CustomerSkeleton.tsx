import { Badge, Mask, Table } from "@components";
import Skeleton from "react-loading-skeleton";

const CustomerSkeleton = () => {
  return (
    <Table.Row>
      <div className="flex items-center space-x-3 truncate">
        <Skeleton width={48} height={48} circle />
        <div>
          <Skeleton width={50} height={20} />
        </div>
      </div>
      <div>
        <Skeleton width="100%" height={20} />
      </div>
      <div>
        <Skeleton width="100%" height={20} />
      </div>
      <div>
        <Skeleton width="100%" height={20} />
      </div>
    </Table.Row>
  );
};

export default CustomerSkeleton;
