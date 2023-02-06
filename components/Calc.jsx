import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";

export default function Calc({ measure }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [inputs, setInputs] = useState({
        rainfall: "",
        length: 0,
        width: 0,
        ratio: .75,
        gutterWidth: 0,
        gutterDepth: 0,
    })

    let unitSm = ""
    let unitLg = ""

    if (measure === "metric") {
        unitLg = "(meters)"
        unitSm = "cm"
    } else {
        unitLg = "(ft)"
        unitSm = "inches"
    }

    const handleClear = () => {
        setInputs({ ...inputs, rainfall: 0 })
        setInputs({ ...inputs, ratio: .75 })
    }

    let widthMath = 0
    let depthMath = 0
    let gutterArea = 0

    const gutterCalc = () => {
        if (measure == 'metric') {
            widthMath = (2.54 * (12 * 0.0106 * Math.pow(inputs.ratio, -(4 / 7)) * Math.pow(inputs.length, (3 / 28)) * Math.pow((inputs.rainfall * (inputs.width * inputs.length)), (5 / 14))));
            depthMath = (widthMath * inputs.ratio);
        } else {
            widthMath = ((12 * 0.0106 * Math.pow(inputs.ratio, -(4 / 7)) * Math.pow(inputs.length, (3 / 28)) * Math.pow((inputs.rainfall * (inputs.width * inputs.length)), (5 / 14))));
            depthMath = (widthMath * inputs.ratio);
        }
        gutterArea = widthMath * depthMath
        console.log('gutterArea', gutterArea)
    }

    const onSubmit = (e) => {
        setInputs({ ...inputs, rainfall: e.rainfall })
        setInputs({ ...inputs, length: e.length })
        setInputs({ ...inputs, width: e.width })
        gutterCalc()
        setInputs({ ...inputs, gutterWidth: widthMath })
    }

    useEffect(() => {
        if (inputs.rainfall && inputs.width && inputs.length) {
            gutterCalc()
            setInputs({ ...inputs, gutterWidth: widthMath, gutterDepth: depthMath })
        }
    }, [measure, inputs.ratio, inputs.width, inputs.length])

    return (
        <>
            <div
                className="bg-white flex flex-col justify-center items-center w-4/6 md:3/6 lg:w-2/6 mt-4"
            >
                {measure == "imperial" ? (
                    <div className="">Hello American!</div>
                ) : (<div className="">Hello Most Everyone!</div>)
                }
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 md:3/6 lg:w-2/6 flex flex-col justify-center mt-4">

                <div className="shadow-md">
                    <h3 className="text-white section-heading w-full bg-blue-400 flex justify-center mt-4">Rainfall Intensity</h3>
                    <div className="bg-white flex flex-col justify-center items-center w-full">
                        <label htmlFor="rainfall">Location</label>
                        <select
                            id="rainfall"
                            onInput={(e) => setInputs({ ...inputs, rainfall: e.target.value })}
                            {...register("rainfall", { required: true })}
                        >
                            <option value="">Nearest City</option>
                            <option value="1.0">Cleveland</option>
                            <option value="2.6">Pittsburgh</option>
                            <option value="1.4">Seattle</option>
                            <option value="4.7">Miami</option>
                        </select>
                        {errors.rainfall && <span className="bg-red-400 text-sm">Please enter a location</span>}
                        <span className="h-8">{inputs.rainfall}</span>
                    </div>
                </div>

                <div className="shadow-md">
                    <h3 className="text-white section-heading w-full bg-blue-400 flex justify-center mt-4">Drainage Area</h3>
                    <div className="flex flex-col w-full bg-white">

                        <div className="flex mt-2">
                            <label htmlFor="width" className="mr-2">Roof Width {unitLg}</label>
                            <input
                                id="width"
                                type="number"
                                className="bg-gray-100 w-24"
                                onInput={(e) => setInputs({ ...inputs, width: e.target.value })}
                                {...register("width", { required: true })}
                            />
                            {errors.width && <span className="bg-red-400 text-sm px-2">Please enter a width</span>}
                        </div>

                        <div className="flex my-2">
                            <label htmlFor="length" className="mr-2">Roof Length {unitLg}</label>
                            <input
                                id="length"
                                type="number"
                                className="bg-gray-100 w-24"
                                onInput={(e) => setInputs({ ...inputs, length: e.target.value })}
                                {...register("length", { required: true })}
                            />
                            {errors.length && <span className="bg-red-400 text-sm px-2">Please enter a length</span>}
                        </div>

                    </div>
                </div>

                <label htmlFor="ratio">Gutter Ratio</label>
                <input
                    id="ratio"
                    type="range"
                    min={.25}
                    max={1}
                    step={.25}
                    value={inputs.ratio}
                    onChange={(e) => setInputs({ ...inputs, ratio: e.target.value })}
                    className="w-48"
                ></input>
                <div>{inputs.ratio}</div>

                <div className="flex justify-center">
                    <input
                        type="submit"
                        value="Submit"
                        className="bg-white p-2 mr-2 active:bg-blue-100 w-24"
                        onClick={handleSubmit}
                    ></input>
                    <input
                        type="reset"
                        value="Clear"
                        className="bg-white p-2 active:bg-blue-100 w-24"
                        onClick={handleClear}
                    ></input></div>
            </form>

            <div className="shadow-md w-4/6 md:3/6 lg:w-2/6 flex flex-col justify-center mt-4 mb-48">
                <h3 className="text-white section-heading w-full bg-blue-400 flex justify-center mt-4">Results</h3>
                <div className=" bg-white w-full result-change">
                    <p>Gutter Width: {Math.ceil(inputs.gutterWidth)} {unitSm}</p>
                    <p>Gutter Depth: {Math.ceil(inputs.gutterDepth)} {unitSm}</p>
                </div>
            </div>
        </>
    )
}