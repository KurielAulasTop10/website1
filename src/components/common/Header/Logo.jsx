import { Link } from '../../forward/Link'

import { Image } from '@chakra-ui/react'

export function Logo () {
  return (
    <Link href='/'>
      <Image borderRadius='50px' src='/logo.gif' alt='logo' width='70px' height='70px' />
    </Link>
  )
}
