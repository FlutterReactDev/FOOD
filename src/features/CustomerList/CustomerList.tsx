import { Table } from "@components";
import { CustomerService } from "@service";
import { useEffect, useState } from "react";
import { container } from "tsyringe";
import CustomerListItem from "./CustomerListItem";
import CustomerSkeleton from "./CustomerSkeleton";

export interface Customers {
  id: number;
  name: string;
  avatar: string;
  menu: string;
  totalPayment: number;
  status: string;
}

const CustomerList = () => {
  const [customers, setCustomers] = useState<Customers[] | undefined>();

  useEffect(() => {
    const customerService = container.resolve(CustomerService);
    customerService.get<Customers[]>().data?.then((data) => {
      setCustomers(data);
    });
  }, []);

  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <Table.Head>
          <span>Customer</span>
          <span>Menu</span>
          <span>Total Payment</span>
          <span>Status</span>
        </Table.Head>

        <Table.Body>
          {customers?.length ? (
            customers.map((customer) => (
              <CustomerListItem customer={customer} />
            ))
          ) : (
            <>
              <CustomerSkeleton />
              <CustomerSkeleton />
              <CustomerSkeleton />
              <CustomerSkeleton />
            </>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CustomerList;
