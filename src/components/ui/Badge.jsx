import { cn } from '../../utils/cn'

function Badge({ children, className }) {
  return <span className={cn('badge', className)}>{children}</span>
}

export default Badge
