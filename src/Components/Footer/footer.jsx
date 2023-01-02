import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaGithub, FaMailBulk, FaLinkedinIn } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallCentered() {
    return (
      <Box
        bg={useColorModeValue('#ffb301', 'ffb301')}
        color={useColorModeValue('gray.700', 'gray.200')}
        style={{marginTop:"160px"}}
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Stack direction={'row'} spacing={6}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About me</Link>
            <Link href={'/skills'}>Skills</Link>
            <Link href={'/projects'}>Projects</Link>
            <Link href={'/gitStats'}>Git Stats</Link>
            <Link href={'/contact'}>Contact</Link>


          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2022 Designed & built by Karmit verma. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Mail'} href={'mailto:karmittech2004@gmail.com'}>
                <FaMailBulk />
              </SocialButton>
              <SocialButton label={'LinkediN'} href={'https://www.linkedin.com/in/karmit2004/'}>
                <FaLinkedinIn />
              </SocialButton>
              <SocialButton label={'GitHub'} href={'https://github.com/Karmitverma29'}>
                <FaGithub />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }