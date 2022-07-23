import { Link } from '../../forward/Link'

import { Image } from '@chakra-ui/react'

export function Logo () {
  return (
    <Link href='/'>
      <Image src='/minions.png' alt='logo' height='70px' />
    </Link>
  )
}
