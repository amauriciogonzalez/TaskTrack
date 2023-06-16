import React from "react";

function ColorSelection(props)
{
    // Find common HTML color codes here: https://www.computerhope.com/htmcolor.htm
    let colors = [
        '#8b0000', // Dark Red
        '#ff0000', // Red
        '#A52A2A', // Brown
        '#FFA500', // Orange
        '#FFFF00', // Yellow
        '#808000', // Olive
        '#008000', // Green
        '#00FF00', // Lime
        '#00FFFF', // Cyan
        '#ADD8E6', // Light Blue
        '#0000FF', // Blue
        '#00008B', // DarkBlue
        '#800080', // Purple
        '#FF00FF', // Magenta
        '#FFC0CB', // Pink
        '#FFFFFF', // White
        '#C0C0C0', // Silver
        '#808080', // Grey
        '#000000', // Black
    ]

    // The mapping below displays each color as a selectable dot when the user is creating or editing a subject. 
    let dots = colors.map(function(color) {
        let styleDot = {
            backgroundColor: props.currentColor === color ? 'transparent' : color,
            borderColor: color,
            border: '2px solid ' + color,
            cursor: props.currentColor === color ? 'default' : 'pointer'
        }

        return (<span
                    className="color-selection-dot"
                    style={styleDot}
                    onClick={() => props.changeColor(color)}
                >
                </span>)
    })

    // Below, we display the list of dots in a row.

    return (
        <div className="color-selection">
            {dots}
        </div>
    )
}

export default ColorSelection