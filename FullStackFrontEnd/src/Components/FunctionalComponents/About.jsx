const About=(props)=>{
    return (
            <section>
                <h1>This is my About Page</h1>
                <h2>I am Studying in {props.college}! (Received using props)</h2>
                <h2>Other Colleges: {props.clg1},{props.clg2}</h2>
            </section>
        );
};
export default About;