import '../../assets/css/Form.css'

var Form=()=>{
    return(
        <footer id="foot">
            <h3 id="hed"><i>This is the Footer Section</i></h3>
            <form>
                <label for="fname">First Name:</label>
                <input type="text" id="fname" name="fname" placeholder="First Name"></input><br></br>
                <br></br>
                <label for="lname">Last Name:</label>
                <input type="text" id="lname" name="lname" placeholder="Last Name"></input>
                <br></br>
                {/* <h4>How are you  feeling?</h4>             */}
                <br></br>
                <label for="review">Are you Happy?</label>
                <input type="text" id="review" name="review" placeholder="Yes"></input>     
                {/* <input type="radio" id="happy" name="currentMood" value="happy"></input>
                <label for="happy">Happy:)</label>
                <input type="radio" id="notHappy" name="currentMood" value="notHappy"></input>
                <label for="nothappy">Not Happy:(</label> */}
                <br></br>
                <div class="centeredButton">
                    <button id="butn">Submit</button>
                </div>
                
            </form>
        </footer>
    )
}
export default Form;