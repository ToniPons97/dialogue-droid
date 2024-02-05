import { useEffect } from "react";

export const useClickRippleAnim = (el: any, config: any) => {
    const {
        size = 100,
        color = '#fff',
        duration = '800'
    } = config;


    useEffect(() => {
        const applyContainerProperty = () => el.current.classList.add('effect-container');

        const applyStyles = (ev: any) => {
            const { offsetX, offsetY } = ev;
            const { style } = el.current;

            //Half the size of --effectWidt and --effectHeight;
            const sizeOffset = size / 2;

            // console.log(offsetX - sizeOffset, offsetY - sizeOffset);

            style.setProperty('--effect-duration', `${duration}ms`);
            style.setProperty('--effect-left', `${offsetX - sizeOffset}px`);
            style.setProperty('--effect-top', `${offsetY - sizeOffset}px`);
            style.setProperty('--effect-color', color);
            style.setProperty('--effect-height', `${size}px`);
            style.setProperty('--effect-width', `${size}px`);
        }

        const onClick = (ev: any) => {
            el.current.classList.remove('active');
            applyStyles(ev);
            el.current.classList.add('active');
        }

        applyContainerProperty();

        el.current.addEventListener('mouseup', onClick);
        return () => {
            try {
                el.current.removeEventListener('mouseup', onClick);
            } catch (e) {
                // console.error(e);
            }
        }
    }, [color, duration, el.current, size]);
}