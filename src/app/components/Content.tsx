import { ReactElement } from "react";

type ContentProps = {
  search: string;
  founded: number;
  usernames: any;
  repos: any;
};

const Content = ({
  search,
  founded,
  usernames,
  repos,
}: ContentProps): ReactElement => {
  //   dataUsers.data.map((list: any) => console.log(list));

  return (
    <>
      {search.length > 0 ? (
        <div className="p-4">
          <div>
            Showing users for{" "}
            <span className="stat-title">&quot;{search}&quot;</span>
          </div>
          <div>
            {founded > 0 ? (
              <div className="font-bold text-xl">{founded} User found</div>
            ) : (
              <div className="font-bold text-xl">No user found</div>
            )}
          </div>
        </div>
      ) : (
        false
      )}
      <div className="p-2">
        {usernames.map((user: any) => {
          return (
            <div key={user.id} className="collapse bg-base-200 my-1">
              <input type="checkbox" />
              <div className="collapse-title whitespace-normal text-xl font-medium">
                {user.username}
              </div>
              <div className="collapse-content">
                {repos.map((repo: any) => {
                  if (repos.length !== 0 && user.username === repo.username) {
                    return (
                      <div className="card p-2 my-2 bg-base-100" key={repo.id}>
                        <div className="flex justify-between p-2">
                          <div className="flex justify-between">
                            <div>
                              <i className="fa-solid fa-star"></i>
                              <span className="stat-desc ml-2">
                                {repo.rate}
                              </span>
                            </div>
                            <div>
                              <i className="fa-solid fa-user ml-2"></i>
                              <span className="stat-desc ml-2">
                                {repo.watchers}
                              </span>
                            </div>
                          </div>
                          <div>
                            <a href={repo.url} target="_blank">
                              <i className="fa-solid fa-download"></i>
                            </a>
                          </div>
                        </div>
                        <div className="rounded p-2 w-[300px] sm:w-full text-orange-600 font-bold whitespace-normal">
                          {repo.repos}
                        </div>
                        <div className="bg-base-200 w-100 rounded p-2 whitespace-normal">
                          {repo.desc}
                          <div className="whitespace-normal">
                            [ {repo.lang} ]
                          </div>
                        </div>
                      </div>
                    );
                  }
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
