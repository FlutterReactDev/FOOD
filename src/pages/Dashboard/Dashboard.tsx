import { Button, Divider, Mask, Navbar, Stats } from "@components";
import Stat from "@components/Stats/Stat";
import { CustomerList } from "@features";
import {
  AdjustmentsHorizontalIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  CurrencyDollarIcon,
  UsersIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

import Dish from "../../assets/DishImg1.png";

const Dashboard = () => {
  const [data, setData] = useState({
    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function(w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
    },
  });
  return (
    <div className="flex py-6 h-screen gap-6 pr-6">
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
          <CustomerList />
        </div>
      </div>
      <div className="w-1/3">
        <div className="p-6 bg-base-200 rounded-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Order Report</h1>
            <Button className="btn-outline">
              <ChevronDownIcon className="h-6 w-6" />
              Today
            </Button>
          </div>
          <Divider />
          <div className="w-full flex flex-col gap-6">
            <div className="flex gap-3">
              <Mask className="mask-circle w-14 h-14" src={Dish} />
              <div>
                <h1 className="font-semibold text-xl">
                  Spicy seasoned seafood noodles
                </h1>
                <span>200 dishes ordered</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Mask className="mask-circle w-14 h-14" src={Dish} />
              <div>
                <h1 className="font-semibold text-xl">
                  Spicy seasoned seafood noodles
                </h1>
                <span>200 dishes ordered</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Mask className="mask-circle w-14 h-14" src={Dish} />
              <div>
                <h1 className="font-semibold text-xl">
                  Spicy seasoned seafood noodles
                </h1>
                <span>200 dishes ordered</span>
              </div>
            </div>
          </div>
          <Button fullWidth className="btn-outline mt-8">
            View All
          </Button>
        </div>

        <div className="p-6 bg-base-200 rounded-lg mt-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Order Report</h1>
            <Button className="btn-outline">
              <ChevronDownIcon className="h-6 w-6" />
              Today
            </Button>
          </div>
          <Divider />
          <div className="w-full flex flex-col gap-6">
            <ReactApexChart options={data.options} series={data.series} type="radialBar" height={250}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
