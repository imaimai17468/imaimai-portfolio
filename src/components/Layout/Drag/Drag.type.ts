interface Container {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

export interface DragProps {
    children: React.ReactNode;
    container: Container;
    className?: string;
}

