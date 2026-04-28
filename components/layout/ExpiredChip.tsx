import { Chip } from "@heroui/react"

const ExpiredChip = ({text}: {text: string}) => {
    return (
        <Chip variant='primary' color="danger">{text}</Chip>
    )
}

export default ExpiredChip