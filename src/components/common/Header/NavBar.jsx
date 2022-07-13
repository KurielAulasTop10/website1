import { HStack, VStack, Center, Link, Text } from '@chakra-ui/react'

const links = [
  {
    title: 'Convite',
    href: '/discord',
    external: true
  },
  {
    title: 'Sobre',
    href: '/#sobre',
    external: false
  },
  {
    title: 'Forms',
    href: '/forms',
    external: false
  }
]

export function NavBar () {
  return (
    <>
      <HStack as='nav' spacing='7' display={{ base: 'none', lg: 'contents' }}>
        {links.map(({ title, href, external }) => (
          <Link
            key={title}
            display='flex'
            align='center'
            href={href}
            style={{ textDecoration: 'none' }}
            isExternal={external}
          >
            <Text
              ml='4'
              color='gray.400'
              fontSize='lg'
              fontFamily='Barlow'
              fontWeight='medium'
              _hover={{ color: 'white' }}
            >
              {title}
            </Text>
          </Link>
        ))}
      </HStack>
      <VStack
        as='navmobile'
        spacing='3'
        display={{ base: 'contents', lg: 'none' }}
      >
        {links.map(({ title, href, external }) => (
          <Center key={title}>
            <Link
              key={title}
              display='flex'
              align='center'
              href={href}
              style={{ textDecoration: 'none' }}
              isExternal={external}
            >
              <Text
                ml='4'
                color='gray.400'
                fontSize='lg'
                fontFamily='Barlow'
                fontWeight='medium'
                _hover={{ color: 'white' }}
              >
                {title}
              </Text>
            </Link>
          </Center>
        ))}
      </VStack>
    </>
  )
}
