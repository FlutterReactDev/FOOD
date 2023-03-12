import { Badge, Mask, Table } from "@components";
import { FC, HTMLAttributes } from "react";
import { Customers } from "./CustomerList";

interface CustomerListItemProps extends HTMLAttributes<HTMLTableRowElement> {
  customer: Customers;
}

const CustomerListItem: FC<CustomerListItemProps> = (props) => {
  const { customer } = props;
  return (
    <Table.Row>
      <div className="flex items-center space-x-3 truncate">
        <Mask className="mask-circle w-12 h-12" src={customer.avatar} />
        <div>
          <div className="font-bold">{customer.name}</div>
        </div>
      </div>
      <div>{customer.menu}</div>
      <div>${customer.totalPayment}</div>
      <div>
        <Badge color="success">{customer.status}</Badge>
      </div>
    </Table.Row>
  );
};

export default CustomerListItem;
