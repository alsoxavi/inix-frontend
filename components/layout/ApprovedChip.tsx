import { Chip } from "@heroui/react"

const ApprovedChip = ({text}: {text: string}) => {
    return (
        <Chip variant='primary' color="accent">{text}</Chip>
    )
}

export default ApprovedChip