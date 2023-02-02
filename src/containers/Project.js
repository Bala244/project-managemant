import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getAllProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  // Get all products api call
  const getAllProjects = () => {
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchQuery: searchInput }),
    };
    fetch("http://localhost:3000/api/project/all", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  };
  const projectSearch = (searchValue) => {
    setSearchInput(searchValue);
  };

  // add new project
  const projectForm = (e) => {
    e.preventDefault();
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: title, description: description }),
    };
    fetch("http://localhost:3000/api/project/add", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setOpen(false);
        setTitle("");
        setDescription("");
        getAllProjects();
      });
  };

  return (
    <div>
      <div className="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:px-8">
        <div className="container mx-auto h-full">
          <div className="lg:flex items-center justify-between mb-4">
            <h3 className="mb-4 lg:mb-0 main-title">Project List</h3>
            <div className="flex flex-col md:flex-row md:items-center gap-1">
              <span className="input-wrapper ">
                <div className="input-suffix-start">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    className="text-lg"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  className="input input-sm h-9 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => projectSearch(e.target.value)}
                ></input>
              </span>
              <button
                className="button bg-indigo-50 dark:bg-indigo-500 dark:bg-opacity-20 hover:bg-indigo-100 dark:hover:bg-indigo-500 dark:hover:bg-opacity-30 active:bg-indigo-200 dark:active:bg-indigo-500 dark:active:bg-opacity-40 text-indigo-600 dark:text-indigo-50 radius-round h-9 px-3 py-2 text-sm"
                onClick={() => setOpen(true)}
              >
                <span className="flex items-center justify-center">
                  <span className="text-lg">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ltr:ml-1 rtl:mr-1">New Project</span>
                </span>
              </button>
            </div>
          </div>
          {projects.length > 0 ? (
            <div className="mt-6 h-full flex flex-col">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {projects.map((project) => (
                  <ProjectCard
                    project={project}
                    getAllProjects={getAllProjects}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="no-projects text-center mt-15">
              No Project Found. please use the add new button to add new project
            </div>
          )}
        </div>
      </div>
      {open && (
        <div
          id="defaultModal"
          tabIndex={-1}
          className={` fixed dialog-container top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
        >
          <div className="mx-auto relative w-full h-full max-w-lg	 md:h-auto">
            <div className="relative dialog-content bg-white rounded-lg shadow">
              <div className="flex items-start justify-between p-4 rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add new project
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form action="#" onSubmit={projectForm}>
                <div className="px-6">
                  <div className="mt-4">
                    <div className="form-container vertical">
                      <div className="form-item vertical">
                        <label className="form-label mb-2">Title</label>
                        <div className>
                          <input
                            className="input input-form input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                            type="text"
                            name="title"
                            autoComplete="off"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-item vertical invalid">
                        <label className="form-label mb-2">Content</label>
                        <div className>
                          <textarea
                            className="input-textarea input-form input input-invalid input-textarea"
                            type="text"
                            name="content"
                            autoComplete="off"
                            placeholder="Enter content"
                            spellCheck="false"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center px-6 pb-6 space-x-2  border-gray-200 rounded-b">
                  <button
                    className="button bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white radius-round h-11 px-8 py-2 w-full"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
