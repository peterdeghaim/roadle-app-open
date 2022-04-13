import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'w-12 h-12 border-solid border-2 flex items-center justify-center mx-0.5 text-xl rounded dark:text-white font-drukwide lowercase',
    {
      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
        !status,
      'border-black dark:border-slate-100': value && !status,
      'absent  bg-stone-700 dark:bg-slate-700 text-white border-neutral-700 dark:border-slate-700':
        status === 'absent',
      'correct  bg-orange-500 text-white border-orange-500':
        status === 'correct' && isHighContrast,
      'present  bg-cyan-500 text-white border-cyan-500':
        status === 'present' && isHighContrast,
      'correct  bg-green-500 text-white border-green-500':
        status === 'correct' && !isHighContrast,
      'present  bg-amber-400 text-white border-amber-400':
        status === 'present' && !isHighContrast,
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  )
}
