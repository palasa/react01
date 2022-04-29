import { useColorMode, IconButton } from '@chakra-ui/react';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ChangeColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === 'light' ? <BsMoon /> : <BsSun />}
      onClick={toggleColorMode}
      colorScheme="teal"
      borderRadius="5"
      mr={5}
      mt={5}
    />
  );
}
