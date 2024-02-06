'use client'

import './RippleButton.scss'
import { MouseEventHandler, useRef } from 'react'
import { useClickRippleAnim } from '../../hooks/useClickRippleAnim'

type RippleButtonProps = {
    children: string
    onClick: MouseEventHandler
    alignSelf?: string
}

const RippleButton = ({ children, onClick, alignSelf = 'center' }: RippleButtonProps) => {
    const btnRef = useRef(null);

    useClickRippleAnim(btnRef, {});

    return (
        <div 
            style={{ alignSelf: alignSelf }} 
            onClick={onClick} 
            className='button-container'
            ref={btnRef}
        >
            <button>
                {children}
            </button>
        </div>
    )
}

export default RippleButton