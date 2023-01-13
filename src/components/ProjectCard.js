import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  const [open, setOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [projectId, setProjectId] = useState("");
  const btnRef = useRef();
  useEffect(() => {
    const closeDropdown = (e) => {
      // console.log(btnRef.current);
      if (btnRef.current && !btnRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);
    // console.log(props.getAllProjects);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const deleteProject = (e) => {
    e.preventDefault();

    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: projectId,
      }),
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/project/delete", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setProjectId();
        setDeleteModal(false);
        props.getAllProjects();
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      {
        <div className="card card-border">
          <div className="card-body h-full project-card">
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-between">
                <Link to={`/product-detail/${props.project._id}`}>
                  <h6 className="card-title">{props.project.name}</h6>
                </Link>
                <div className="dropdown" ref={btnRef}>
                  <div
                    className="dropdown-toggle"
                    id="dropdown-toggle-873-eVCGyHdcfE"
                  >
                    <button
                      className="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-circle h-7 w-7 inline-flex items-center justify-center text-base"
                      onClick={() => setOpen(!open)}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <ul
                    id="base-menu-124-eIThs96oYp"
                    className={`dropdown-menu bottom-end ${
                      open ? "block" : "hidden"
                    }`}
                    style={{
                      opacity: 1,
                      visibility: "visible",
                      transform: "rotateX(0deg)",
                    }}
                  >
                    <li
                      className="menu-item menu-item-dark menu-item-hoverable"
                      style={{ height: "35px" }}
                    >
                      <span className="text-base">
                        <i className="fa-regular fa-pen-to-square"></i>
                      </span>
                      <span className="ml-2 rtl:mr-2">Edit</span>
                    </li>
                    <li
                      className="menu-item menu-item-dark menu-item-hoverable text-red-500 hover:text-white-500 hover:bg-red-500"
                      style={{ height: "35px" }}
                      onClick={() => {
                        setDeleteModal(true);
                        setProjectId(props.project._id);
                      }}
                    >
                      <span className="text-base">
                        <i className="fa-regular fa-trash-can"></i>
                      </span>
                      <span className="ml-2 rtl:mr-2">Delete</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">{props.project.description}</p>
              {deleteModal && (
                <div
                  id="defaultModal"
                  tabIndex={-1}
                  className={` fixed dialog-container top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
                >
                  <div className="mx-auto relative w-full h-full max-w-lg	 md:h-auto">
                    <div className="relative dialog-content bg-white rounded-lg shadow">
                      <div className="flex items-start justify-between p-4 rounded-t">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Delete Project
                          </h3>
                          <p className="mt-5">
                            Are you sure you want to delete this Project? All
                            the tickets under this Project will be deleted as
                            well. This action cannot be undone.
                          </p>
                        </div>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="defaultModal"
                          onClick={() => {
                            setDeleteModal(false);
                            setProjectId();
                          }}
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
                      <form action="#" onSubmit={deleteProject}>
                        <div className="flex items-center px-6 pb-6 space-x-2  border-gray-200 rounded-b">
                          <button
                            className="button bg-red-600 hover:bg-red-500 active:bg-red-700 text-white radius-round h-11 px-8 py-2 w-full"
                            type="submit"
                          >
                            Delete
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ProjectCard;
