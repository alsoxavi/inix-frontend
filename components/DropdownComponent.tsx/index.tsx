import { Select, Label, ListBox } from "@heroui/react"
import { DropdownTypes } from "./types"

const DropdownComponent = (props: DropdownTypes) => {
    return (
        <Select placeholder="Selecciona una">
            <Label className="font-semibold text-sm mb-1">{props.label}</Label>
            <Select.Trigger className="bg-[#F8FAFC]">
                <Select.Value />
            </Select.Trigger>
            <Select.Popover>
                <ListBox>
                    {props.options.map(item => (
                        <ListBox.Item id={item.value} textValue={item.value} key={item.value}>
                            {item.text}
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    ))}
                </ListBox>
            </Select.Popover>
        </Select>
    )
}

export default DropdownComponent