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
        {usernames.map((user: any) => {
          return (
            <div key={user.id} className="collapse bg-base-200 my-1">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                {user.username}
              </div>
              <div className="collapse-content">
                {repos.map((repo: any) => {
                  if (repos.length !== 0 && user.username === repo.username) {
                    return (
                      <div
                        key={repo.id}
                        className="card w-full bg-base-100 my-1 shadow-xl"
                      >
                        <div className="card-body">
                          <div className="card-actions justify-between">
                            <h2 className="card-title whitespace-normal">
                              {repo.repos}
                            </h2>
                            <div className="card-actions justify-end">
                              <div className="stat-figure">
                                <i className="fa-solid fa-star"></i>
                                <span className="stat-desc ml-2">
                                  {repo.rate}
                                </span>
                                <i className="fa-solid fa-user ml-2"></i>
                                <span className="stat-desc ml-2">
                                  {repo.watchers}
                                </span>
                                <button className="btn ml-2 btn-ghost">
                                  <a
                                    className="whitespace-normal"
                                    href={repo.url}
                                    target="_blank"
                                  >
                                    <i className="fa-solid fa-download"></i>
                                  </a>
                                </button>
                              </div>
                            </div>
                          </div>

                          <p className="whitespace-normal">{repo.desc}</p>
                          <p className="whitespace-normal">[ {repo.lang} ]</p>
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
