import { VStack, Text, Box, Link, Image, HStack } from '@chakra-ui/react'

export function Brand () {
  return (
    <VStack spacing='6' textAlign={{ base: 'center', lg: 'unset' }}>
      <VStack mt='20px' spacing='1' align='unset'>
        <Box m={{ base: 'auto', xl: '0' }}>
          <Box bg='#00D100' h='10px' w='10px' borderRadius='50px' mb={{ base: '-35px', xl: '-33px' }} ml='20px' zIndex='5' />
          <HStack>
            <Image
              borderRadius='50px'
              src='/logo.gif'
              alt='logo'
              width='30px'
              height='30px'
              zIndex='1'
            />
            <Text fontFamily='Barlow' fontSize='24' color='yellow'>
              Resenha
            </Text>
          </HStack>
        </Box>
        <Text fontFamily='sans-serif' fontSize='16' color='white'>
          © {new Date().getFullYear()} Resenha - Design feito por{' '}
          <Link
            href='https://kurieldev.tk'
            isExternal
            color='yellow'
            _hover={{ color: 'yellow.300' }}
          >
            kurieldev.tk
          </Link>
        </Text>
      </VStack>
    </VStack>
  )
}
