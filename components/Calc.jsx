import { useEffect, useState } from "react"


export default function Calc({ measure }) {
    const [rainfall, setRainfall] = useState(0)
    const [ratio, setRatio] = useState(.75)
    const [length, setLength] = useState(0)
    const [width, setWidth] = useState(0)
    const [gutterWidth, setGutterWidth] = useState(0)
    const [gutterDepth, setGutterDepth] = useState(0)

    useEffect(() => {

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setGutterWidth(12 * 0.0106 * Math.pow(ratio, -(4 / 7)) * Math.pow(length, (3 / 28)) * Math.pow((rainfall * (width * length)), (5 / 14)));
        setGutterDepth(gutterWidth * ratio)
        if (measure == 'metric') {
            setGutterWidth(gutterWidth * 2.54)
            setGutterDepth(gutterDepth * 2.54)
        }
    }

    return (
        <>
            <div
                className="bg-white flex flex-col justify-center items-center w-4/6 md:3/6 lg:w-2/6 mt-4"
            >
                {measure == "imperial" ? (
                    <div className="">"Hello American!"</div>
                ) : (<div className="">"Hello Most Everyone!"</div>)
                }
            </div>

            <form className="w-4/6 md:3/6 lg:w-2/6 flex flex-col justify-center mt-4">

                <div className="shadow-md">
                    <h3 className="text-white section-heading w-full bg-blue-400 flex justify-center mt-4">Project Location</h3>
                    <div className="bg-white flex flex-col justify-center items-center w-full">
                        <label for="rainfall">Rainfall Intensity (in/hr) </label>
                        <select
                            id="rainfall"
                            onChange={(e) => setRainfall(e.target.value)}>
                            <option value="select">Nearest City</option>
                            <option value="1.0">Cleveland</option>
                            <option value="2.6">Pittsburgh</option>
                            <option value="1.4">Seattle</option>
                            <option value="4.7">Miami</option>
                        </select>
                        <span className="h-8">{rainfall}</span>
                    </div>
                </div>

                <div className="shadow-md">
                    <h3 className="text-white section-heading w-full bg-blue-400 flex justify-center mt-4">Drainage Area</h3>
                    <div className="flex flex-col w-full bg-white">
                        <label for="width">Width</label>
                        <input
                            id="width"
                            type="number"
                            onInput={(e) => setWidth(e.target.value)}
                            required
                        ></input>


                        <label for="length">Length</label>
                        <input
                            id="length"
                            type="number"
                            onChange={(e) => setLength(e.target.value)}
                            required
                        ></input>
                    </div>
                </div>

                <label for="ratio">Gutter Ratio</label>
                <input
                    id="ratio"
                    type="range"
                    min={.25}
                    max={1}
                    step={.25}
                    value={ratio}
                    onChange={(e) => setRatio(e.target.value)}
                    className="w-48"
                ></input>
                <div>{ratio}</div>

                <div className="flex justify-center">
                    <input
                        type="submit"
                        value="Submit"
                        onClick={handleSubmit}
                        className="bg-white p-2 mr-2 active:bg-blue-100 w-24"
                    ></input>
                    <input
                        type="reset"
                        value="Clear"
                        className="bg-white p-2 active:bg-blue-100 w-24"
                    ></input></div>

            </form>

            <h3 className="text-white section-heading w-4/6 md:3/6 lg:w-2/6 bg-blue-400 flex justify-center mt-4">Results</h3>
            <div className="mb-24">
                {measure == 'imperial' ? (
                    <>
                        <p>Gutter Width: {Math.ceil(gutterWidth)} in</p>
                        <p>Gutter Depth: {Math.ceil(gutterDepth)} in</p>
                    </>) : (
                    <>
                        <p>Gutter Width: {Math.ceil(gutterWidth)} cm</p>
                        <p>Gutter Depth: {Math.ceil(gutterDepth)} cm</p>
                    </>)}
            </div>

        </>
    )
}