import React from "react";
import { FilledButton } from "../Buttons/index";

import styles from "./Docs.scss";

const TestPage = ({ children, backURL }) => {
  return (
    <div>
      {children}
      <div className={styles.backButtonBox}>
        <hr className={styles.hr1} />
        {/* disabled (Links.scss) behaivor only in this compoentns */}
        <FilledButton
          style={{ color: "white", textDecoration: "none" }}
          to={backURL}
        >
          Back
        </FilledButton>
      </div>
    </div>
  );
};

export default TestPage;
