import { Button, Flex, Image, Link } from "@chakra-ui/react";
import Logo from '../assets/Images/Naat2.png'

const NavBar = () => {
  const nav = [
    { link: "/projects", name: "All Projects" },
    { link: "/aboutMe", name: "About Me" }
  ];
  return (
    <>
      <Flex
        width={"100%"}
        height={"60px"}
        bgColor={"black"}
        justify={"space-between"}
        px={"60px"}
        // py={"20px"}
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
        <Flex justifyContent={"center"} alignItems={"center"} gap={"50px"}>
          {nav.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              fontFamily={"Ubuntu"}
              fontSize={"18px"}
              color={"white"}
              justifyContent={"center"}
              alignItems={"center"}
              _hover={{ textDecoration: "none" }}
            >
              {item.name}
            </Link>
          ))}
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
