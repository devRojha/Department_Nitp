import BackDepartment from "@/components/BackDepartment"


function Page() {
    return (
        <div className=" flex flex-col p-5 h-screen">
            <div className="flex flex-col md:ml-10">
                <div>
                    <div>
                        <BackDepartment navigate={'/AllDepartment/ECE'} />
                    </div>
                    <p className="text-red-900 text-3xl font-bold">
                        VISION
                    </p>
                    <p className="mt-6 md:text-lg">
                        To provide globally competitive and high quality human resource by preparing students with broad-based / specialized technical education at UG, PG, and Ph.D. levels.
                        To increase research intensity and become a leading product based innovation centre by significantly contributing towards development of new technologies.
                        To contribute to the country and the society at large by strengthening the interaction between academia and industries for addressing the need of the mankind.
                    </p>
                </div>
                <div className="mt-10">
                    <p className="text-red-900 text-3xl font-bold">
                        MISSION
                    </p>
                    <p className="mt-6 md:text-lg">
                        To become a centre of excellence to impart up-to-date technical education, which will let our students to attain their maximum technical potential, managerial capability, be competitive in the job market and to emerge as a leading research hub.
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Page