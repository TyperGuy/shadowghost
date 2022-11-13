import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: `'Nunito Sans', sans-serif `,
  },
  colors: {
    brand: {
      50: '#222',
      500: '#222',
      900: '#171923',
    }
  }
})

export default theme