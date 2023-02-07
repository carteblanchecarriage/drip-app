import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { Tooltip } from '@chakra-ui/react'

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
    let rainIntensity = ""

    if (measure === "metric") {
        unitLg = "(meters)"
        unitSm = "cm"
        rainIntensity = "(cm/hr)"
    } else {
        unitLg = "(ft)"
        unitSm = "inches"
        rainIntensity = "(in/hr)"
    }

    const handleClear = () => {
        setInputs({ ...inputs, ratio: .75, rainfall: "", gutterWidth: "", gutterDepth: "" })
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
    }, [measure, inputs.ratio, inputs.width, inputs.length, inputs.rainfall])

    return (
        <>
            {measure == "imperial" ? (
                <div className="badge">Hello American!</div>
            ) : (<div className="badge">Hello Most Everyone!</div>)
            }

            <div className="mt-4 md:w-96">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full shadow-md">
                        <Tooltip label="this is where the rain info is from" placement="top">
                            <h3 className="w-full text-white section-heading bg-blue-400 flex justify-center text-center mt-4 px-2">Rainfall Intensity {rainIntensity}</h3>
                        </Tooltip>
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
                        <Tooltip label="the horizontal plane of the roof area you're draining" placement="top">
                            <h3 className="text-white section-heading w-full bg-blue-400 flex justify-center text-center mt-4">Drainage Area</h3>
                        </Tooltip>
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

                    <label htmlFor="ratio" className="flex justify-center">Gutter Ratio</label>
                    <input
                        id="ratio"
                        type="range"
                        min={.25}
                        max={1}
                        step={.25}
                        value={inputs.ratio}
                        onChange={(e) => setInputs({ ...inputs, ratio: e.target.value })}
                        className="w-full"
                    ></input>
                    <div className="flex justify-center">{inputs.ratio}</div>

                    <div className="flex justify-center">
                        <input
                            type="submit"
                            value="Submit"
                            className="bg-white p-2 mr-2 active:bg-blue-100 w-24 hover:bg-blue-100 cursor-pointer"
                            onClick={handleSubmit}
                        ></input>
                        <input
                            type="reset"
                            value="Clear"
                            className="bg-white p-2 active:bg-blue-100 w-24 hover:bg-blue-100 cursor-pointer"
                            onClick={handleClear}
                        ></input>
                    </div>
                </form>

                <div className="shadow-md mt-4 md:w-96">
                    <h3 className="text-white section-heading w-full bg-blue-400 flex justify-center text-center mt-4">Results</h3>
                    <div className=" bg-white">
                        <p>Gutter Width: {Math.ceil(inputs.gutterWidth)} {unitSm}</p>
                        <p>Gutter Depth: {Math.ceil(inputs.gutterDepth)} {unitSm}</p>
                    </div>
                </div>
            </div>


        </>
    )
}