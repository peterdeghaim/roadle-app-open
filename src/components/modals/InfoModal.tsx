import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="how to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        try to guess the street name in 8 tries. tbh u probs played w*rdle already so u know the rest
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="o"
          status="correct"
        />
        <Cell value="x" />
        <Cell value="f" />
        <Cell value="o" />
        <Cell value="r" />
        <Cell value="d" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        the letter o is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="o" />
        <Cell value="x" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="f"
          status="present"
        />
        <Cell value="o" />
        <Cell value="r" />
        <Cell value="d" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        the letter f is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="o" />
        <Cell value="x" />
        <Cell value="f" />
        <Cell value="o" />
        <Cell isRevealing={true} isCompleted={true} value="r" status="absent" />
        <Cell value="d" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        the letter r is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        make sure u listen to our music <a href="https://hey.breakfastroad.com">[click here]</a> if u enjoy tha game :* we made this for the area so most streets are from western sydney
      </p>
    </BaseModal>
  )
}
