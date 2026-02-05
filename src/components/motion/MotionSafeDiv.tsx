import { m, type MotionProps } from "framer-motion";
import type { PropsWithChildren, HTMLAttributes, JSX } from "react";
import { useMotionSafe } from "../../hooks/use-motionSafe";

type MotionSafeDivProps =
    PropsWithChildren<
        MotionProps &
        HTMLAttributes<HTMLElement>
    > & {
        as?: keyof JSX.IntrinsicElements;
    };

export function MotionSafeDiv({
    children,
    as = "div",
    ...props
}: MotionSafeDivProps) {
    const motionEnabled = useMotionSafe();

    if (!motionEnabled) {
        const Component = as as any;
        return <Component {...props}>{children}</Component>;
    }

    const MotionComponent = m[as as keyof typeof m] as any;

    return <MotionComponent {...props}>{children}</MotionComponent>;
}
