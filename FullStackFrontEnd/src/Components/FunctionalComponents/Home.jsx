// export default NavBar=()=>{
//     <h1>This is Navigation Bar</h1>
// }   also works

import React from "react"; // here it works even if react is not imported
import '../../assets/css/Home.css'

var Home=(()=>{

    var styling={
        fontSize: "30px",
        color: "slateblue",
        textDecoration: "underline"
    }

        return(
            <header>
                <h1 style={styling}>This is Home Page</h1>
                <h2 id="idSEg">Testing Styling</h2>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fuga hic? Repudiandae illo numquam eos dolor sapiente enim deleniti, quae quidem velit esse, a ipsa tenetur alias suscipit vel ipsam architecto sed quisquam facilis vero quos repellendus delectus! Temporibus cumque quasi, ut nobis omnis debitis, itaque illum dicta quis officiis repudiandae beatae odio ullam. Nihil, veritatis qui. Voluptatum natus vero aliquam eveniet. Assumenda totam commodi ea, delectus dicta tempore minima, dolorum odio vel at optio! Fuga illo similique architecto praesentium corrupti officia facilis quia ex! Nostrum vel distinctio excepturi minima maxime accusamus quidem nesciunt quae, nihil ex vitae optio laboriosam laborum impedit magnam consequatur molestiae. Consequuntur totam voluptas vero accusantium? Obcaecati molestiae ipsum ipsa vel odio similique aperiam repellendus natus quos, eveniet quam voluptatum! Nobis corporis dicta quas nam, dignissimos cupiditate dolorum fugit laborum iste tempora eius. Alias, pariatur quae dolor natus sed culpa fugiat. Praesentium, rerum. Maxime qui impedit animi quod ea architecto, saepe accusamus asperiores ullam laborum corporis, sed officia ut! Molestiae reiciendis totam blanditiis, error asperiores nostrum aliquid dolorem alias natus maxime modi quod minus obcaecati voluptatum praesentium eum ut earum ducimus. Distinctio ipsa voluptatem repudiandae quaerat dignissimos cum inventore repellat saepe, quia exercitationem. Vel, atque ea!</p> */}
                <p className="box-model">Hello</p>
            </header>
        );
    
})
export default Home;