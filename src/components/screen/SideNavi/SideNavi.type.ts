interface onClicks {
    onMusicClick?: () => void;
    onWorksClick?: () => void;
    onAboutClick?: () => void;
    onSkillsClick?: () => void;
}

interface isOpens {
    isOpenMusic?: boolean;
    isOpenWorks?: boolean;
    isOpenAbout?: boolean;
    isOpenSkills?: boolean;
}

export interface SideNaviProps {
    className?: string;
    onClicks?: onClicks;
    isOpens?: isOpens;
}
