import { Button, ProgressBar } from "@heroui/react"
import { ProgressItemType } from "./types"

function ProgressItemCard({title, items, progress, buttonLabel}: ProgressItemType) {
    return (
        <div className="bg-white h-25 grid grid-cols-20 p-5 items-center">
            <div className="col-span-1">
                <div className="bg-[#0E2B85] h-15 w-15 text-white font-bold text-2xl flex justify-center items-center">RP</div>
            </div>
            <div className="col-span-17">
                <span className="font-bold" >{title}</span>
                <div className="flex">
                    <img src="/book-logo.svg" alt="book-logo" />
                    <span className="ml-2 text-sm text-gray-600" >{items}</span>
                </div>
                <div className="flex">
                    <ProgressBar aria-label="Loading" className="w-145" value={progress}>
                        <ProgressBar.Track>
                            <ProgressBar.Fill />
                        </ProgressBar.Track>
                    </ProgressBar>
                    <span className="ml-2 text-gray-500 text-xs">{progress}%</span>
                </div>
            </div>
            <div className="col-span-2">
                <Button className="rounded-md">{buttonLabel}</Button>
            </div>
        </div>
    )
}

export default ProgressItemCard