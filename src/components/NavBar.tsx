import { Button, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Logo from '../assets/Images/Naat2.png'
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"60px"}
        bgColor={"black"}
        justify={"space-between"}
        px={"60px"}
        position={"fixed"}
        zIndex={1000}
      >
        <Flex width={"120px"} height={"60px"}>
          <Image
            src={Logo}
            width={"100%"}
            height={"100%"}
            objectFit={"contain"}
            alt="logo"
          />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} gap={"30px"}>
          <Link
            href={"/"}
            fontFamily={"Ubuntu"}
            fontSize={"18px"}
            color={"#f1f2f3"}
            justifyContent={"center"}
            alignItems={"center"}
            _hover={{ textDecoration: "none", color: "white" }}
          >
            Home
          </Link>
          <Flex flexDirection={"row"}>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<IoIosArrowDown />}
                bgColor={"black"}
                color={"#f1f2f3"}
                fontFamily={"Ubuntu"}
                fontSize={"18px"}
                fontWeight={400}
                justifyContent={"center"}
                alignItems={"center"}
                _hover={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "black",
                }}
              >
                <Link href={"/projects"}>All Projects</Link>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link
                    href={"/portrait"}
                    color={"black"}
                    fontFamily={"Ubuntu"}
                    fontSize={"18px"}
                    fontWeight={400}
                    _hover={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Portrait
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href={"/wedandbridal"}
                    color={"black"}
                    fontFamily={"Ubuntu"}
                    fontSize={"18px"}
                    fontWeight={400}
                    _hover={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Wedding ~ Bridals
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href={"/lifestyle"}
                    color={"black"}
                    fontFamily={"Ubuntu"}
                    fontSize={"18px"}
                    fontWeight={400}
                    _hover={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Lifestyle
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href={"/kiddies"}
                    color={"black"}
                    fontFamily={"Ubuntu"}
                    fontSize={"18px"}
                    fontWeight={400}
                    _hover={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Kiddies
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Link
            href={"/aboutMe"}
            fontFamily={"Ubuntu"}
            fontSize={"18px"}
            color={"#f1f2f3"}
            justifyContent={"center"}
            alignItems={"center"}
            _hover={{ textDecoration: "none", color: "white" }}
          >
            About Me
          </Link>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Link
              href="/contact"
              textDecoration={"none"}
              _hover={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Button
                border={"1px solid white"}
                variant={"outline"}
                color={"white"}
                transition="color 0.4s ease-in"
                _hover={{
                  bg: "white",
                  color: "black",
                }}
              >
                Contact
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
