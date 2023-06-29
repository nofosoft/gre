import { ReactElement } from "react";

type ContentProps = {
  search: string;
  founded: number;
  dataUsers: any;
};

const Content = ({
  search,
  founded,
  dataUsers,
}: ContentProps): ReactElement => {
  //   dataUsers.data.map((list: any) => console.log(list));

  return (
    <>
      {search.length > 0 ? (
        <div className="stats">
          <div className="stat">
            <div className="stat-title">
              Showing users for <span className="stat-title">"{search}"</span>
            </div>
            {founded > 0 ? (
              <div className="stat-value">{founded} user found</div>
            ) : (
              false
            )}
          </div>
        </div>
      ) : (
        false
      )}
      <div className="p-2">
        {dataUsers.data.map((items: any) => {
          return (
            <div key={items.id} className="collapse bg-base-200 my-1">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                {items.username}
              </div>
              <div className="collapse-content">
                {items.repos.map((items: any) => {
                  return (
                    <div key={items.id} className="p-1">
                      <div className="stats w-full">
                        <div className="stat">
                          <div className="stat-title">{items.name}</div>
                          <div className="stat-desc">{items.desc}</div>
                          <div className="stat-figure">
                            <i className="fa-solid fa-star"></i>
                            <span className="stat-desc ml-2">{items.rate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Content;
