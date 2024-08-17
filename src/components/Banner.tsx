import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import GPS from '../assets/Images/gps.png'
import Ban from "../assets/Images/20240813_193220_187.jpg"
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
  return (
    <>
      <motion.div>
        <Flex
          bgColor={"#f1f2f3"}
          width={"100%"}
          height={"100%"}
          px={{ lg: "60px", base: "20px" }}
          py={"40px"}
          flexDir={"column"}
          gap={{ lg: "30px", base: "10px" }}
          pt={"80px"}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 0.5,
              duration: 0.7,
              stiffness: 200,
            }}
            viewport={{ once: true }}
          >
            <Flex>
              <Flex
                width={{ lg: "40px", base: "30px" }}
                height={{ lg: "40px", base: "30px" }}
              >
                <Image
                  src={GPS}
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                  alt="gps"
                />
              </Flex>
              <Flex pt={{ lg: "10px", base: "8px" }}>
                <Text
                  fontFamily={"Ubuntu"}
                  fontWeight={400}
                  fontSize={{ lg: "16px", base: "13px" }}
                >
                  Lagos, Nigeria
                </Text>
              </Flex>
            </Flex>
          </motion.div>
          <Flex
            flexDirection={{ lg: "row", base: "column" }}
            gap={{ lg: "30px", base: "10px" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: "easeInOut",
                delay: 0.8,
                duration: 0.9,
              }}
              viewport={{ once: true }}
            >
              <Flex>
                <Heading fontSize={{lg: "29px", base: "18px"}} fontFamily={"Ubuntu"} textTransform={"uppercase"}>
                  Hi, I’m Naat – a passionate photographer with over 4 years of
                  experience, dedicated to capturing compelling and visually
                  stunning imagery.
                </Heading>
              </Flex>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: "easeInOut",
                delay: 0.8,
                duration: 0.9,
              }}
              viewport={{ once: true }}
            >
              <Flex pt={{lg:"40px", base: "0px"}}>
                <Text fontFamily={"Ubuntu"} fontSize={{lg: "17px", base: "16px"}} fontWeight={500}>
                  Welcome to my portfolio! I’m passionate about working on
                  diverse projects and am open to freelance opportunities. Take
                  a look at my work, and feel free to reach out to discuss how
                  we can collaborate.
                </Text>
              </Flex>
            </motion.div>
          </Flex>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              delay: 0.8,
              duration: 0.9,
            }}
            viewport={{ once: true }}
          >
            <Flex position={"relative"}>
              <Image
                src={Ban}
                width={"100%"}
                height={"100%"}
                objectFit={"cover"}
              />
              <Box
                position={"absolute"}
                top={"0px"}
                left={"0px"}
                width={"100%"}
                height={"100%"}
                bgGradient={
                  "linear(to-b, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
                }
                zIndex={1}
              />
            </Flex>
          </motion.div>
        </Flex>
      </motion.div>
    </>
  );
}

export default Banner;
