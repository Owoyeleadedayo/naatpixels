import { Button, Flex, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <>
      <motion.div>
        <Flex
          bgColor={"#f1f2f3"}
          width={"100%"}
          height={"100%"}
          px={"60px"}
          py={"40px"}
          flexDir={"row"}
          gap={"30px"}
          pt={"125px"}
        >
          <Flex width={"50%"}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: "easeInOut",
                delay: 0.5,
                duration: 0.7,
                stiffness: 200,
              }}
              viewport={{ once: true }}
            >
              <Flex flexDirection={"column"} gap={"20px"}>
                <Heading fontFamily={"Ubuntu"} textTransform={"uppercase"}>
                  are you interested in collaboration? let's get in touch
                </Heading>
                <Flex flexDirection={"column"}>
                  <Text fontFamily={"Ubuntu"} textTransform={"capitalize"}>
                    Get in Touch with me
                  </Text>
                  <Text fontFamily={"Ubuntu"} fontSize={"16px"}>
                    naatpixels@gmail.com
                  </Text>
                </Flex>
              </Flex>
            </motion.div>
          </Flex>
          <Flex width={"50%"} flexDirection={"column"}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: "easeInOut",
                delay: 0.2,
                duration: 0.9,
                stiffness: 200,
              }}
              viewport={{ once: true }}
            >
              <Text fontFamily={"Ubuntu"} fontStyle={"italic"} mb={2}>
                // Send a message
              </Text>
              <Input
                borderColor={"grey"}
                focusBorderColor="black"
                color={"gray"}
                fontFamily={"Ubuntu"}
                fontSize={"16px"}
                mb={2}
                placeholder="Enter Name"
              />
              <Input
                type="email"
                borderColor={"grey"}
                focusBorderColor="black"
                color={"gray"}
                fontFamily={"Ubuntu"}
                fontSize={"16px"}
                mb={2}
                placeholder="Enter Email Address"
              />
              <Textarea
                borderColor={"grey"}
                focusBorderColor="black"
                color={"gray"}
                height={"80px"}
                fontFamily={"Ubuntu"}
                fontSize={"16px"}
                mb={2}
                placeholder="Enter Message"
              />
              <Flex>
                <motion.div
                  //   whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    border={"1px solid grey"}
                    bgColor={"black"}
                    color={"white"}
                    width={"100px"}
                    transition="color 0.4s ease-in"
                    _hover={{
                      bg: "white",
                      color: "black",
                    }}
                  >
                    Send
                  </Button>
                </motion.div>
              </Flex>
            </motion.div>
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
}

export default Contact;
