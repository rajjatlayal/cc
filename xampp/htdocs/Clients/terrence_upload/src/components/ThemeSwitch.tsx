import React,{ReactNode } from 'react';
import { useTranslation } from 'react-i18next'
import {
  Box,
  Flex,
  Avatar,
  Text,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Container,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import eventBus from "../eventBus";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation()

  React.useEffect(() => {
    eventBus.dispatch("changeTheme", { message: colorMode});
    localStorage.setItem('theme',colorMode);
  },[colorMode]);

  return (
    <>
      <Box
      paddingBottom={20}
      bg={useColorModeValue('#001324', '#f1f1f1')} px={4}>
          <Container maxW={'7xl'}
             borderTopWidth={1}
             borderStyle={'solid'}
             borderColor={'#696b6c'} className="theme_div">
           
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Text paddingTop={10} fontFamily={'poppins'}color={useColorModeValue('#a1a1a1', '#000')}>{t('footer_text1')} <br/> {t('footer_text2')}</Text>
        

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>

            {colorMode === 'dark' ?
              (<p className="theme_switch"><span className='light_theme_icon'><SunIcon /></span><span className='dark_theme_icon' onClick={toggleColorMode}><MoonIcon /></span></p>)
              :
              (<p className="theme_switchh"><span className='light_theme_iconn' onClick={toggleColorMode}><SunIcon /></span><span className='dark_theme_iconn'><MoonIcon /></span></p>)}

              {/* <Button onClick={toggleColorMode} color={useColorModeValue('gray.300', '#000')} className={colorMode === 'light' ? 'dark_theme_btn' : 'light_theme_btn'}
               >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}

              {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> */}
            </Stack>
          </Flex>
        </Flex>
        </Container>
      </Box>
    </>
  );
}