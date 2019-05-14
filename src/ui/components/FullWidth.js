import React from "react";
import useDimensions from "react-use-dimensions";

export default props => {
  const [pageRef, pageSize] = useDimensions();
  const [subPageRef, subPageSize] = useDimensions();
  console.log(pageSize.width, subPageSize.width);
  return (
    <div ref={subPageRef}>
      <div ref={pageRef} style={{ width: "100vw" }}>
        {pageSize.width && (
          <div
            style={{
              marginLeft: -pageSize.left,
              backgroundColor: props.backgroundColor,
            }}
          >
            {subPageSize.width && (
              <div
                style={{ width: subPageSize.width, marginLeft: pageSize.left }}
              >
                {props.children}
              </div>
            )}
            {!subPageSize.width && (
              <div ref={subPageSize} style={{ height: "100vh" }} />
            )}
          </div>
        )}
        {!pageSize.width && <div ref={pageRef} style={{ height: "100vh" }} />}
      </div>
    </div>
  );
};
