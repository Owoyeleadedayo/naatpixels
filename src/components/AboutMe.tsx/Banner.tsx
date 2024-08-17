import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import pics from "../../assets/Images/IMG_8574-Red.jpg"

const Banner = () => {
  const char = [
    { label: "Creative" },
    { label: "Open mindedness" },
    { label: "Positive attitude" },
    { label: "flexible" },
    { label: "on-time" },
  ];
  return (
    <>
      <Flex
        bgColor={"#f1f2f3"}
        width={"100%"}
        height={"100%"}
        px={{ lg: "60px", base: "20px" }}
        py={"40px"}
        flexDir={{ lg: "row", base: "column" }}
        gap={{ lg: "30px", base: "10px" }}
        pt={"80px"}
      >
        <Flex
          flexDirection={"column"}
          maxW={"600px"}
          gap={{ lg: "30px", base: "15px" }}
        >
          <Heading
            fontSize={{ lg: "30px", base: "18px" }}
            fontFamily={"Ubuntu"}
            textTransform={"uppercase"}
          >
            Hi, I’m Naat – a passionate photographer with over 4 years of
            experience, based in Lagos, Nigeria.
          </Heading>
          <Text fontFamily={"Ubuntu"} maxW={"400px"}>
            I have been a Professional Photographer for 3 years skilled in
            Lifestyle, Portraits, Fashion and Events Photography. My creative
            works are inspired by colors, warm - earthy tones, raw and unguarded
            emotions from my subjects, I bring the urban vibes right to your
            screen. I have also collaborated with brands on a smaller scale and
            gearing towards expanding my brand in this business of people.
          </Text>
          <Text
            fontFamily={"Ubuntu"}
            color={"grey"}
            fontStyle={"italic"}
            mb={2}
          >
            // Key Character
          </Text>
          <Flex>
            {char.map((item, index) => (
              <Button
                key={index}
                border={"1px solid black"}
                borderRadius={"50px"}
                variant={"gradient"}
                fontFamily={"Ubuntu"}
                fontWeight={400}
                textTransform={"capitalize"}
                mr={3}
              >
                {item.label}
              </Button>
            ))}
          </Flex>
        </Flex>
        <Flex position={"relative"} width={"100%"} height={"600px"}>
          <Image
            src={pics}
            width={"100%"}
            height={"100%"}
            objectFit={"contain"}
            alt="logo"
          />
          <Box
            position={"absolute"}
            top={"0px"}
            left={"0px"}
            width={"100%"}
            height={"100%"}
            bgGradient={"linear(to-b, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"}
          />
        </Flex>
      </Flex>
    </>
  );
}

export default Banner;
