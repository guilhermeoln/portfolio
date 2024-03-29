import SideBar from "@/components/SideBar";
import { iceColor } from "@/styles/variaveis";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex width="100vw" minH="100vh">
      <Flex width="20vw">
        <SideBar />
      </Flex>
      <Flex width="80vw" bg={iceColor}></Flex>
    </Flex>
  );
}
