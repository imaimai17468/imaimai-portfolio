import { SideTab } from "@/components/common";
import { SideNaviProps } from "./SideNavi.type";

export const SideNavi = (props: SideNaviProps) => {
    const { className, onClicks, isOpens } = props;

  return (
    <div className={className}>
      <SideTab
        iconName="cd"
        title="MUSICS"
        className="top-80 -rotate-1 hover:-left-3 -left-8 transition-all"
        onClick={onClicks?.onMusicClick}
        isClicked={isOpens?.isOpenMusic}
      />
      <SideTab
        iconName="bag"
        title="WORKS"
        className="top-60 -rotate-6 hover:-left-3 -left-8 transition-all"
        onClick={onClicks?.onWorksClick}
        isClicked={isOpens?.isOpenWorks}
      />
      <SideTab
        iconName="code"
        title="SKILLS"
        className="top-40 rotate-1 hover:-left-3 -left-8 transition-all"
        onClick={onClicks?.onSkillsClick}
        isClicked={isOpens?.isOpenSkills}
      />
      <SideTab
        iconName="user"
        title="ABOUT"
        className="top-20 -rotate-3 hover:-left-3 -left-8 transition-all"
        onClick={onClicks?.onAboutClick}
        isClicked={isOpens?.isOpenAbout}
      />
    </div>
  );
};

export default SideNavi;
