import Image from "next/image";
import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from "@nextui-org/react"

export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.blue300.value
        }}>
            <Image 
                src="https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Icon"
                width={70}
                height={70}
            />
            <Link href="/" as={NextLink}>
                <Text color="white" h2>P</Text>
                <Text color="white" h3>okémon</Text>
            </Link>

            <Spacer css={{flex:1}} />
            
            <Link href="/favorites" as={NextLink}>
                <Text color="white">Favorites</Text>
            </Link>
        </div>
    )
}
