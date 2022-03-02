import React from "react";

const BasicProps = ({ status }: { status: string }) => {
  let message;
  if (status === "loading") {
    message = "로딩중이라네";
  } else if (status === "end") {
    message = "끝이라네..";
  } else if (status === "success") {
    message = "성공이라네";
  }

  return (
    <div>
      <p>BasicProps - {message}</p>
    </div>
  );
};

export default BasicProps;
