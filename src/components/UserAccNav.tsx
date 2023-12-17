import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const UserAccNav = (props: Props) => {
  const pathname = usePathname();
  let isUser = true;

  if (pathname == "/" || pathname == "/signin" || pathname == "/signup") {
    isUser = false;
  }
  return (
    <div>
      <div className="flex items-center justify-start gap-2 p-2">
        <div className="flex flex-col space-y-1 leading-none">
          {isUser ? (
            <>
              <p className="font-medium">{"Logged In"}</p>
            </>
          ) : (
            <>
              <p className="font-medium">{"Not Logged In"}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAccNav;
