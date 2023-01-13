const ProjectCard = (props) => (
  <div>
    {
      <div className="card card-border">
        <div className="card-body h-full">
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between">
              <a href="/product-detail/{props.task.task}">
                <h6 className="card-title">{props.task.task}</h6>
              </a>
              <div className="dropdown">
                <div
                  className="dropdown-toggle"
                  id="dropdown-toggle-873-eVCGyHdcfE"
                >
                  <button className="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-circle h-7 w-7 inline-flex items-center justify-center text-base">
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
              </div>
            </div>
            <p className="mt-4">
              Most of you are familiar with the virtues of a programmer
            </p>
          </div>
        </div>
      </div>
    }
  </div>
);

export default ProjectCard;
