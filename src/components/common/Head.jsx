import NextHead from 'next/head'

export function Head () {
  return (
    <NextHead>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </NextHead>
  )
}
