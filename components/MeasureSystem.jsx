export default function MeasureSystem({ setMeasure }) {

    const handleMeasurement = (e) => {
        setMeasure(e.target.id)
    }

    return (
        <>
            <form className="relative flex flex-col justify-center items-center w-4/6 sm:flex-row sm:3/6 md:w-2/6 shadow-md">
                <label for="imperial"
                    className="min-w-[200px] flex justify-center w-1/2 px-4 py-2 text-2xl font-medium text-gray-900 bg-white border border-gray-200 rounded-t-md md:rounded-none md:rounded-l-md hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                    Imperial
                    <input
                        id="imperial"
                        value=""
                        type="radio"
                        className=""
                        name="measurement"
                        onClick={handleMeasurement}
                    /></label>

                <label for="metric" className="min-w-[200px] flex justify-center w-1/2 px-4 py-2 text-2xl font-medium text-gray-900 bg-white border border-gray-200 rounded-t-md md:rounded-none md:rounded-l-md hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">Metric</label>
                <input
                    id="metric"
                    type="radio"
                    className=""
                    name="measurement"
                    onClick={handleMeasurement}
                />
            </form>

        </>
    )
}