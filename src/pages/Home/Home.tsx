import { Button, Divider, Dropdown, Input, Menu, Navbar } from "@components";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { foodList } from "@router/router";
import { NavLink, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";
import MockImg from "../../assets/DishImg1.png";
const Home: FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("hot-dishes");
  }, []);

  return (
    <div className="flex">
      <div className="w-8/12 h-screen overflow-y-auto">
        <Navbar>
          <Navbar.Start>
            <div>
              <h1 className="text-3xl font-semibold">Jaegar Resto</h1>
              <p>Tuesday, 2 Feb 2021</p>
            </div>
          </Navbar.Start>
          <Navbar.End>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </span>
              <Input
                className="w-56 text-sm pl-10"
                placeholder="Search for food, coffe, etc.."
              />
            </div>
          </Navbar.End>
        </Navbar>

        <Menu horizontal className="gap-3 mb-5">
          {foodList.map((food) => (
            <Menu.Item key={food.path}>
              <NavLink className="rounded-xl" to={food.path}>
                {food.label}
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>

        <div className="flex justify-between items-center mb-16">
          <h1 className="text-xl font-semibold">Choose Dishes</h1>
          <Dropdown className="mr-7" vertical="end">
            <Dropdown.Toggle button={false}>
              <Button className="btn-outline gap-2">
                <ChevronDownIcon className="h-5 w-5" />
                Dine In
              </Button>
              <Dropdown.Menu className="p-2 shadow bg-base-200 rounded-box w-52">
                <Dropdown.Item>dasds</Dropdown.Item>
                <Dropdown.Item>dasds</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
        </div>
        <Outlet />
      </div>
      <div className="w-4/12 p-6 bg-base-200 h-screen flex flex-col">
        <h1 className="font-semibold text-xl mb-6">Orders #34562</h1>

        <div className="flex gap-2">
          <Button variant="outline" className="btn-sm" active>
            Dine In
          </Button>
          <Button variant="outline" className="btn-sm">
            To Go
          </Button>
          <Button variant="outline" className="btn-sm">
            Delivery
          </Button>
        </div>

        <div className="flex-grow overflow-y-auto">
          <div className="flex mt-6 ">
            <div className="w-4/6 font-semibold">Item</div>

            <div className="w-1/6 font-semibold text-right">Qty</div>

            <div className="w-1/6 font-semibold text-right">Price</div>
          </div>
          <Divider />
          <div className="mt-6 flex flex-col gap-y-6 ">
            <div>
              <div className="flex items-center">
                <div className="w-4/6 flex gap-2 items-center">
                  <div className="w-11 h-11 ">
                    <img
                      className="h-full w-full rounded-full object-cover"
                      src={MockImg}
                    />
                  </div>

                  <div>
                    <h1>Spicy seasoned sea...</h1>
                    <span>$ 2.29</span>
                  </div>
                </div>
                <div className="w-1/6 text-right">
                  <div
                    className=" ml-auto w-12 h-12 flex justify-center items-center bg-base-100
                 rounded-lg"
                  >
                    4
                  </div>
                </div>

                <div className="w-1/6 text-right">$ 4,58</div>
              </div>
              <div className="flex mt-2 justify-between">
                <Input className="w-5/6" />
                <Button className="w-12 h-12 btn-outline" color="error">
                  <TrashIcon className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <div className="w-4/6 flex gap-2 items-center">
                  <div className="w-11 h-11 ">
                    <img
                      className="h-full w-full rounded-full object-cover"
                      src={MockImg}
                    />
                  </div>

                  <div>
                    <h1>Spicy seasoned sea...</h1>
                    <span>$ 2.29</span>
                  </div>
                </div>
                <div className="w-1/6 text-right">
                  <div
                    className=" ml-auto w-12 h-12 flex justify-center items-center bg-base-100
                 rounded-lg"
                  >
                    4
                  </div>
                </div>

                <div className="w-1/6 text-right">$ 4,58</div>
              </div>
              <div className="flex mt-2 justify-between">
                <Input className="w-5/6" />
                <Button className="w-12 h-12 btn-outline" color="error">
                  <TrashIcon className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="w-4/6 flex gap-2 items-center">
                  <div className="w-11 h-11 ">
                    <img
                      className="h-full w-full rounded-full object-cover"
                      src={MockImg}
                    />
                  </div>

                  <div>
                    <h1>Spicy seasoned sea...</h1>
                    <span>$ 2.29</span>
                  </div>
                </div>
                <div className="w-1/6 text-right">
                  <div
                    className=" ml-auto w-12 h-12 flex justify-center items-center bg-base-100
                 rounded-lg"
                  >
                    4
                  </div>
                </div>

                <div className="w-1/6 text-right">$ 4,58</div>
              </div>
              <div className="flex mt-2 justify-between">
                <Input className="w-5/6" />
                <Button className="w-12 h-12 btn-outline" color="error">
                  <TrashIcon className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="w-4/6 flex gap-2 items-center">
                  <div className="w-11 h-11 ">
                    <img
                      className="h-full w-full rounded-full object-cover"
                      src={MockImg}
                    />
                  </div>

                  <div>
                    <h1>Spicy seasoned sea...</h1>
                    <span>$ 2.29</span>
                  </div>
                </div>
                <div className="w-1/6 text-right">
                  <div
                    className=" ml-auto w-12 h-12 flex justify-center items-center bg-base-100
                 rounded-lg"
                  >
                    4
                  </div>
                </div>

                <div className="w-1/6 text-right">$ 4,58</div>
              </div>
              <div className="flex mt-2 justify-between">
                <Input className="w-5/6" />
                <Button className="w-12 h-12 btn-outline" color="error">
                  <TrashIcon className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-base-100 pt-6">
          <div className="flex mb-4 justify-between">
            <div>Discount:</div>
            <div className="text-base font-medium">$0</div>
          </div>
          <div className="flex justify-between">
            <div>Sub total:</div>
            <div className="text-base font-medium">$ 21,03</div>
          </div>

          <Button className="mt-14" fullWidth>
            Continue to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
