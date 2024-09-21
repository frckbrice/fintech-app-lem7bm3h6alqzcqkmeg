import * as React from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Text } from './ui/text';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from './custom-button';
import { Colors } from '@/constants';
import { TestTube } from 'lucide-react-native';


type ButtonProps = {
    handlePress: () => void,
    containerStyles?: string,
    icons?: typeof Ionicons.defaultProps;
}

function CustomDropdown({ handlePress, containerStyles, icons }: ButtonProps) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className='flex flex-col justify-center  '>
                <Button
                    variant='secondary'
                    className={containerStyles}
                >
                    <Ionicons name={icons} size={30} color={Colors.dark}
                    />
                </Button>

                {/* <Text className="absolute">More</Text> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent className='border-0 w-32 mx-2 bg-white gap-0'>
                <DropdownMenuItem className='justify-between flex my-0 ' key={"statement"} >
                    <Text>Statement</Text>
                    <Ionicons name={'list-outline'} size={20} color={Colors.dark}
                    />
                </DropdownMenuItem>

                <DropdownMenuSeparator className="w-full h-[0.5] bg-black-100" />

                <DropdownMenuItem className='justify-between flex my-0 '>
                    <Text>Statement</Text>
                    <Ionicons name={'arrow-undo-circle-outline'} size={20} color={Colors.dark}
                    />
                </DropdownMenuItem>

                <DropdownMenuSeparator className="w-full h-[0.5] bg-black-100" />

                <DropdownMenuItem className='justify-between flex my-0 ' key={"background"} >
                    <Text>Background</Text>
                    <Ionicons name={'logo-python'} size={20} color={Colors.dark}
                    />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default CustomDropdown;