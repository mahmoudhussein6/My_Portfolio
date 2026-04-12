const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <section
                className="max-w-7xl mx-auto relative z-0 py-16 px-4 sm:px-16"
                id={idName}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component />
            </section>
        );
    };

export default SectionWrapper;
