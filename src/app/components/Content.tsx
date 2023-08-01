import { ReactElement, use, useEffect } from "react";

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

  useEffect(() => {}, [usernames, repos]);

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
            <details key={user.id} className="collapse my-1 bg-base-200">
              <summary className="collapse-title text-xl font-medium">
                {user.username}
              </summary>
              <div className="collapse-content">
                {repos.map((repo: any) => {
                  if (repos.length !== 0 && user.username === repo.username) {
                    return (
                      <div className="bg-base-200" key={repo.id}>
                        <div className="p-2 flex justify-between">
                          <div>
                            <span>
                              <i className="fa-solid fa-star"></i>
                              <span className="stat-desc ml-2">
                                {repo.rate}
                              </span>
                            </span>
                            <span>
                              <i className="fa-solid fa-user ml-2"></i>
                              <span className="stat-desc ml-2">
                                {repo.watchers}
                              </span>
                            </span>
                          </div>
                          <div>
                            <span>
                              <a href={repo.url} target="_blank">
                                <i className="fa-solid fa-download"></i>
                              </a>
                            </span>
                          </div>
                        </div>

                        <p className="p-2 text-orange-600 font-bold">
                          {repo.repos}
                        </p>
                        <p className="p-2">{repo.desc}</p>
                        <p className="p-2">[ {repo.lang} ]</p>
                      </div>
                    );
                  } else {
                    return false;
                  }
                })}
              </div>
            </details>
          );
        })}
      </div>
    </>
  );
};

export default Content;
