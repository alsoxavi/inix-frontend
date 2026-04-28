import { Chip } from "@heroui/react"

const PendingChip = ({text}: {text: string}) => {
    return (
        <Chip variant='primary' color="warning">{text}</Chip>
    )
}

export default PendingChip