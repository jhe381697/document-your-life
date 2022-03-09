
export default function labelToColor(label) {
    if (label === "happy") {
        const style = {
            backgroundColor: 'rgb(1, 248, 1)',
        }
        return style
    }
    if (label === "sad") {
        const style = {
            backgroundColor: 'grey',
        }
        return style
    }
    if (label === "neutral") {
        const style = {
            backgroundColor: 'rgb(245, 231, 104)',
        }
        return style
    }
    if (label === "cool") {
        const style = {
            backgroundColor: 'rgb(255, 157, 0)',
        }
        return style
    }
}
