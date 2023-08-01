export type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
} & JSX.IntrinsicElements['button']
