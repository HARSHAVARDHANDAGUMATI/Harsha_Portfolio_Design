import { cn } from '../../utils/cn'

function Button({ as: Comp = 'button', className, variant = 'primary', ...props }) {
  return <Comp className={cn('button', `button--${variant}`, className)} {...props} />
}

export default Button
