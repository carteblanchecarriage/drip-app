export default function MeasureSystem({ setMeasure }) {

    const handleMeasurement = (e) => {
        setMeasure(e.target.id)
    }

    return (
        <>
            <form className="flex flex-col justify-center items-center md:w-96 shadow-md">
                <h3 className="text-white section-heading text-center w-full bg-blue-400 justify-center p-2">Measurement System</h3>
                <label htmlFor="imperial"
                    className="min-w-[200px] flex justify-center w-full px-4 py-2 text-2xl font-medium text-gray-900 bg-white border border-gray-200 rounded-t-md md:rounded-none md:rounded-l-md hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                    Imperial
                    <input
                        id="imperial"
                        type="radio"
                        className=""
                        name="measurement"
                        onClick={handleMeasurement}
                    /></label>

                <label htmlFor="metric"
                    className="min-w-[200px] flex justify-center w-full px-4 py-2 text-2xl font-medium text-gray-900 bg-white border border-gray-200 rounded-t-md md:rounded-none md:rounded-l-md hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">Metric
                    <input
                        id="metric"
                        type="radio"
                        className=""
                        name="measurement"
                        onClick={handleMeasurement}
                    /></label>


            </form>

        </>
    )
}