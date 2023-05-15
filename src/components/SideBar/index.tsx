import {
  blackColor,
  grayColor,
  whiteColor,
  yellowColor,
} from "@/styles/variaveis";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { CheckIcon, DownloadIcon } from "@chakra-ui/icons";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function SideBar() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      width="100%"
      py="50px"
      bg={whiteColor}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <Image
        src="/assets/logoPerfil.jpg"
        width="150"
        height="150"
        alt="José Guilherme"
        style={{ borderRadius: "50%", marginBottom: "30px" }}
      />
      <Text fontWeight="600" color={blackColor} fontSize="24px">
        José Guilherme
      </Text>
      <Text fontWeight="100">Desenvolvedor Front-End</Text>
      <Box display="flex" width="80%" justifyContent="center" marginTop="20px">
        <Link
          href="https://github.com/guilhermeoln"
          style={{
            padding: "8px",
            backgroundColor: `${yellowColor}`,
            borderRadius: "50%",
            marginRight: "8px",
          }}
          target="_blank"
        >
          <AiFillGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/joseguilhermedev/"
          style={{
            padding: "8px",
            backgroundColor: `${yellowColor}`,
            borderRadius: "50%",
          }}
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          href="/"
          style={{
            padding: "8px",
            backgroundColor: `${yellowColor}`,
            borderRadius: "50%",
            marginLeft: "8px",
          }}
          target="_blank"
        >
          <AiOutlineWhatsApp />
        </Link>
      </Box>
      <Box
        width="80%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        marginTop="30px"
      >
        <Text color={blackColor} fontSize="20px" fontWeight="600">
          Skills
        </Text>
        <Box display="flex" py="8px" alignItems="center">
          <CheckIcon color={yellowColor} fontSize="14px" />
          <Text color={grayColor} fontSize="15px" marginLeft="5px">
            ReactJS/NextJS
          </Text>
        </Box>
        <Box display="flex" py="8px" alignItems="center">
          <CheckIcon color={yellowColor} fontSize="14px" />
          <Text color={grayColor} fontSize="15px" marginLeft="5px">
            StyledComponents/ChakraUI
          </Text>
        </Box>
        <Box display="flex" py="8px" alignItems="center">
          <CheckIcon color={yellowColor} fontSize="14px" />
          <Text color={grayColor} fontSize="15px" marginLeft="5px">
            SASS/CSS
          </Text>
        </Box>
        <Box display="flex" py="8px" alignItems="center">
          <CheckIcon color={yellowColor} fontSize="14px" />
          <Text color={grayColor} fontSize="15px" marginLeft="5px">
            JavaScript/TypeScript
          </Text>
        </Box>
        <Box display="flex" py="8px" alignItems="center">
          <CheckIcon color={yellowColor} fontSize="14px" />
          <Text color={grayColor} fontSize="15px" marginLeft="5px">
            Redux/ReduxToolkit
          </Text>
        </Box>
        <Box display="flex" py="8px" alignItems="center">
          <CheckIcon color={yellowColor} fontSize="14px" />
          <Text color={grayColor} fontSize="15px" marginLeft="5px">
            ContextAPI
          </Text>
        </Box>
        <Box display="flex" py="8px" alignItems="center">
          <CheckIcon color={yellowColor} fontSize="14px" />
          <Text color={grayColor} fontSize="15px" marginLeft="5px">
            React Recoil
          </Text>
        </Box>
        <Box display="flex" py="8px" alignItems="center">
          <CheckIcon color={yellowColor} fontSize="14px" />
          <Text color={grayColor} fontSize="15px" marginLeft="5px">
            ContextAPI
          </Text>
        </Box>
        <Box display="flex" py="8px" alignItems="center">
          <CheckIcon color={yellowColor} fontSize="14px" />
          <Text color={grayColor} fontSize="15px" marginLeft="5px">
            GIT
          </Text>
        </Box>
      </Box>
      <Button
        width="80%"
        bg={yellowColor}
        py="10px"
        color={blackColor}
        fontWeight="600"
        marginTop="20px"
        leftIcon={<DownloadIcon />}
      >
        DOWNLOAD CV
      </Button>
    </Flex>
  );
}
