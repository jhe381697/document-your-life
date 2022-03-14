
export default function labelToColor(label) {
    if (label === "happy") {
        const style = {
            backgroundColor: '#D1F4CB',
        }
        return style
    }
    if (label === "sad") {
        const style = {
            backgroundColor: '#D7E4FE',
        }
        return style
    }
    if (label === "neutral") {
        const style = {
            backgroundColor: '#F5F9FF',
        }
        return style
    }
    if (label === "cool") {
        const style = {
            backgroundColor: '#FFD7B3',
        }
        return style
    }
}
