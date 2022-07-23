import { VStack, Text, Box, Link, Image, HStack } from '@chakra-ui/react'

export function Brand () {
  return (
    <VStack spacing='6' textAlign={{ base: 'center', lg: 'unset' }}>
      <VStack mt='5px' spacing='1' align='unset'>
        <Box m={{ base: 'auto', xl: '0' }}>
          <HStack>
            <Image
              borderRadius='50px'
              src='/minions.png'
              alt='logo'
              height='30px'
              zIndex='1'
            />
            <Text fontFamily='Barlow' fontSize='24' color='yellow'>
              Banana Frita
            </Text>
          </HStack>
        </Box>
        <Text fontFamily='sans-serif' fontSize='16' color='white'>
          © {new Date().getFullYear()} Banana Frita - Design feito por{' '}
          <Link
            href='https://kurieldev.tk'
            isExternal
            color='yellow'
            _hover={{ color: 'yellow.300' }}
          >
            Kuriel
          </Link>, <Text color="yellow" as="pq">Kaze</Text> e <Text color="yellow" as="pq">Caiuuuu</Text>
        </Text>
      </VStack>
    </VStack>
  )
}
