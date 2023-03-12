import Card from "@components/Card/Card";
import { FC, Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { Await, useLoaderData } from "react-router-dom";
import "./CardList.css";

//TODO: вот тут поменять
interface Data {
  img: string;
  price: number;
  id: number;
  desciption: string;
  available: number;
}
interface Response {
  data: Data[];
}

const CardList: FC = () => {
  const { foods } = useLoaderData() as Response;

  const count = new Array(10).fill("");
  const CardListSkeleton: FC = () => {
    return (
      <>
        {count.map((_, i) => (
          <Card
            bordered={false}
            className="food-item rounded-2xl bg-base-200 items-center"
            key={i}
          >
            <div className="-mt-9">
              <Skeleton width={150} height={150} borderRadius="50%" />
            </div>

            <Card.Body className="items-center justify-center p-4 text-center ">
              <Skeleton height={16} width="150px" count={3} />
            </Card.Body>
          </Card>
        ))}
      </>
    );
  };
  return (
    <div className="flex flex-wrap gap-x-7 gap-y-12 mt-9">
      <Suspense fallback={<CardListSkeleton />}>
        <Await
          resolve={foods}
          children={(relovedData: Data[]) => {
            console.log(relovedData);

            return (
              <>
                {relovedData.map((data) => (
                  <Card key={data.id} bordered={false} className="food-item">
                    <div className="-mt-9">
                      <Card.Image src={data.img} className="rounded-full" />
                    </div>

                    <Card.Body className="items-center justify-center p-4 text-center ">
                      <h1>{data.desciption}</h1>
                      <h3>{data.price}</h3>
                      <p>{data.available} Bowls available</p>
                    </Card.Body>
                  </Card>
                ))}
              </>
            );
          }}
        />
      </Suspense>
    </div>
  );
};

export default CardList;
