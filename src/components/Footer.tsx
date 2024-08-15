import { Divider, Flex, Image, Link, Text } from "@chakra-ui/react";
import twitter from "../assets/Images/twitter (2).png";
import instagram from '../assets/Images/instagram.png'
import tiktok from '../assets/Images/tik-tok.png'

const Footer = () => {
    const socials = [
      {
        logo: twitter,
        url: "https://twitter.com/@naatpixels",
        label: "Twitter",
      },
      {
        logo: instagram,
        url: "https://instagram.com/@naatpixels_",
        label: "Instagram",
      },
      {
        logo: tiktok,
        url: "https://www.tiktok.com/@naatshotit.ng",
        label: "TikTok",
      },
    ];

    const text = [{ label: "All rights Copyright &copy; 2024" }, {label: "NewAgeAndTimeless"}];
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        bgColor={"black"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        px={"60px"}
        py={"20px"}
        gap={"10px"}
      >
        <Flex>
          {socials.map((item, index) => (
            <Link href={item.url}>
              <Flex
                flexDir={"column"}
                pr={"30px"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <Flex key={index} width={"35px"} height={"35px"}>
                  <Image src={item.logo} width={"100%"} height={"100%"} />
                </Flex>
                <Flex>
                  <Text
                    fontFamily={"Ubuntu"}
                    color={"#f1f2f3"}
                    textAlign={"center"}
                  >
                    {item.label}
                  </Text>
                </Flex>
              </Flex>
            </Link>
          ))}
        </Flex>
        <Divider bg={"#E5E4E2"} maxW={"100%"} h={"1px"} />
        <Flex flexDirection={"column"} gap={"2px"}>
          {text.map((item, index) => (
            <Text key={index} textAlign={"center"} color={"#f1f2f3"}>
              {item.label}
            </Text>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export default Footer;
