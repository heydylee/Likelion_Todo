import { HTMLAttributes } from "react"

export const NoteAddIcon = ({...props}: HTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} className={"icon-[mdi--note-add] " + props.className}/>
}

export const NoteCheckIcon = ({...props}: HTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} className={"icon-[mdi--note-check] " + props.className}/>
}

export const NoteMinusIcon = ({...props}: HTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} className={"icon-[mdi--note-minus] " + props.className}/>
}

export const NoteRemoveIcon = ({...props}: HTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} className={"icon-[mdi--note-remove] " + props.className}/>
}

export const NoteEditIcon = ({...props}: HTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} className={"icon-[mdi--note-edit] " + props.className}/>
}

export const ClickIcon = ({...props}: HTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} className={"icon-[tabler--click] " + props.className}/>
}

export const CheckboxMarkedCircleIcon = ({...props}: HTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} className={"icon-[mdi--checkbox-marked-circle-outline] " + props.className}/>
}

export const CheckboxBlankCircleIcon = ({...props}: HTMLAttributes<HTMLSpanElement>) => {
    return <span {...props} className={"icon-[mdi--checkbox-blank-circle-outline] " + props.className}/>
}

