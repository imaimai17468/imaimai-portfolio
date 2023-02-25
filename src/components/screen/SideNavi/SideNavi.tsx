import { SideTab } from '@/components/common'

import { SideNaviProps } from './SideNavi.type'

export const SideNavi = (props: SideNaviProps) => {
  const { className, onClicks, isOpens } = props

  return (
    <div className={className}>
      <SideTab
        iconName='cd'
        title='MUSICS'
        className='bottom-20 -left-8 -rotate-1 transition-all hover:-left-3'
        onClick={onClicks?.onMusicClick}
        isClicked={isOpens?.isOpenMusic}
      />
      <SideTab
        iconName='code'
        title='SKILLS'
        className='bottom-40 -left-8 rotate-1 transition-all hover:-left-3'
        onClick={onClicks?.onSkillsClick}
        isClicked={isOpens?.isOpenSkills}
      />
      <SideTab
        iconName='bag'
        title='WORKS'
        className='bottom-60 -left-8 -rotate-6 transition-all hover:-left-3'
        onClick={onClicks?.onWorksClick}
        isClicked={isOpens?.isOpenWorks}
      />
      <SideTab
        iconName='user'
        title='ABOUT'
        className='bottom-80 -left-8 -rotate-3 transition-all hover:-left-3'
        onClick={onClicks?.onAboutClick}
        isClicked={isOpens?.isOpenAbout}
      />
    </div>
  )
}

export default SideNavi
