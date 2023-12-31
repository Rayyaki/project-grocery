import { Box, Flex, Icon } from "@chakra-ui/react";
import "../css/indexR.css";
import { RiDashboardFill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsCartCheckFill } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";
import { BsAlexa } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function DashboardSidebarItem() {
  const nav = useNavigate();
  return (
    <>
      <Flex
        h={"auto"}
        w={"100%"}
        flexDir={"column"}
        borderBottom={"1px solid #E2DADA"}
      >
        <Flex className="flex-item-sidebarR" mt={"15%"}>
          <Icon
            p={2}
            as={RiDashboardFill}
            h={"100%"}
            w={"20%"}
            alignItems={"center"}
            onClick={() => {
              nav("/dashboard");
            }}
          ></Icon>
          <Box className="box-sidebarR">Dashboard</Box>
        </Flex>

        <Flex
          className="flex-item-sidebarR"
          onClick={() => {
            nav("/");
          }}
        >
          <Icon
            p={2}
            as={AiFillHome}
            h={"100%"}
            w={"20%"}
            alignItems={"center"}
          ></Icon>
          <Box className="box-sidebarR">Home</Box>
        </Flex>
        <Flex className="flex-item-sidebarR">
          <Icon
            p={2}
            as={BsAlexa}
            h={"100%"}
            w={"20%"}
            alignItems={"center"}
          ></Icon>
          <Box className="box-sidebarR">Products</Box>
        </Flex>
        <Flex className="flex-item-sidebarR">
          <Icon
            p={2}
            as={BiSolidCategoryAlt}
            h={"100%"}
            w={"20%"}
            alignItems={"center"}
          ></Icon>
          <Box className="box-sidebarR">Catergory</Box>
        </Flex>
        <Flex className="flex-item-sidebarR">
          <Icon
            p={2}
            as={BsCartCheckFill}
            h={"100%"}
            w={"20%"}
            alignItems={"center"}
          ></Icon>
          <Box className="box-sidebarR">Orders</Box>
        </Flex>
        <Flex className="flex-item-sidebarR">
          <Icon
            p={2}
            as={FaUserSecret}
            h={"100%"}
            w={"20%"}
            alignItems={"center"}
          ></Icon>
          <Box className="box-sidebarR">Users</Box>
        </Flex>
      </Flex>
    </>
  );
}
