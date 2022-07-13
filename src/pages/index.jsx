import { Footer } from '../components/common/Footer'
import { SEO } from '../components/forward/SEO'
import { Container, Section } from '../styles/pages/home'
import { Header } from '../components/common/Header'

import Lottie from 'react-lottie'
import discordJson from '../../public/discord.json'
import friendlyJson from '../../public/friendly.json'
import botJson from '../../public/bot.json'
import vipJson from '../../public/vip.json'
import {
  useBreakpointValue,
  Text,
  Heading,
  Box,
  Button,
  Avatar,
  VStack,
  Link,
  Tag,
  HStack,
  Center
} from '@chakra-ui/react'

export default function Home () {
  const isLgBreakpoint = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <>
      <SEO />

      <Container>
        <Section>
          <Header />
          <Box mt='20px'>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: discordJson
              }}
              isClickToPauseDisabled
              style={{ maxWidth: '500px', cursor: 'default' }}
              display={{ base: 'none', lg: 'initial' }}
            />
          </Box>
          <Heading color='white' align='center' p='15px'>
            Resenha, um simples servidor do Discord!
          </Heading>
          <HStack m='auto' mb='20px'>
            <Link href='/discord' isExternal>
              <Button
                bg='#454FBF'
                _hover={{ background: 'indigo' }}
                color='white'
              >
                Convite!
              </Button>
            </Link>
            <Link href='/#sobre'>
              <Button bg='yellow' _hover={{ background: 'yellow.300' }}>
                Conte-me mais!
              </Button>
            </Link>
          </HStack>
          <Box bg='yellow' ml='auto' mr='auto' w='30%' h='1px' mb='15px' />
          <Section id='sobre'>
            <Heading
              color='white'
              align='center'
              p={{ base: '5px', xl: '15px' }}
              bg='#2C2F33'
              borderRadius='50px'
              w='fit-content'
              size={{ base: 'md', xl: 'xl' }}
              m='auto'
              fontFamily='Pontano Sans'
              borderColor='transparent'
            >
              #〟📜・sobre-o-servidor
            </Heading>
            <Center display={{ base: 'unset', xl: 'flex' }}>
              <Box>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: friendlyJson
                  }}
                  isClickToPauseDisabled
                  style={{ maxWidth: '400px', cursor: 'default' }}
                  display={{ base: 'none', lg: 'initial' }}
                />
              </Box>
              <Text
                bg='#2C2F33'
                borderRadius='50px'
                p='5'
                color='gray.300'
                textAlign='center'
                align='center'
                m={{ base: 'auto', xl: '0' }}
                mb='30px'
                maxW={{ base: '90%', xl: '40%' }}
              >
                {' '}
                <Center>
                  <HStack mb='10px'>
                    {' '}
                    <Avatar src='/luvinhas.png' />
                    <Text color='white'>Luvinhas</Text>
                  </HStack>
                </Center>
                O servidor Resenha é um servidor de comunidade, com uma
                comunidade amigável, onde você pode jogar, conversar e fazer
                amizades com outras pessoas dentro da plataforma Discord!
              </Text>
            </Center>
            <Heading
              color='white'
              align='center'
              p={{ base: '5px', xl: '15px' }}
              bg='#2C2F33'
              borderRadius='50px'
              w='fit-content'
              size={{ base: 'md', xl: 'xl' }}
              m='auto'
              fontFamily='Pontano Sans'
              borderColor='transparent'
            >
              #〟🤖・bots
            </Heading>
            <Center display={{ base: 'unset', xl: 'flex' }}>
              <Text
                bg='#2C2F33'
                borderRadius='50px'
                p='5'
                color='gray.300'
                textAlign='center'
                align='center'
                m={{ base: 'auto', xl: '0' }}
                mt='20px'
                maxW={{ base: '90%', xl: '40%' }}
              >
                <Center>
                  <HStack mb='10px'>
                    {' '}
                    <Avatar src='/guhh.png' />
                    <Text color='white'>{'guhh<3'}</Text>
                  </HStack>
                </Center>
                Nós também temos vários robôs para a diversão da nossa
                comunidade como Mudae, Loritta, Alfacusa, Pokétwo e entre
                outros. Também temos o nosso próprio bot chamado Déjà vu, onde o
                mesmo conversa com usuários e tem um sistema de economia.
              </Text>
              <Box mr='10px'>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: botJson
                  }}
                  isClickToPauseDisabled
                  style={{
                    width: '450%',
                    maxWidth: '300px',
                    cursor: 'default'
                  }}
                  display={{ base: 'none', lg: 'initial' }}
                />
              </Box>
            </Center>
            <Heading
              color='white'
              align='center'
              p={{ base: '5px', xl: '15px' }}
              bg='#2C2F33'
              borderRadius='50px'
              w='fit-content'
              size={{ base: 'md', xl: 'xl' }}
              m='auto'
              fontFamily='Pontano Sans'
              borderColor='transparent'
            >
              #〟💸・seja-vip
            </Heading>
            <Center display={{ base: 'unset', xl: 'flex' }}>
              <Box p='10px' mr={{ base: '0', xl: '150px' }}>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: vipJson
                  }}
                  isClickToPauseDisabled
                  style={{
                    width: '400%',
                    maxWidth: '300px',
                    cursor: 'default'
                  }}
                  display={{ base: 'none', lg: 'initial' }}
                />
              </Box>
              <Text
                bg='#2C2F33'
                borderRadius='50px'
                p='5'
                color='gray.300'
                textAlign='center'
                align='center'
                m={{ base: 'auto', xl: '0' }}
                mb='30px'
                maxW={{ base: '90%', xl: '40%' }}
              >
                <Center>
                  <HStack mb='10px'>
                    {' '}
                    <Avatar src='/kuriel.png' />
                    <Text color='white'>Kuriel</Text>
                  </HStack>
                </Center>
                Nós também temos um sistema para você ser uma pessoa VIP em
                nosso servidor! Esses podem ser comprados através da moeda
                virtual sonhos no Bot Loritta, e podem dar vantagens como a
                permissão de enviar GIFs dentro do nosso chat geral, adicionar
                reações e anexar arquivos!
              </Text>
            </Center>
          </Section>
        </Section>
        <Footer />
      </Container>
    </>
  )
}
