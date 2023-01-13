import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const ProjectDetail = () => {
  const props = useParams();
  let [nameParams, setNameParams] = useSearchParams();

  return (
    <div>
      <input
        type={"text"}
        onChange={(e) => {
          setNameParams({ test: e.target.value });
        }}
      />
    </div>
  );
};

export default ProjectDetail;
