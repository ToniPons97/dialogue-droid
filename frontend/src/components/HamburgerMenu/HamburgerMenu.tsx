'use client'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'


type HamburgerMenuProps = {
    className?: string
}

export default function HamburgerMenu({ className }: HamburgerMenuProps) {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <div className={className}>
                    <IconButton
                        {...bindTrigger(popupState)}
                        size="large"
                        sx={{ ml: 2, color: 'white' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu  {...bindMenu(popupState)} variant='selectedMenu'>
                        <MenuItem onClick={popupState.close}>
                            Home
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                            Company
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                            Sign Up
                        </MenuItem>
                    </Menu>
                </div>
            )}
        </PopupState>
    )
}