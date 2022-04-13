import {
  ChartBarIcon,
  InformationCircleIcon,
  MusicNoteIcon
} from '@heroicons/react/outline'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div className="navbar sticky top-0 bg-white dark:bg-slate-700">
      <div className="navbar-content px-5 flex">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <div className='justify-center ml-4 pl-1.5'>
        <p className="text-3xl ml-3 font-drukwide text-sky-700 dark:text-white">roadle</p>
        </div>
        <div className="right-icons">
          <MusicNoteIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={()=> window.open("https://hey.breakfastroad.com", "_blank")}
          />
          <ChartBarIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          {/*<CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
  />*/}
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
