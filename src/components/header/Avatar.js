import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { getItemFromLocalStorage } from '../../utils/localStorage';
export default function LetterAvatars() {
    const name = getItemFromLocalStorage('userEmail');
    return (
        <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>{name?.slice(0, 2)}</Avatar>
        </Stack>
    );
}