export const SVG_ICON = {
    CD: 'cd',
    USER: 'user',
    CODE: 'code',
    BAG: 'bag',
} as const;

export type SVG_ICON = typeof SVG_ICON[keyof typeof SVG_ICON];

export interface SideTabProps {
    iconName: SVG_ICON;
    title?: string;
    className?: string;
    onClick?: () => void;
    isClicked?: boolean;
}
