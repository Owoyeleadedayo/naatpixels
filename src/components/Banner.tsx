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
          px={"60px"}
          py={"40px"}
          flexDir={"column"}
          gap={"30px"}
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
              <Flex width={"40px"} height={"40px"}>
                <Image
                  src={GPS}
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                  alt="gps"
                />
              </Flex>
              <Flex pt={"10px"}>
                <Text fontFamily={"Ubuntu"} fontWeight={400}>
                  Lagos, Nigeria
                </Text>
              </Flex>
            </Flex>
          </motion.div>
          <Flex gap={"30px"}>
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
                <Heading fontFamily={"Ubuntu"} textTransform={"uppercase"}>
                  I’m Naat – a passionate photographer with over 4 years of
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
              <Flex pt={"70px"}>
                <Text fontFamily={"Ubuntu"}>
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
            <Flex position={'relative'}>
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
