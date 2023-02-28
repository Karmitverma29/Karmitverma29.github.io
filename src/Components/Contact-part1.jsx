import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


export default function ContactFormWithSocialButtons() {
  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <Flex
      align="center"
      justify="center"
      css={{
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 28 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
              style={{
                color: "black",
                textDecoration: "underline",
                textDecorationColor: "#ffb301",
              }}
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "column", md: "row" }}
              >
                <Link href="mailto:karmittech2004@gmail.com">
                  <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="xl"
                      fontSize="4xl"
                      icon={<MdEmail size="60px" />}
                      _hover={{
                        bg: "#ffb301",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>
                </Link>

                <Link href="https://github.com/Karmitverma29">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="xl"
                    fontSize="4xl"
                    icon={<BsGithub size="60px" />}
                    _hover={{
                      bg: "#ffb301",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.linkedin.com/in/karmit2004/">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="xl"
                    icon={<BsLinkedin size="60px" />}
                    _hover={{
                      bg: "#ffb301",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box align="center">
                <Text fontSize="xl" fontWeight="semibold">
                  Contact Me
                </Text>
                <Link href="tel:+918875082247">
                  <Text fontSize="2xl" fontWeight="bold">
                    +91 88750 82247
                  </Text>
                </Link>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
