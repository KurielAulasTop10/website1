import { Flex, Box } from '@chakra-ui/react'

import { Brand } from './Brand'
import { Links } from './Links'

export function Footer () {
  return (
    <Box as='footer'>
      <Box borderTopWidth='5px' borderTopColor='yellow' bg='#2C2F33'>
        <Flex
          w='100%'
          px='30'
          py='5'
          m='0 auto'
          flexDir={{ base: 'column', lg: 'row' }}
          align={{ base: 'unset', lg: 'center' }}
          justify='space-between'
        >
          <Brand />

          <Links />
        </Flex>
      </Box>
    </Box>
  )
}
