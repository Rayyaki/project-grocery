import { Center, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/SVG/2.svg";

export default function ProtectedPage({
  children,
  needLogin,
  guestOnly,
  adminOnly,
}) {
  const userSelector = useSelector((state) => state.auth);
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log(userSelector);

    if (guestOnly && userSelector.role) {
      if (userSelector.role == "ADMIN" || userSelector.role == "SUPER ADMIN") {
        return nav("/dashboard");
      } else {
        return nav("/");
      }
    } else if (needLogin && !userSelector.role) {
      return nav("/");
    } else if (
      (guestOnly && adminOnly && userSelector.role != "ADMIN") ||
      (guestOnly && adminOnly && userSelector.role != "SUPER ADMIN")
    ) {
      return nav("/");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [userSelector]);

  return (
    <>
      {loading ? (
        <Center
          h={"100vh"}
          w={"100%"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
        >
          <Image src={logo} w={"30%"} h={"30%"} />
        </Center>
      ) : (
        children
      )}
    </>
  );
}
