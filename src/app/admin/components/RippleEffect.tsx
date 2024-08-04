"use client";

import { useButton,Ripple } from "@nextui-org/react";
import { forwardRef } from "react";

export type RippleEffectProps = {
    className?: string;
    children?: React.ReactNode;
}

const RippleEffect = forwardRef<any, RippleEffectProps>((props, ref) => {
        const {
            children,
            domRef,
            getButtonProps,
            getRippleProps,
        } = useButton({
            ref,
            ...props
        });

        const {ripples, onClear} = getRippleProps();

        return (
            <div className={"overflow-hidden relative cursor-pointer " + props.className} ref={domRef} {...getButtonProps()}>
                {children}
                <Ripple ripples={ripples} onClear={onClear} />
            </div>
        )
});

RippleEffect.displayName = "RippleEffect";


export default RippleEffect;