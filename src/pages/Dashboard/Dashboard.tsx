import {
  Badge,
  Button,
  Checkbox,
  Divider,
  Mask,
  Navbar,
  Stats,
  Table,
} from "@components";
import Stat from "@components/Stats/Stat";
import {
  AdjustmentsHorizontalIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const { customers } = useLoaderData();
  return (
    <div className="flex py-6 h-screen">
      <div className="w-2/3 flex flex-col">
        <Navbar>
          <Navbar.Start>
            <div>
              <h1 className="text-3xl font-semibold">Dashboard</h1>
              <p>Tuesday, 2 Feb 2021</p>
            </div>
          </Navbar.Start>
        </Navbar>
        <Divider />
        <div className="grid grid-cols-3 gap-6 mb-6">
          <Stats className="bg-base-200">
            <Stats.Stat>
              <Stat.Item className="flex items-center gap-3" variant="title">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-base-100 text-secondary">
                  <CurrencyDollarIcon className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-success">+32.40%</span>
                  <span className="text-success w-5 h-5 rounded-full flex items-center justify-center bg-success-content">
                    <ArrowUpIcon className="h-4 w-4" />
                  </span>
                </div>
              </Stat.Item>
              <Stat.Item
                className="text-3xl font-semibold mt-2"
                variant="value"
              >
                $10,243.00
              </Stat.Item>
              <Stat.Item className="font-medium mt-2" variant="desc">
                Total Revenue
              </Stat.Item>
            </Stats.Stat>
          </Stats>
          <Stats className="bg-base-200">
            <Stats.Stat>
              <Stat.Item className="flex items-center gap-3" variant="title">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-base-100 text-warning">
                  <BookmarkIcon className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-2 text-error">
                  <span>-12.40%</span>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center bg-error-content">
                    <ArrowDownIcon className="h-4 w-4" />
                  </span>
                </div>
              </Stat.Item>
              <Stat.Item
                className="text-3xl font-semibold mt-2"
                variant="value"
              >
                23,456
              </Stat.Item>
              <Stat.Item className="font-medium mt-2" variant="desc">
                Total Dish Ordered
              </Stat.Item>
            </Stats.Stat>
          </Stats>
          <Stats className="bg-base-200">
            <Stats.Stat>
              <Stat.Item className="flex items-center gap-3" variant="title">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-base-100 text-secondary">
                  <UsersIcon className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-2 text-success">
                  <span>+2.40%</span>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center bg-success-content">
                    <ArrowUpIcon className="h-4 w-4" />
                  </span>
                </div>
              </Stat.Item>
              <Stat.Item
                className="text-3xl font-semibold mt-2"
                variant="value"
              >
                1,234
              </Stat.Item>
              <Stat.Item className="font-medium mt-2" variant="desc">
                Total Customer
              </Stat.Item>
            </Stats.Stat>
          </Stats>
        </div>

        <div className="w-full p-6 bg-base-200 rounded-lg flex-grow overflow-y-auto h-full">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Order Report</h1>
            <Button className="btn-outline">
              <AdjustmentsHorizontalIcon className="h-6 w-6" />
              Filter Order
            </Button>
          </div>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <Table.Head>
                <span>Customer</span>
                <span>Menu</span>
                <span>Total Payment</span>
                <span>Status</span>
              </Table.Head>

              <Table.Body>
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Await
                    resolve={customers}
                    children={(data) => {
                      return data.map((customer) => {
                        return (
                          <Table.Row>
                            <div className="flex items-center space-x-3 truncate">
                              <Mask
                                className="mask-circle w-12 h-12"
                                src={customer.avatar}
                              />
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
                      });
                    }}
                  />
                </Suspense>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
      <div className="w-1/3"></div>
    </div>
  );
};

export default Dashboard;
