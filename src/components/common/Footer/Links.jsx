import {
  Grid,
  VStack,
  Text
} from '@chakra-ui/react'

import { Link } from '../../forward/Link'

const groups = [
  {
    name: '',
    links: [
      { name: '', href: '' }
    ]
  }
]

export function Links () {
  return (
    <Grid
      templateColumns='repeat(1, 1fr)'
      gap={{ base: '0', lg: '7' }}
      mt={{ base: '4', lg: '0' }}
      align='right'
    >
      {groups.map(group => (
        <VStack key={group.name} w='100%' align='right'>
          <VStack align='right' spacing='1'>
            {group.links.map(({ name, href }) => {
              return (
                <Link key={name} href={href}>
                  <Text
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontWeight='regular'
                    color='gray.400'
                  >
                    {name}
                  </Text>
                </Link>
              )
            })}
          </VStack>
        </VStack>
      ))}
    </Grid>
  )
}
