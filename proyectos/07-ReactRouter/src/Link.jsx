import { EVENTS } from "./consts"

export function navigate (href) {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
    const handleClick = (evt) => {
        const isMainEvent = evt.button === 0
        const isModifiedEvent = evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey
        const isManeagebleEvent = target === undefined || target === '_self'

        if(isMainEvent && !isModifiedEvent && isManeagebleEvent){
            evt.preventDefault()
            navigate(to)
        }

    }

    return <a onClick={handleClick} href={to} target={target} {...props}/>
}